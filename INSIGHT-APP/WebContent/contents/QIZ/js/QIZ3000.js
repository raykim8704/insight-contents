LEMP.addEvent( "backbutton", "page.callbackBackButton" ); //안드로이드 back 버튼 입력 이벤트
var beforeElement, questions, selectedQuiz, eventid, classNum

var remocon = {
	answerState: false,
	staticState: false,
	videoState: false,
	screenState: false,
	rankState: false,
	showingState: false // true : 학생 리모컨 활성화 상태, false : 비활성화 상태
}

var detailRemocon

var page = {
	/**
	 * 안드로이드에서 back 버튼을 눌렀을 경우, 행사 정보로 돌아갑니다.
	 */
	callbackBackButton: function () {
		INSIGHT.MC.remoteController.stopQuiz( selectedQuiz.id, selectedQuiz.type )
		INSIGHT.MC.remoteController.offEvent( eventid, classNum )
		
		LEMP.Window.replace( {
			"_sPagePath": "DTI/html/DTI1000.html",
			"_oMessage": {
				"evnum": eventid
			}
		} )
	},
	init: function ( quizInfo ) {
		page.initLayout( quizInfo.data )
		page.initInterface()
	},
	initLayout: function ( quizInfoDetail ) {
		var token = quizInfoDetail.token
		var quizid = quizInfoDetail.quizid
		eventid = quizInfoDetail.eventid
		classNum = quizInfoDetail.classnum

		$( "#header" ).load( "../../common/public/html/header.html" )
		$( "#sideNav" ).load( "../../common/public/html/sideNav.html", function(){
			$( '#menu-eventdetail, #menu-attend,#menu-quiz,#menu-survey-li,#menu-board,#menu-qna,#menu-reference,#menu-eventlist,#button_logout' ).click( function ( ) {
				INSIGHT.MC.remoteController.stopQuiz( selectedQuiz.id, selectedQuiz.type )
				INSIGHT.MC.remoteController.offEvent( eventid, classNum )
			})	
		} )
		detailRemocon = $( '#card-content-current-quiz' ).clone()
		$( '#detail-remocon' ).empty()

		INSIGHT.MC.remoteController.setEvent( eventid, quizid, classNum )

		var quizDetails = INSIGHT.REST.getQuizDetails( token, eventid, quizid )

		if ( quizDetails.code == 200 ) {
			questions = quizDetails.data.questions
			if ( questions.length > 0 )
				render( questions, renderNumberButtons )

			$( '.quiznum' ).on( 'click touchstart', function ( e ) {

				selectedQuiz = {
					id: questions[ $( this )[ 0 ].id.split( "-" )[ 1 ] ].id,
					type: questions[ $( this )[ 0 ].id.split( "-" )[ 1 ] ].type,
					number: questions[ $( this )[ 0 ].id.split( "-" )[ 1 ] ].number,
					title: questions[ $( this )[ 0 ].id.split( "-" )[ 1 ] ].title,
					video : questions[ $( this )[ 0 ].id.split( "-" )[ 1 ] ].video==null ? 0 : 1
				}
				changeStartStopButton( false )
				INSIGHT.MC.remoteController.stopQuiz( selectedQuiz.id, selectedQuiz.type )
				$( '#detail-remocon' ).empty()
				$( '#detail-remocon' ).append( $( '<div/>', {
					style: 'margin:7px; text-align:justify',
					id: 'q-text'
				} ) )
				$( '#q-text' ).text( "Q " + selectedQuiz.number + ". " + selectedQuiz.title )
				setNumberButtonColor( $( this ) )
				var isVideo = $( this ).attr( 'video' )

				$( '#panel-current-num' ).text( '선택된 문제 : ' + $( this ).text() )
				$( '#panel-current-num' ).removeClass( 'grey darken-1' )
				$( '#panel-current-num' ).addClass( 'pink lighten-2 white-text' )
				$( '#btn_start_stop' ).addClass( 'animated flash' )
				setTimeout( function () {
					$( '#btn_start_stop' ).removeClass( 'animated flash' )
				}, 1000 )
			} )
		}

		$( '#btn_start_stop' ).click( function () {
			if ( selectedQuiz == null ) {
				Materialize.toast( '문제 번호를 선택해 주세요.', 3000 )
			} else {
				if ( !remocon.showingState ) {
					INSIGHT.MC.remoteController.showQuiz( selectedQuiz.id, selectedQuiz.type )
					changeStartStopButton( true )
					changeRankButton( false )
					$( '#detail-remocon' ).empty()
					$( '#detail-remocon' ).append( detailRemocon )
					if(selectedQuiz.video==1){
						$('#text_video').show()
						$('#text_screen').show()
						$('#btn-video-player').show()
						$('#btn-full-screen').show()
						$('.row .col.s3').css('width', '25%');
					}else if(selectedQuiz.video==0){
						$('#text_video').hide()
						$('#text_screen').hide()
						$('#btn-video-player').hide()
						$('#btn-full-screen').hide()
						$('.row .col.s3').css('width', '50%');
					}

					if ( remocon.answerState || remocon.staticState ) {

					} else {
						$( '#detail-remocon' ).addClass( 'animated flipInY' )
						setTimeout( function () {
							$( '#detail-remocon' ).removeClass( 'animated flipInY' )
						}, 1000 )
					}
					removeDetailRemoconClass()
					page.initInterface()
				} else {
					changeStartStopButton( false )
					changeVideoButton( false )
					changeScreenButton( false )
					removeDetailRemoconClass()
					INSIGHT.MC.remoteController.stopQuiz( selectedQuiz.id, selectedQuiz.type )
					$( '#detail-remocon' ).empty()
					$( '#detail-remocon' ).append( $( '<div/>', {
						style: 'margin:7px; text-align:justify',
						id: 'q-text'
					} ) )
					$( '#q-text' ).text( "Q " + selectedQuiz.number + ". " + selectedQuiz.title )
					$( '#detail-remocon' ).addClass( 'animated flipInY' )
					setTimeout( function () {
						$( '#detail-remocon' ).removeClass( 'animated flipInY' )
					}, 1000 )

				}
			}
		} )

		$( '.carousel.carousel-slider' ).carousel( {
			fullWidth: true
		} )
		$( '.carousel-slider' ).css( {
			'height': '250px',
			'width': '100%'
		} )
		$( '.carousel-item' ).css( {
			'padding': '10px'
		} )
	},
	initInterface: function () {

		
		$( '#btn-cancle' ).click( function () {
			INSIGHT.MC.remoteController.stopQuiz( selectedQuiz.id, selectedQuiz.type )
			INSIGHT.MC.remoteController.offEvent( eventid, classNum );

			LEMP.Window.replace( {
				"_sPagePath": "QIZ/html/QIZ2000.html",
				"_oMessage": {
					"evnum": eventid,
					"classNum": classNum
				}
			} )
		} )

		$( '#btn-correct-answer' ).click( function () {
			changeAnswerButton( true )
			changeStaticsButton( false )
			changeVideoButton( false )
			changeScreenButton( false )
			changeStartStopButton( false )
			changeRankButton( false )
			INSIGHT.MC.remoteController.showAnswer( selectedQuiz.id, selectedQuiz.type )
		} )

		$( '#btn-show-statics' ).click( function () {
			changeAnswerButton( false )
			changeStaticsButton( true )
			changeVideoButton( false )
			changeScreenButton( false )
			changeStartStopButton( false )
			changeRankButton( false )
			INSIGHT.MC.remoteController.showCurrentStatic( selectedQuiz.id, selectedQuiz.type )
		} )

		$( '#btn-video-player' ).click( function () {
			changeAnswerButton( false )
			changeStaticsButton( false )
			changeRankButton( false )

			remocon.videoState = !remocon.videoState

			if ( remocon.videoState ) {
				changeVideoButton( true )
				INSIGHT.MC.remoteController.playVideo( selectedQuiz.id, selectedQuiz.type )
				changeStartStopButton( true )

				$( '#btn-video-player' ).addClass( 'animated flash' )
				setTimeout( function () {
					$( '#btn-video-player' ).removeClass( 'animated flash' )
				}, 1000 )
			} else {
				changeVideoButton( false )
				INSIGHT.MC.remoteController.pauseVideo( selectedQuiz.id, selectedQuiz.type )
			}
		} )

		$( '#btn-full-screen' ).click( function () {
			changeAnswerButton( false )
			changeStaticsButton( false )
			changeRankButton( false )

			remocon.screenState = !remocon.screenState

			if ( remocon.screenState ) {
				changeStartStopButton( true )
				changeScreenButton( true )
				$( '#btn-full-screen' ).addClass( 'animated flash' )
				setTimeout( function () {
					$( '#btn-full-screen' ).removeClass( 'animated flash' )
				}, 1000 )
				INSIGHT.MC.remoteController.onScreenMode( selectedQuiz.id, selectedQuiz.type )
			} else {
				changeScreenButton( false )
				INSIGHT.MC.remoteController.offScreenMode( selectedQuiz.id, selectedQuiz.type )
			}
		} )

		$( '#btn-remote-info' ).click( function () {
			if ( selectedQuiz != null ) {
				changeAnswerButton( false )
				changeStaticsButton( false )
				changeVideoButton( false )
				changeScreenButton( false )
				changeStartStopButton( false )
				changeRankButton( true )
				INSIGHT.MC.remoteController.showAllStatistics( selectedQuiz.id, selectedQuiz.type )

				$( '#detail-remocon' ).empty()
				$( '#detail-remocon' ).append( $( '<div/>', {
					style: 'margin:7px; text-align:justify',
					id: 'q-text'
				} ) )
				$( '#q-text' ).text( "Q " + selectedQuiz.number + ". " + selectedQuiz.title )
			}
		} )
	}
}

