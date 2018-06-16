LEMP.addEvent( "backbutton", "page.callbackBackButton" ); //안드로이드 back 버튼 입력 이벤트

var eventID,
	token,
	authority,
	classNum,
	userID,
	fbDB,
	insightQuizInfo,
	allListener,
	classListener;
var allIsOnGoing = false;
var commentList = new Array();

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
		eventID = eventInfo.data.evnum
		classNum = eventInfo.data.classNum

		token = LEMP.Properties.get( {
			"_sKey": "token"
		} )
		authority = LEMP.Properties.get( {
			"_sKey": "authority"
		} )

		console.log( "행사ID : " + eventID )
		console.log( '클래스Num : ' + classNum )
		console.log( eventInfo )
		console.log( token )

		INSIGHT.connectFRD()
		fbDB = INSIGHT.Audience.remoteController.getInitQuizInfo( eventID, classNum )

		page.initLayout();
		page.controlRemoteController();
	},

	initLayout: function () {
		$( '.modal' ).modal( {
			dismissible: false,
			startingTop: '90%', // Starting top style attribute
		} )
		$( "#header" ).load( "../../common/public/html/header.html" )
		$( "#sideNav" ).load( "../../common/public/html/sideNav.html" )
	},

	controlRemoteController: function () {
		initControl()

		fbDB.child( 'ALL' ).on( 'child_changed', function ( snapshot ) {

			( snapshot.key === 'isOnGoing' && snapshot.val() !== allIsOnGoing ) ? ( allIsOnGoing = !allIsOnGoing, hideBtn() ) : null

			allIsOnGoing ?
				fbDB.child( 'ALL' ).once( 'value' ).then( function ( snapshot ) {
					const qGroup = snapshot.val().lastQgroup;
					insightQuizInfo = INSIGHT.REST.getQuizDetailList( token, eventID, qGroup )
					fbDB.child( 'ALL' ).child( qGroup ).once( 'value' ).then( function ( data ) { // child = All 내의 마지막 퀴즈그룹(lastQgroup).
						data.val().quizINFO.viewState === 'RUN' ? revealBtn( data.val().quizINFO, insightQuizInfo ) : hideBtn()
					} )
				} ) :
				hideBtn()
		} )

		fbDB.child( classNum ).on( 'child_changed', function ( snapshot ) {
			if ( !allIsOnGoing ) {
				fbDB.child( classNum ).once( 'value' ).then( function ( snapshot ) {
					const qGroup = snapshot.val().lastQgroup
					insightQuizInfo = INSIGHT.REST.getQuizDetailList( token, eventID, qGroup )
					fbDB.child( classNum ).child( qGroup ).once( 'value' ).then( function ( data ) { // child = All 내의 마지막 퀴즈그룹(lastQgroup).
						data.val().quizINFO.viewState === 'RUN' ? revealBtn( data.val().quizINFO, insightQuizInfo ) : hideBtn()
					} )
				} )
			}
		} )
	}
}

//최초 진입시에만 영향을 미친다.
function initControl() {
	try {
		fbDB.child( 'ALL' ).once( 'value' ).then( function ( snapshot ) {
			allIsOnGoing = snapshot.val().isOnGoing === null ? false : snapshot.val().isOnGoing
			const qGroup = snapshot.val().lastQgroup
			
			insightQuizInfo = INSIGHT.REST.getQuizDetailList( token, eventID, qGroup ) //24?
			allIsOnGoing ?
				fbDB.child( 'ALL' ).child( qGroup ).once( 'value' ).then( function ( data ) {
					data.val().quizINFO.viewState === 'RUN' ? revealBtn( data.val().quizINFO, insightQuizInfo ) : hideBtn()
				} ) :
				fbDB.child( classNum ).once( 'value' ).then( function ( snapshot ) {
					fbDB.child( classNum ).child( qGroup ).once( 'value' ).then( function ( data ) {
						data.val().quizINFO.viewState === 'RUN' ? revealBtn( data.val().quizINFO, insightQuizInfo ) : hideBtn()
					} )
				} )
		} )    
	}
	catch(exception){
	   
	}finally{

		initControl = null;
	}
	
}

function revealBtn( fbDB, insightQuizInfo ) {
	const realInfo = insightQuizInfo.data.questions.filter( function ( el ) {
		return el.id == fbDB.quizNum
	} )[ 0 ]

	if ( realInfo == null ) {

	} else if ( realInfo.type === 2 ) {
		$( '#btn_o_background, #btn_x_background' ).removeClass( 'amber cyan lighten-5 grey lighten-2' )
		$( '#oxButton' ).modal( 'open' )
		$( '#oxContents' ).text( realInfo.title )
		addOXbuttonClickEvent( realInfo.quizzesId, realInfo.id )

	} else if ( realInfo.type === 4 ) {
		$( '#btn_1, #btn_2, #btn_3, #btn_4' ).removeClass( 'amber cyan lighten-5 grey lighten-2' )
		$( '#fourButton' ).modal( 'open' )
		$( '#fourContents' ).text( realInfo.title )
		$( '#btn_1' ).text( realInfo.example[ 0 ].content )
		$( '#btn_2' ).text( realInfo.example[ 1 ].content )
		$( '#btn_3' ).text( realInfo.example[ 2 ].content )
		$( '#btn_4' ).text( realInfo.example[ 3 ].content )
		addFourButtonClickEvent( realInfo.quizzesId, realInfo.id )

	} else if ( realInfo.type === 3 ) {
		$( '#btn_open_ended' ).text( "정답입력" )
		$( '#answer_open_ended' ).prop( 'readonly', false );
		$( '#answer_open_ended').val("")
		$( '#answer_open_ended').css({
			'color': 'inherit',
	    	'font-style': 'normal',
		});
		$( '#btn_open_ended' ).removeClass("grey white-text")
		$( '#openEndedButton' ).modal( 'open' )
		$( '#openEndedContents' ).text( realInfo.title )
		addOpenEndedClickEvent( realInfo.quizzesId, realInfo.id )
	}
}


