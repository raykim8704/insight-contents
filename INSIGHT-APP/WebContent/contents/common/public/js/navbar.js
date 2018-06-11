//// 네비바에 필요한 정보
//var userInfo = LEMP.Storage.get({"_sKey" : "userInfo"});
//var cpCode = LEMP.Storage.get({"_sKey" : "cpCode"});
//var main = LEMP.Storage.get({"_sKey" : "main"});
//var autoLogin = LEMP.Storage.get({"_sKey" : "autoLogin"});
//var pushYn = LEMP.Storage.get({"_sKey" : "pushYn"});
makeNavBar();
//
//
$.getScript( "../../common/js/materialize-plugin/sideNav.js" );
//<link href="../../common/vendors/sweetalert/dist/sweetalert.css"	type="text/css" rel="stylesheet">
//// 네비바 생성완료

function makeNavBar() {
	var eventID = LEMP.Properties.get( {
		'_sKey': 'evnum'
	} );
	console.log( eventID );
	var token = LEMP.Properties.get( {
		"_sKey": "token"
	} );
	var title = LEMP.Properties.get( {
		"_sKey": "evtitle"
	} );
	var classNum = LEMP.Properties.get( {
		"_sKey": "classNum"
	} );
	var auth = LEMP.Properties.get( {
		"_sKey": "authority"
	} )
	var userID = LEMP.Properties.get({
		"_sKey": "userID"
	})

	$( '#menu-event-title' ).text( title );
	$( '#menu-current-user').text( "ID : " + userID );


	// 사이드 네비 슬라이드 활성화
	$( '#slide_out_btn' ).sideNav( {
		edge: 'left',
		draggable: 'true',
		onOpen: function ( el ) {
			console.log( "opened!" )
		},
		onClose: function ( el ) {
			console.log( "closed!" )
		}
	} );


	$( '#slide-out' ).perfectScrollbar();

	$( '#menu-eventlist' ).click( function () {

		LEMP.Window.replace( {
			"_sPagePath": "MAN/html/MAN1000.html"
		} );
	} );
	$( '#menu-eventdetail' ).click( function () {

		LEMP.Window.replace( {
			"_sPagePath": "DTI/html/DTI1000.html",
			"_oMessage": {
				"evnum": eventID
			}
		} );
	} );

	$( "#menu-board" ).click( function () {

		LEMP.Window.replace( {
			"_sPagePath": "BRD/html/BRD1000.html",
			"_oMessage": {
				"evnum": eventID
			}
		} );

	} );
	$( '#menu-attend' ).click( function () {
		LEMP.Window.replace( {
			"_sPagePath": "ATD/html/ATD1000.html",
			"_oMessage": {
				"evnum": eventID
			}
		} );
	} );
	$( '#menu-qna' ).click( function () {
		LEMP.Window.replace( {
			"_sPagePath": "QNA/html/QNA1000.html",
			"_oMessage": {
				"evnum": eventID,
				"classNum": classNum,
				"token": token
			}
		} );
	} );
	$( '#menu-quiz' ).click( function () {
		console.log( auth );
		switch ( auth ) {
			case 'TEACHER':
				LEMP.Window.replace( {
					"_sPagePath": "QIZ/html/QIZ2000.html",
					"_oMessage": {
						"evnum": eventID,
						"classNum": classNum
					}
				} );
				break;
			case 'STUDENT':
				LEMP.Window.replace( {
					"_sPagePath": "QIZ/html/QIZ1000.html",
					"_oMessage": {
						"evnum": eventID,
						"classNum": classNum
					}
				} );
				break;
			case 'ADMIN':
				LEMP.Window.replace( {
					"_sPagePath": "QIZ/html/QIZ2000.html",
					"_oMessage": {
						"evnum": eventID,
						"classNum": classNum
					}
				} );
				break;

		}

	} );
	$( '#menu-survey' ).click( function () {
		LEMP.Window.replace( {
			"_sPagePath": "SUR/html/SUR1000.html",
			"_oMessage": {
				"evnum": eventID,
				"classNum": classNum
			}
		} );
	} );
	$( '#menu-reference' ).click( function () {
		LEMP.Window.replace( {
			"_sPagePath": "REF/html/REF1000.html",
			"_oMessage": {
				"evnum": eventID,
				"classNum": classNum
			}
		} );
	} )


	setSettings( token );

	console.log( "end" );
}

