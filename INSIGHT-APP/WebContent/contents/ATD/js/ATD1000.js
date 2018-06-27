LEMP.addEvent( "backbutton", "page.callbackBackButton" ); //안드로이드 back 버튼 입력 이벤트
var buttonText = [ '출석하기', '수료하기', '결&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp석', '미&nbsp&nbsp수&nbsp&nbsp료', '출첵완료' ];
var attendColor = [ 'red accent-2', 'amber', 'red-text', 'amber-text', 'blue-text', 'blue accent-2' ];
var eventDetail;
var locationXY;
var attendList;
var eventID;
var classNum;
var token;
var timer;
var block = false

var styles = {
	ATTEND: 0,
	TOCOMPLETION: 1,
	ABSENCE: 2,
	DROP: 3,
	COMPLETION: 4,
	COMPLETION_B: 5,
	REMOVE_PULSE: 1
}

var hiddenAtdButtonCount = 5;


$( document ).ready( function () {
	// the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
	$( '.modal' ).modal();
} );

var page = {
	/**
	 * 안드로이드에서 back 버튼을 눌렀을 경우, 행사 정보로 돌아갑니다.
	 */
	callbackBackButton: function () {
		LEMP.Window.replace( {
			"_sPagePath": "DTI/html/DTI1000.html",
			"_oMessage": {
				"evnum": eventID
			}
		} );
	},

	init: function ( eventInfo ) {
		console.log( 'start' );
		console.log( eventInfo )
		eventID = eventInfo.data.evnum;
		token = LEMP.Properties.get( {
			"_sKey": "token"
		} );
		authority = LEMP.Properties.get( {
			"_sKey": "authority"
		} );

		eventDetail = INSIGHT.REST.getEventDetail( token, eventID );
		eventDetail = eventDetail.data;
		locationXY = eventDetail.locationXY.split( "," );
		classNum = eventDetail.classes[ 0 ].id;
		console.log( 'classid:' + eventDetail.classes[ 0 ].id );
		page.initLayout();
		page.initInterface( eventID );
	},

	initLayout: function () {
		$( "#header" ).load( "../../common/public/html/header.html" );
		$( "#sideNav" ).load( "../../common/public/html/sideNav.html" );
		var date = LEMP.EDUApp.getTodayDate();
		var today = date.split( '/' );
		today = today[ 2 ] + '.' + today[ 0 ] + '.' + today[ 1 ];
		$( '#text-today' ).text( today );
		checkTodayAttend( attendList );
	},
	initInterface: function ( eventID ) {

		$( '#btn-attend' ).click( function () {
			if(!block){
				block = true;
				console.log( $(this).attr('complete'));
				var complete = $(this).attr('complete');
				if ( parseInt(complete) != 1 ){
			  	tryAttendance();
				}
			}
			if ( !timer ) {
				timer = setTimeout( function () {
					timer = null;
					block = false;
				}, 2000 );
			}
		} );

		$('#hidden_atd_btn').click(function(){
			hiddenAtdButtonCount = hiddenAtdButtonCount-1;
			
			hiddenAtdButtonCount == 0 ? ($('#hidden_atd_modal').modal('open'), $('#input_hidden').val(""), hiddenAtdButtonCount = 5) : console.log("not yet!!")
		})

		$( '#btn-location' ).click( function () {
			$( '#modal1' ).modal( 'open' );
			var targetLatitude = parseFloat( locationXY[  0 ] );
			var targetLongitude = parseFloat( locationXY[ 1 ] );
			//   LEMP.EDUApp.drawMap(locationX, locationY, "map");
			setTimeout( function () {
				LEMP.System.getGPS( {
					"_fCallback": function ( res ) {
						var latitude = res.latitude;
						var longitude = res.longitude;
						var domName = "atd_map";
						LEMP.EDUApp.drawMap( targetLatitude, targetLongitude, 'map', latitude, longitude, Number( eventDetail.distance ) );
						// 지도에 표시할 원을 생성합니다
					}
				} );
			}, 500 );

		} );
		$( '#btn-info' ).click( function () {
			$( '#modal-info' ).modal( 'open' );
		} );
		$( '#btn-attend-info' ).click( function () {
			$( '#modal-attend-info' ).modal( 'open' );
		} );

		$( '#btn-close-map' ).click( function () {
			$( '#modal1' ).modal( 'close' );
		} );
		
		$( '#btn-hidden-attend' ).click( function () {
			var pwd = $('#input_hidden').val();
			$('#input_hidden').val("");
			var attendResult = INSIGHT.REST.attendPWService( token, eventID, eventDetail.classes[ 0 ].id, pwd )
			showAttendResult(attendResult);
			$('#hidden_atd_modal').modal('close')

		} );
		
	}
}