function hideBtn() {
	$( '#oxButton' ).modal( 'close' )
	$( '#fourButton' ).modal( 'close' )
	$( '#openEndedButton' ).modal( 'close' )
}

function addOXbuttonClickEvent( qGroup, qNumber ) {
	$( '#btn_o, #btn_x' ).unbind("click").bind("click", function ( e ) {
		var submitResult = INSIGHT.REST.submitQuizAnswer( eventID, qGroup, qNumber, ( e.target.id === 'btn_o' ) ? [ 'O' ] : [ 'X' ] );
		if ( submitResult.code == 200 ) {
			$( '#btn_o, #btn_x' ).unbind();
            if ( e.target.id === 'btn_o' ) {
				$( '#btn_o_background' ).addClass( 'amber' )
				$( '#btn_x_background' ).addClass( 'cyan lighten-5' )
			} else {
				$( '#btn_o_background' ).addClass( 'cyan lighten-5' )
				$( '#btn_x_background' ).addClass( 'amber' )
			}
		} else if ( submitResult.code == 1000 ) {
			$( '#btn_o, #btn_x' ).unbind();
			$( '#btn_o_background' ).addClass( 'grey lighten-2' )
			$( '#btn_x_background' ).addClass( 'grey lighten-2' )
			Materialize.toast( '이미 정답을 제출한 문제입니다.', 3000 )
		}
	} )
}

function addFourButtonClickEvent( qGroup, qNumber ) {
	$( '#btn_1, #btn_2, #btn_3, #btn_4' ).unbind("click").bind("click", function ( e ) {
		var btnID = e.target.id
		var submitResult = INSIGHT.REST.submitQuizAnswer( eventID, qGroup, qNumber, [ e.target.id.split( '_' )[ 1 ] ] );
		if ( submitResult.code == 200 ) {
			$( '#btn_1, #btn_2, #btn_3, #btn_4' ).unbind()
			switch ( e.target.id ) {
				case "btn_1":
					$( '#btn_1' ).addClass( 'amber' )
					$( '#btn_2' ).addClass( 'cyan lighten-5' )
					$( '#btn_3' ).addClass( 'cyan lighten-5' )
					$( '#btn_4' ).addClass( 'cyan lighten-5' )
					break;
				case "btn_2":
					$( '#btn_2' ).addClass( 'amber' )
					$( '#btn_1' ).addClass( 'cyan lighten-5' )
					$( '#btn_3' ).addClass( 'cyan lighten-5' )
					$( '#btn_4' ).addClass( 'cyan lighten-5' )
					break;
				case "btn_3":
					$( '#btn_3' ).addClass( 'amber' )
					$( '#btn_1' ).addClass( 'cyan lighten-5' )
					$( '#btn_2' ).addClass( 'cyan lighten-5' )
					$( '#btn_4' ).addClass( 'cyan lighten-5' )
					break;
				case "btn_4":
					$( '#btn_4' ).addClass( 'amber' )
					$( '#btn_1' ).addClass( 'cyan lighten-5' )
					$( '#btn_2' ).addClass( 'cyan lighten-5' )
					$( '#btn_3' ).addClass( 'cyan lighten-5' )
					break;
			}
		} else if ( submitResult.code == 1000 ) {
			$( '#btn_1, #btn_2, #btn_3, #btn_4' ).unbind()
			$( '#btn_4' ).addClass( 'grey lighten-2' )
			$( '#btn_1' ).addClass( 'grey lighten-2' )
			$( '#btn_2' ).addClass( 'grey lighten-2' )
			$( '#btn_3' ).addClass( 'grey lighten-2' )
			Materialize.toast( '이미 정답을 제출한 문제입니다.', 3000 )
		}
	} )
}

function addOpenEndedClickEvent( qGroup, qNumber ) {
	$( '#btn_open_ended' ).unbind("click").bind("click", function ( e ) {
		var submitResult = INSIGHT.REST.submitQuizAnswer( eventID, qGroup, qNumber, [ $( '#answer_open_ended' ).val() ] );
		if ( submitResult.code == 200 ) {
			$( '#answer_open_ended' ).prop( 'readonly', true );
			$( '#answer_open_ended').css({
				'color': '#777',
		    	'font-style': 'italic',
			});
			$( '#btn_open_ended').addClass('grey lighten-1 white-text')
			$( '#btn_open_ended' ).text( "제출 완료!" )
			$( '#btn_open_ended' ).unbind()
		} else if ( submitResult.code == 1000 ) {
			
			$( '#answer_open_ended' ).prop( 'readonly', true );
			$( '#answer_open_ended').css({
				'color': '#777',
		    	'font-style': 'italic',
		    	'font-size': '20px'
			});
			$( '#btn_open_ended').addClass('grey lighten-1 white-text')
			$( '#btn_open_ended' ).text( "제출 완료!" )
			$( '#btn_open_ended' ).unbind()
			Materialize.toast( '이미 정답을 제출한 문제입니다.', 3000 )
		}
	} )
}

function changeButtonColor( clickedBtn, arr ) {

}