function render( list, _fDoms ) {
	list.map( function ( value, index ) {
		_fDoms( value, index )
	} )
	$( '#q-num .row .col' ).css( {
		padding: 0
	} )
}

function changeRankButton( isActivated ) {
	isActivated ?
		( remocon.rankState = true, $( '#btn-remote-info' ).addClass( 'lime accent-2 animated rubberBand' ) ) :
		( remocon.rankState = false, $( '#btn-remote-info' ).removeClass( 'lime accent-2 animated rubberBand' ) )
}

function changeStartStopButton( isActivated ) {
	isActivated ?
		( remocon.showingState = true, $( '#btn_start_stop' ).addClass( 'orange accent-4 pulse' ), $( '#btn_start_stop' ).text( "퀴즈 진행 중" ) ) :
		( remocon.showingState = false, $( '#btn_start_stop' ).removeClass( 'orange accent-4 pulse' ), $( '#btn_start_stop' ).text( "퀴즈 시작" ) )
}

function changeAnswerButton( isActivated ) {
	isActivated ?
		( remocon.answerState = true, $( '#btn-correct-answer' ).removeClass( 'grey darken-1' ), $( '#btn-correct-answer' ).addClass( 'pink' ) ) :
		( remocon.answerState = false, $( '#btn-correct-answer' ).removeClass( 'pink' ), $( '#btn-correct-answer' ).addClass( 'grey darken-1' ) )
}