var checkTodayAttend = function ( attendList ) {
	attendList = INSIGHT.REST.getAttendList( token, eventDetail.id, eventDetail.classes[ 0 ].id );
	var isChecked = false;
	console.log( 'attendList' );
	// need parsing date to Insight Date Type
	if ( attendList.customStatus == "success" ) {
		// console.log(date);
		// console.log(attendList[0].inDate);
		var dateList = attendList.map( function ( attendItem ) {
			var tempDate = attendItem.date.split( '-' );
			var parsedDate = tempDate[ 1 ] + '/' + tempDate[ 2 ] + '/' + tempDate[ 0 ];
			return parsedDate;
		} );
		if ( dateList ) {
			function isToday( element ) {
				var date = LEMP.EDUApp.getTodayDate();
				return element == date;
			}
			var index = dateList.findIndex( isToday );

			if ( index >= 0 ) {
				var inState = attendList[ index ].inState;
				var outState = attendList[ index ].outState;

				if ( inState == 0 ) {
					//출석해야함
					renderAttendButton( buttonText[ styles.ATTEND ], attendColor[ styles.TOCOMPLETION ], attendColor[ styles.COMPLETION_B ], attendColor[ styles.ATTEND ] );
				} else if ( inState == 1 || inState == 2 ) {
					if ( outState <= 0 ) {
						// 수료해야함
						renderAttendButton( buttonText[ 1 ], attendColor[ styles.ATTEND ], attendColor[ styles.COMPLETION_B ], attendColor[ styles.TOCOMPLETION ] );
					} else {
						// 완료됨
						renderAttendButton( buttonText[ 4 ], attendColor[ styles.ATTEND ], attendColor[ styles.TOCOMPLETION ], attendColor[ styles.COMPLETION_B ], styles.REMOVE_PULSE );
						//새로운값 ㄲ 
						$( '#btn-attend' ).attr('complete',1);
					}
				}
			} else {
				// 출석 해야함
				renderAttendButton( buttonText[ styles.ATTEND ], attendColor[ styles.TOCOMPLETION ], attendColor[ styles.COMPLETION_B ], attendColor[ styles.ATTEND ] );
			}
		}
	} else {
		// 출석해야
		renderAttendButton( buttonText[ styles.ATTEND ], attendColor[ styles.TOCOMPLETION ], attendColor[ styles.COMPLETION_B ], attendColor[ styles.ATTEND ] );
	}

	function renderAttendButton( buttonText, removeColor1, removeColor2, setColor, removePulse ) {
		$( '#btn-attend' ).text( buttonText );
		$( '#btn-attend' ).removeClass( removeColor1 );
		$( '#btn-attend' ).removeClass( removeColor2 );
		if ( removePulse ) {
			$( '#btn-attend' ).removeClass( 'pulse' );
		}
		$( '#btn-attend' ).addClass( setColor );
	}

	renderAttendHistory( attendList );

}

var renderAttendHistory = function ( attendList ) {
	console.log( 'start render attend history' )
	//get attendHistory
	// need API
	var today = new Date();


	//	var attendHistoryList = attendListDummy;
	if ( attendList.customStatus == "success" ) {
		var attendHistoryList = attendList.map( function ( attendItem ) {
			var tempDate2 = attendItem.date.split( '-' );
			var parsedDate = new Date( tempDate2[ 0 ], tempDate2[ 1 ] - 1, tempDate2[ 2 ] );
			var parsedAttednInfo = {
				date: parsedDate,
				outDate: attendItem.outDate,
				outState: attendItem.outState,
				inState: attendItem.inState,
				inDate: attendItem.inDate,
			}
			return parsedAttednInfo;
		} );

		var resultText;
		var resultColor;

		$( '.list-attend-history' ).children( 'li' ).remove( '.collection-item' );

		jQuery.each( attendHistoryList, function ( index, historyVal ) {

			var resultState = historyVal.inState;
			if ( historyVal.date <= today ) {
				switch ( historyVal.inState ) {
					case 0:
						resultText = buttonText[ styles.ABSENCE ];
						resultColor = attendColor[ styles.ABSENCE ];
						break;
					case 1:
						resultText = buttonText[ styles.COMPLETION ];
						resultColor = attendColor[ styles.COMPLETION ];
						break;
					case 2:
						resultText = buttonText[ styles.COMPLETION ];
						resultColor = attendColor[ styles.COMPLETION ];
						break;
				}
				if ( !historyVal.outDate && historyVal.inState != 0 ) {
					resultText = buttonText[ styles.DROP ];
					resultColor = attendColor[ styles.DROP ];
				}
			} else {
				resultText = "-";
				resultColor = ""
			}


			$( '.list-attend-history' ).append( $( '<li/>', {
				class: 'collection-item',
				id: 'collection-item-' + index
			} ) );
			$( '#collection-item-' + index ).append( $( '<div/>', {
				class: 'row valign-wrapper',
				id: 'valign-wrapper-' + index
			} ) );

			function pad( n, width ) {
				n = n + '';
				return n.length >= width ? n : new Array( width - n.length + 1 ).join( '0' ) + n;
			}
			var attendDate = historyVal.date;
			var year = attendDate.getFullYear();
			var month = attendDate.getMonth() + 1;
			var day = attendDate.getDate();
			attendDate = year + "." + pad( month, 2 ) + "." + pad( day, 2 );
			// attendDate = attendDate.split(' ')[0];
			// attendDate= attendDate.replace(/-/gi,'.');

			$( '#valign-wrapper-' + index ).append( '<div class=\"col s6 m6 l6 center-align\"><div class=\"flight-state\"><div class=\"title\">' + attendDate + '</div></div></div>' );
			$( '#valign-wrapper-' + index ).append( '<div class=\"col s6 m6 l6 center-align\"><div class=\"flight-state\"><div class=\"title ' + resultColor + '\">' + resultText + '</div></div></div>' );
		} );



		$( '.valign-wrapper' ).css( {
			'margin-bottom': '0px'
		} );

	} else {
		//리스트 없음 표시
		$( '.list-attend-history' ).append( $( '<li/>', {
			class: 'collection-item grey-text center-align',
			text: '- 출석 히스토리 없음 -'
		} ) );
	}

}



