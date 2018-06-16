/**
 * @module
 * @description 모바일 애플리케이션의 로그인 페이지에서 이용됩니다.
 */
var exitCount = 0;
LEMP.addEvent( "backbutton", "callbackBackButton" );
var block = false;
/**
 * 저희 앱은 LDCC의 <strong>L.EMP Platform</strong> 을 이용해 만들었습니다.
 * <br> LGN1000 모듈은 <strong>page</strong> class 안에서 native 기능은 L.EMP 라이브러리를, 그 외 기능은 jQuery를 이용하여 동작합니다.
 * @type {Object}
 */

var page = {

	/**
	 * 이미 로그인했는지 확인하고,
	 * <br><strong>로그인한 경우</strong> : 로그인 과정 없이, 과정리스트 페이지(MAN)로 넘어갑니다.
	 * <br><strong>로그인 기록이 없는 경우</strong> : 현재 페이지에 머무르고 인터페이스를 세팅합니다.
	 * @function page/init
	 */

	init: function () {
		page.loginCheck();
		page.initInterface();
	},
	loginCheck: function () {
		var value = LEMP.Properties.get( {
			"_sKey": "autoLoginState"
		} );
		console.log( value );

		if ( value ) {
			var userId = LEMP.Properties.get( {
				"_sKey": "userID"
			} );
			var userPw = LEMP.Properties.get( {
				"_sKey": "userPw"
			} );

			var autoLoginResult = INSIGHT.REST.loginService( userId, userPw );
			console.log(autoLoginResult);
			if ( autoLoginResult.customStatus === "success" ) {
				if(autoLoginResult.pwChangeReq!=1){
					//set login info
					page.setLoginInfo( autoLoginResult, userPw, value );

					LEMP.Window.open( {
						"_sPagePath": "MAN/html/MAN1000.html"
					} );
				}

			} else {
				LEMP.Properties.set( {
					_sKey: "autoLoginState",
					_vValue: false
				} );
				

				
//				alertReasonForeLoginFailure( autologinResult.status,
//					autologinResult.responseJSON );
			}
		}
	},
	/**
	 * 특정 이벤트 발생에 대한 처리를 담당합니다.
	 * <br>[#button_login 클릭 이벤트 리스너] 유효성 검사 진행(<a href="module-LGN_js_LGN0001.html#~checkValidation">checkValidation</a>)->서버에 로그인 요청->필요정보 받아옴->LEMP Properties에 저장
	 * @function page/initInterface
	 * @see checkValidation
	 */
	initInterface: function () {
		var timer;
		$( '#remember-me' ).click( function () {
			console.log( $( this ).is( ':checked' ) );
		} );
		$('#button_login').click(function(){
			$( '#login-form' ).submit( function (e) {
				e.stopPropagation();
				
				
				var id = $( '#username' ).val();
				var pw = $( '#password' ).val();
				var autoLoginState = $( '#remember-me' ).is( ':checked' );
				console.log( autoLoginState );


				var lomeoUuid;
				LEMP.EDUApp.showProgressBar( true );
				var validationResult = checkValidation( id, pw );
				if ( !block ) {
					block = true;
					if ( !validationResult ) {
						swal( "로그인 실패", "로그인 정보를 입력해주세요.", "warning" )



					} else if ( validationResult ) {
						//loginResult = INSIGHT.REST.loginService(id, pw,lomeoUuid);
						loginResult = INSIGHT.REST.loginService( id, pw );
						console.log( loginResult );

						if ( loginResult.customStatus === "success" ) {

							var needPwInit = loginResult.pwChangeReq;
							page.setLoginInfo( loginResult, pw, autoLoginState );

							if ( needPwInit != 1 ) {

								var unum = loginResult.id;
								unum = unum.toString();
								console.log( 'login result id ', unum );

								LEMP.EDUApp.startLomeoPush( {
									"_scustno": unum,
									"_sagentid": "insight",
//									"_sserverurl": "http://210.93.181.227:8080/apis/",
									"_sserverurl": "https://papi.bizlotte.com:8080/apis/",
									"_spackagename": "net.ldcc.insight",
									"_fCallback": function ( res ) {
										LEMP.EDUApp.getLomeoUuid( {
											"_fCallback": function ( res ) {
												if ( res.result === "true" || res.result === true ) {
													var pushUUIDResult = INSIGHT.REST.sendUUIDService( loginResult.token, res.UUID );

													if ( pushUUIDResult.customStatus === 'success' ) {
														//INSIGHT.REST.setInsightPushAllowState(0);
													} else {
														LEMP.EDUApp.errorService( pushUUIDResult, "알림 등록" );
													}
													LEMP.Window.open( {
														"_sPagePath": "MAN/html/MAN1000.html"
													} );
												} else {
													LEMP.Window.open( {
														"_sPagePath": "MAN/html/MAN1000.html"
													} );
												}
											}
										} );
									}
								} );
							} else if ( needPwInit == 1 ) {
								LEMP.Window.open( {
									"_sPagePath": "LGN/html/LGN2000.html",
									"_oMessage": {
										"_oResult": loginResult
									}
								} );
							}
						} else if ( loginResult.customStatus === "failed" ) {
							LEMP.EDUApp.showProgressBar( false );
							LEMP.Properties.set( {
								_sKey: "autoLoginState",
								_vValue: false
							} );
							alertReasonForeLoginFailure( loginResult.status, loginResult.responseJSON );
						}
					}
				}
				if ( !timer ) {
					timer = setTimeout( function () {
						timer = null;
						block = false;
					}, 2000 );
				}
				//e.preventDefault();
				return false;
			} );
		})
		
	},

	setLoginInfo: function ( loginResult, pw, autoLoginState ) {
		LEMP.Properties.setList( {
			"_aList": [ {
				_sKey: "token",
				_vValue: loginResult.token
			}, {
				_sKey: "authority",
				_vValue: loginResult.authority
			}, {
				_sKey: "unum",
				_vValue: loginResult.id
			}, {
				_sKey: "userID",
				_vValue: loginResult.account
			}, {
				_sKey: "userPw",
				_vValue: pw
			}, {
				_sKey: "autoLoginState",
				_vValue: autoLoginState
			} ]
		} );
		LEMP.Properties.get( {
				"_sKey": "loginBefore"
			} ) ? LEMP.Properties.set( {
				"_sKey": "loginBefore",
				"_vValue": true
			} ) :
			LEMP.Properties.set( {
				"_sKey": "loginBefore",
				"_vValue": false
			} );

	}
}