function setSettings( token ) {

	var userID = LEMP.Properties.get( {
		"_sKey": "userID"
	} );
	var autoLogin = LEMP.Properties.get( {
		"_sKey": "autoLoginState"
	} );

	var loginBefore = LEMP.Properties.get( {
		"_sKey": "loginBefore"
	} );



	( !loginBefore ) ? askPushConfirm( token ): setPushSwitch( token );

	//
	//	if (!autoLogin) {
	//		boolautoLogin = false;
	//		$("#pushSwitch").prop("disabled", true);
	//	} else {
	//		boolautoLogin = true;
	//		$("#pushSwitch").prop("disabled", false);
	//	}

	$( "#autoLoginSwitch" ).prop( "checked", autoLogin );


	//	if(pushYn == "0"){
	//		boolPushYn = false;
	//	}else if(pushYn == "1"){
	//		boolPushYn = true;
	//	}
	//	if ( autoLogin == "0" ) {
	//		$( "#pushSwitch" ).prop( "disabled", true );
	//
	//		var pushSwitch = $( "#pushSwitch" ).prop( "checked" );
	//		if ( pushSwitch == true ) {
	//			$( "#pushSwitch" ).prop( "checked", false );
	//			$( "#pushSwitch" ).click();
	//			Materialize.toast( '자동로그인이 해제되어 푸시기능이 꺼집니다!', 4000 );
	//		}
	//	}



	//	$("#pushSwitch").prop("checked", boolPushYn);

	$( "#button_logout" ).click( function () {

		var result = true;

		LEMP.EDUApp.stopLomeoPush( {
			"_fCallback": function ( res ) {}
		} );

		var uuid;
		LEMP.EDUApp.getLomeoUuid( {
			"_fCallback": function ( res ) {
				var logoutResult;
				if ( res.result === "true" || res.result === true ) {
					var uuid = res.uuid;
					logoutResult = INSIGHT.REST.logoutService( token, uuid );
				} else {
					logoutResult = INSIGHT.REST.logoutService( token );
				}

				if ( logoutResult.customStatus === 'failed' ) {
					LEMP.EDUApp.showProgressBar( false );
					LEMP.EDUApp.errorService( eventDetail, "로그아웃하기" );
				}

				LEMP.Properties.remove( {
					"_sKey": "token"
				} );
				LEMP.Properties.remove( {
					"_sKey": "autoLoginState"
				} );
				LEMP.Properties.remove( {
					"_sKey": "userID"
				} );
				LEMP.Properties.remove( {
					"_sKey": "userPw"
				} );
				LEMP.Properties.remove( {
					"_sKey": "loginBefore"
				} );

				LEMP.Window.replace( {
					"_sPagePath": "LGN/html/LGN1000.html"
				} );
			}
		} );
		// result = INSIGHT.REST.logoutService(tokenID);

	} );


	$( "#autoLoginSwitch" ).click( function () {
		var autoLoginSwitch = $( "#autoLoginSwitch" ).prop( "checked" );
		console.log( autoLoginSwitch );

		LEMP.Properties.set( {
			_sKey: "autoLoginState",
			_vValue: autoLoginSwitch
		} );


	} );

	$( "#pushSwitchLever" ).click( function () {
		//			var pushFlag = $( "#pushSwitch" ).prop( "disabled" );
		//			console.log( pushFlag );
		//			if ( pushFlag == true ) {
		//				Materialize.toast(
		//					'자동로그인을 이용하지 않으면 푸시를 이용할 수 없습니다. 자동로그인을 사용해주세요!',
		//					4000 );
		//			}

		var pushFlag = $( "#pushSwitch" ).prop( 'checked' );
		console.log( pushFlag );

		( !pushFlag ) ? askPushConfirm( token ): cancelPushRegist( token );

	} );

}

function cancelPushRegist( token ) {
	INSIGHT.REST.setInsightPushAllowState( token, 0 );
}

function setPushSwitch( token ) {

	var pushINFO = INSIGHT.REST.checkInsightPushAllowState( token );

	if ( pushINFO.customStatus === "success" ) {
		if ( pushINFO.pushState === 0 ) {
			console.log( 'not accepted' );
			$( "#pushSwitch" ).prop( "checked", false );
		} else if ( pushINFO.pushState === 1 ) {
			console.log( ' accepted' );
			$( "#pushSwitch" ).prop( "checked", true );
		}
	} else {
		$( "#pushSwitch" ).prop( "checked", false );
		LEMP.EDUApp.errorService( pushINFO, "알람 동의 여부 가져오기" );
	}

}

function askPushConfirm( token ) {

	var resPushRegist;

	swal( {
			title: "푸시 알림 동의",
			text: "행사 정보 수신을 위한 푸시알림에 동의 하십니까?",
			type: "warning",
			showCancelButton: true,
			confirmButtonText: "수락",
			cancelButtonText: "미수락",
			closeOnConfirm: false,
			closeOnCancel: false
		},
		function ( isConfirm ) {
			if ( isConfirm ) {
				resPushRegist = INSIGHT.REST.setInsightPushAllowState( token, 1 );
				console.log( resPushRegist );
				( resPushRegist == 'allow' ) ?
				( swal( "푸시알림동의", "정상처리 되었습니다", "success" ),
					setPushSwitch( token ) ) :
				swal( "Sorry!", "처리되지 못했습니다. 잠시후에 다시 시도해 주십시요.", "error" );
			} else {
				resPushRegist = INSIGHT.REST.setInsightPushAllowState( token, 0 );
				console.log( resPushRegist );
				( resPushRegist == 'deny' ) ?
				( swal( "푸시알림 미동의", "미동의 처리 되었습니다", "warning" ),
					setPushSwitch( token ) ) :
				swal( "Sorry!", "처리되지 못했습니다. 잠시후에 다시 시도해 주십시요.", "error" );
			}
		} );

	//loginBefore
	LEMP.Properties.set( {
		"_sKey": 'loginBefore',
		"_vValue": true
	} );
}