function changeStaticsButton( isActivated ) {
	isActivated ?
		( remocon.staticState = true, $( '#btn-show-statics' ).removeClass( 'grey darken-1' ), $( '#btn-show-statics' ).addClass( 'pink' ) ) :
		( remocon.staticState = false, $( '#btn-show-statics' ).removeClass( 'pink' ), $( '#btn-show-statics' ).addClass( 'grey darken-1' ) )
}

function changeVideoButton( isActivated ) {
	isActivated ?
		( remocon.videoState = true, $( '#btn-video-player' ).removeClass( 'grey darken-1' ), $( '#btn-video-player' ).addClass( 'pink' ) ) :
		( remocon.videoState = false, $( '#btn-video-player' ).removeClass( 'pink' ), $( '#btn-video-player' ).addClass( 'grey darken-1' ) )
}

function changeScreenButton( isActivated ) {
	isActivated ?
		( remocon.screenState = true, $( '#btn-full-screen' ).removeClass( 'grey darken-1' ), $( '#btn-full-screen' ).addClass( 'pink' ) ) :
		( remocon.screenState = false, $( '#btn-full-screen' ).removeClass( 'pink' ), $( '#btn-full-screen' ).addClass( 'grey darken-1' ) )
}

function removeDetailRemoconClass() {
	changeAnswerButton( false )
	changeStaticsButton( false )
	changeVideoButton( false )
	changeScreenButton( false )
	$( '#btn-show-statics, #btn-correct-answer, #btn-video-player, #btn-full-screen' )
		.removeClass( 'pink animated flash' )
	$( '#btn-show-statics, #btn-correct-answer, #btn-video-player, #btn-full-screen' )
		.addClass( 'grey darken-1' )
}



function renderNumberButtons( value, index ) {
	console.log( 'render in' )
	var _column = 6
	var _page = 18
	var rowNum = parseInt( index / _column )
	var pageNum = parseInt( index / _page )
	console.log( rowNum )

	//	<div class="carousel-item red white-text" href="#one!">

	if ( index % _page == 0 ) {
		$( '.carousel-slider' ).append( $( '<div/>', {
			class: 'carousel-item  teal lighten-5 white-text',
			id: 'carousel-item' + pageNum
		} ) )
	}

	if ( index % _column == 0 ) {
		$( '#carousel-item' + pageNum ).append( $( '<div/>', {
			class: 'row',
			id: 'row-' + rowNum
		} ) )
	}
	$( '#row-' + rowNum ).append( $( '<div/>', {
		class: 'col s2 ',
		id: 'col-' + index
	} ) )
	$( '#col-' + index ).append( $( '<div/>', {
		class: 'quiznum btn-floating waves-effect waves-light grey lighten-4 grey-text center-align ',
		id: 'button-' + index,
		text: index + 1
	} ) )
	if ( value.image != null ) {
		$( '#button-' + index ).css( {
			border: '4px double #ffc107'
		} )
	}
	if ( value.video != null ) {
		$( '#button-' + index ).css( {
			border: '4px double #ff5722'
		} )
		$( '#button-' + index ).attr( {
			'video': 1
		} )
	} else {
		$( '#button-' + index ).attr( {
			'video': 0
		} )
	}
}

function setNumberButtonColor( element ) {

	var selectedColor = 'light-blue lighten-1 white-text'
	var normalColor = 'grey lighten-4 grey-text'
	console.log( element[ 0 ].id )
	//console.log(beforeElement)

	if ( beforeElement != null ) {
		$( '#' + beforeElement ).removeClass( selectedColor )
		$( '#' + beforeElement ).addClass( normalColor )
	}
	element.removeClass( normalColor )
	element.addClass( selectedColor )

	beforeElement = element[ 0 ].id
}