/**
 * 출석체크를 시도하는 함수로써,
 * 출석 체크 결과를 출석, 지각, 결석 등에 따라 적절한 알림 메시지로 보여줍니다.
 */
var tryAttendance = function () {

	/* 서버에서 받아온 거리관련 데이터 초기화 */
	var targetLatitude = parseFloat( locationXY[ 0 ] );
	var targetLongitude = parseFloat( locationXY[ 1 ] );

	var targetDistance = Number( eventDetail.distance );
	/*  */
	LEMP.EDUApp.showProgressBar( false );
	LEMP.System.getGPS( {

		"_fCallback": function ( res ) {

			var latitude = res.latitude;
			var longitude = res.longitude;
			var domName = "atd_map";


			LEMP.EDUApp.GPSCheck( {
				"_nlatitude": latitude,
				"_nlongitude": longitude,
				"_ntargetlat": targetLatitude,
				"_ntargetlong": targetLongitude,
				"_ndistance": targetDistance,

				"_fCallback": function ( res2 ) {

					if ( res2.result ) {
						LEMP.Window.openCodeReader( {
							"_fCallback": function ( resOpenCodeReader ) {
								//LEMP.EDUApp.showProgressBar(false);
								if ( resOpenCodeReader.result ) {
									//QRCODE URL
									var QRPW = resOpenCodeReader.result_value;

									/* QRCODE 서버 전송 및 response */
									var attendResult = INSIGHT.REST.attendQRService( token, eventID, classNum, QRPW );
									showAttendResult(attendResult);
								}
							}
						} );
					} else {
						swal( 'Sorry!', "장소에 도착하여 출석 체크를 시도해 주세요. 진행 장소에서도 출석이 되지 않는다면, 진행자에게 문의 바랍니다." );
					}
				}
			} );
		}
	} );
}

function showAttendResult(attendResult){
	if ( attendResult.customStatus === "success" ) {
		//																if (attendResult.message === "success") {
		switch ( attendResult.code ) {
			case -2:
				swal( "Sorry!", "출석체크 시간이 아닙니다.", "warning" );
				break;
			case -1:
				swal( "Sorry!", "수료체크 시간이 아닙니다.", "warning" );
				break;
			case 0:
				swal( "늦으셨네요!", "출석체크 시간을 초과했습니다.", "error" );
				break;
			case 1:
				swal( "Good job!", "조금 늦으셨네요.", "success" );
				break;
			case 2:
				swal( "Good job!", "출석체크가 완료되었습니다.", "success" );
				break;
			case 3:
				swal( "Good job!", "수료하기가 완료되었습니다.", "success" );
				break;
			case 300:
				swal( "잘못된 행사입니다.", "관리자에게 문의해 주세요.", "success" );
				break;
			case 301:
				swal( "등록되지 않은 유저 입니다.", "관리자에게 문의해 주세요.", "success" );
				break;
			case 302:
				swal( "잘못된 QR코드 입니다.", "QR코드를 확인해 주세요.", "success" );
				break;
			case 303:
				swal( "행사기간이 아닙니다.", "행사 기간내에 출석해 주세요.", "warning" );
				break;
			case 304:
				swal( "Good job!", "이미 출석체크 되었습니다.", "success" );
				break;
			case 305:
				swal( "잘못된 패스워드 입니다.", "패스워드를 확인해 주세요.", "warning" );
				break;
			default:
				swal( "ERROR", "오류로 인해 처리되지 않았습니다.", "error" );
				break;

		}
		checkTodayAttend();
		//
	} else {
		//																LEMP.EDUApp.errorService(attendResult,"출석 체크하기");
		swal( "ERROR", "오류로 인해 처리되지 않았습니다.", "error" );
	}
}