/**
 * ID와 PASSWORD의 유효성을 판단하여, 적합 여부를 반환합니다.
 * @param  {String} id 사용자 ID
 * @param  {String} pw 사용자 비밀번호
 *
 * @return {Boolean}   true: 유효성 통과, false: 유효성 탈락
 */
var checkValidation = function ( id, pw ) {
	var validationCheckResult = false;
	if ( id.length > 0 && pw.length > 0 ) {
		validationCheckResult = true;
	}
	return validationCheckResult;
};


/**
 * 로그인 시도 후, 서버로부터 로그인에 실패했을 때의 처리를 담당합니다.
 * @param  {Number} status          응답 코드
 * @param  {Object} reasonOfFailure 로그인 실패의 원인이 담겨 있습니다.
 */
var alertReasonForeLoginFailure = function ( status, reasonOfFailure ) {
	try{
		reasonOfFailure = JSON.parse(reasonOfFailure);

		if ( status === 472 ) {
			console.log( reasonOfFailure )
			var toastContent = '잘못된 비밀번호 입니다. 실패횟수 : ' + reasonOfFailure.count;
			Materialize.toast( toastContent, 3000 );
			//    LEMP.EDUApp.openAlertPopup("(실패횟수 : " + reasonOfFailure.count + ")");
		} else if ( status === 473 ) {
			Materialize.toast( '활성화된 계정이 아닙니다. 관리자에게 문의해 주세요.', 3000 )
			// LEMP.EDUApp.openAlertPopup("활성화된 계정이 아닙니다. 관리자에게 문의해 주세요.");
		} else if ( status === 474 ) {
			Materialize.toast( '로그인 시도횟수를 초과하였습니다. 관리자에게 문의해 주세요.', 3000 )
			//  LEMP.EDUApp.openAlertPopup("로그인 시도횟수를 초과하였습니다. 관리자에게 문의해 주세요.");
		} else if ( status === 475 ) {
			Materialize.toast( '계정이 잠겨 있습니다. 관리자에게 문의해 주세요', 3000 )
			//  LEMP.EDUApp.openAlertPopup("계정이 잠겨 있습니다. 관리자에게 문의해 주세요");
		} else {
			Materialize.toast( '잘못된 로그인 정보, 또는 네트워크 상태로 인해 로그인에 실패하였습니다.', 3000 )
			//  LEMP.EDUApp.openAlertPopup("잘못된 로그인 정보, 또는 네트워크 상태로 인해 로그인에 실패하였습니다.");
		}
	}catch(exception){
		Materialize.toast( '계속해서 로그인 실패시, 관리자에게 문의하세요.', 2000 )
	}
}


/**
 * 안드로이드에서 back 버튼을 눌렀을 경우, 종료 여부를 묻고 이에 따른 처리를 합니다.
 * <br> '종료하기' 버튼을 클릭한 경우 : 앱을 종료합니다.
 * <br> '아니오' 버튼틀 클릭한 경우 : 앱 상태를 유지합니다.
 */
var callbackBackButton = function () {

	var timer = setTimeout( function () {
		exitCount = 0;
	}, 2000 );
	exitCount += 1;
	if ( exitCount == 1 ) {
		Materialize.toast( '한번 더 누를 경우 앱을 종료합니다.', 2000 )
	} else if ( exitCount == 2 ) {
		LEMP.App.exit();
	}
};