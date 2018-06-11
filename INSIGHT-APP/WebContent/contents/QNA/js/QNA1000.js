LEMP.addEvent( "backbutton", "page.callbackBackButton" ); //안드로이드 back 버튼 입력 이벤트
var eventID;
var token;
var authority;
var commentList = new Array();
var classNum;
var userID;
var pageCount = 1;
var totalCount;
var maxPage;
var _arrQuestions = new Array();


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
		classNum = eventInfo.data.classNum;
		console.log( eventID );
		token = LEMP.Properties.get( {
			"_sKey": "token"
		} );
		authority = LEMP.Properties.get( {
			"_sKey": "authority"
		} );
		//   eventDetail = INSIGHT.REST.getEventDetail(token, eventID);
		page.initLayout( eventID );
		page.initInterface();

		$( window ).scroll( function () {
			if ( $( window ).scrollTop() + $( window ).height() == $( document ).height() ) {
				pageCount++;
				renderQuestionList( eventID );
			}
		} );
	},
	initLayout: function ( eventID ) {
		$( "#header" ).load( "../../common/public/html/header.html" );
		$( "#sideNav" ).load( "../../common/public/html/sideNav.html" );

		renderQuestionList( eventID );




	},
	initInterface: function () {
		userID = LEMP.Properties.get( {
			"_sKey": "userID"
		} );

		$( '#btn-write-qna' ).click( function () {
			LEMP.Window.open( {
				"_sPagePath": "QNA/html/QNA2000.html",
				"_oMessage": {
					"userID": userID,
					"eventID": eventID,
					"classNum": classNum,
					"token": token,
					"mode": 0
				}
			} );
		} );



	}
}

function reRender( args ) {
	var eId = args.eventID;
	var needRefresh = args.refresh;
	renderQuestionList( eId, needRefresh );
}

var renderQuestionList = function ( eventID, refresh = false ) {

	if ( refresh ) {
		console.log( 'refresh!' )
		$( '#card-section' ).empty();
		pageCount = 1;
		_arrQuestions = [];
	}


	if ( maxPage == null || pageCount <= maxPage ) {
		var questionList = INSIGHT.REST.getQuestionList( token, eventID, classNum, pageCount );
		console.log( _arrQuestions.length );
		_arrQuestions = ( _arrQuestions.length > 0 ) ? _arrQuestions.concat( questionList.data.array ) : questionList.data.array;
		console.log( _arrQuestions );
		var totalCount = questionList.data.totalCount;
		maxPage = Math.ceil( totalCount / 10 );

		console.log( questionList );

		if ( questionList.code == 200 && questionList.data.totalCount > 0 ) {

			jQuery.each( questionList.data.array, function ( index, value ) {
				index = index + ( 10 * ( pageCount - 1 ) );

				console.log( 'in' );
				$( '#card-section' ).append( $( '<div/>', {
					class: 'card',
					id: 'card' + index,
				} ) );
				$( '#card' + index ).append( $( '<div/>', {
					class: 'card-content row valign-wrapper card-header',
					id: 'card-content-header-' + index
				} ) );
				$( '#card-content-header-' + index ).append( $( '<div/>', {
					class: 'col s1 valign-wrapper',
					id: 'header-icon-' + index
				} ) );

				$( '#header-icon-' + index ).append( $( '<i class="material-icons">person_pin</i>' ) );

				$( '#card-content-header-' + index ).append( $( '<div/>', {
					class: 'icon-preview col s9 ',
					id: 'icon-preview-name' + index,
					text: value.userName
				} ) );
				$( '#card-content-header-' + index ).append( $( '<div/>', {
					class: 'icon-preview col s2 valign-wrapper',
					id: 'icon-option-' + index
				} ) );

				if ( value.isMine ) {
					$( '#icon-option-' + index ).append( $( '<a/>', {
						class: 'dropdown-botton valign-wrapper',
						id: 'dropdown-button-' + index,
						herf: '#',
						'data-activates': 'dropdown' + index,
					} ) );
					$( '#dropdown-button-' + index ).append( '<i class="material-icons">more_horiz</i>' );

					//$('#icon-option-'+index).append('<ul id=\'dropdown'+index+'\' class=\'dropdown-content\'><li><a href=\"#!\">수정</a></li><li><a href=\"#!\">삭제</a></li>');

					$( '#icon-option-' + index ).append( $( '<ul/>', {
						class: 'dropdown-content',
						id: 'dropdown' + index
					} ) );
					$( '#dropdown' + index ).append( $( '<li/>', {
						class: 'dropdown-mod',
						id: 'dropdown-mod-' + index,
						qnum: value.id,
						html: '<a href=\"#!\">수정</a>',
						cnum: index

					} ) );
					$( '#dropdown' + index ).append( $( '<li/>', {
						class: 'dropdown-del',
						id: 'dropdown-del-' + index,
						qnum: value.id,
						html: '<a href=\"#!\">삭제</a>'

					} ) );

				}



				$( '#card' + index ).append( '<div class\'col s12\'><div class=\"divider\"></div></div>' );
				$( '#card' + index ).append( $( '<div/>', {
					class: 'card-content valign-wrapper',
					id: 'card-content-buttons-' + index
				} ) );

				var favorite_background;
				var favorite_icon_type;
				if ( value.pressedLike ) {
					//$('#card-content-buttons-'+index).append('<i class="material-icons red accent-3">favorite_border</i>');
					favorite_background = 'material-icons red-text text-accent-3 btn-favorite';
					favorite_icon_type = 'favorite';
				} else {
					//$('#card-content-buttons-'+index).append('<i class="material-icons">favorite_border</i>');
					favorite_background = 'material-icons btn-favorite';
					favorite_icon_type = 'favorite_border';
				}
				$( '#card-content-buttons-' + index ).append( $( '<i/>', {
					class: favorite_background,
					id: 'btn-favorite-' + index,
					qnum: value.id,
					text: favorite_icon_type,
					cnum: index
				} ) );


				//('<i class="material-icons">favorite_border</i>');
				//	$('#card-content-buttons-'+index).append('<i class="material-icons">chat_bubble_outline</i>');
				//btn-reply
				$( '#card-content-buttons-' + index ).append( $( '<i/>', {
					class: 'material-icons btn-reply',
					text: 'chat_bubble_outline',
					qnum: value.id,
					cnum: index
				} ) );

				var likeNum = value.likeCount;

				$( '#card' + index ).append( $( '<div/>', {
					class: 'card-content valign-wrapper like-count',
					id: 'card-content-likes-' + index,
					text: '좋아요 ' + likeNum + '개'
				} ) );

				$( '#card' + index ).append( $( '<div/>', {
					class: 'card-content',
					id: 'card-contents-' + index
				} ) );

				var regDt = value.regDT;
				regDt = ( value.isModified ) ? regDt.split( ' ' )[ 0 ] + ' 에 수정됨' : regDt.split( ' ' )[ 0 ];



				$( '#card-contents-' + index ).append( '<p>' + value.content + '</p>' );
				$( '#card' + index ).append( $( '<div/>', {
					class: 'card-content qna-date',
					id: 'card-date-' + index,
					text: regDt
				} ) );
				$( '#card' + index ).append( '<div class=\"divider\"></div>' );

				$( '#card' + index ).append( $( '<div/>', {
					class: 'card-content btn-reply',
					id: 'reply-count' + index,
					text: '댓글 ' + value.commentCount + ' 개',
					cnum: index,
					qnum: value.id
				} ) );
			} );

			$( '.material-icons' ).css( {
				'margin-right': '8px'
			} );
			$( '.card-header' ).css( {
				'margin-bottom': '0px'
			} );
			$( '.card-content' ).css( {
				padding: '10px'
			} );
			$( '.like-count' ).css( {
				'padding-top': '0px'
			} );
			$( '.like-count' ).css( {
				'font-size': '11px',
				'color': '#bdbdbd'
			} );
			$( '.qna-date' ).css( {
				'font-size': '11px',
				'color': '#bdbdbd'
			} );
			setClickEvents();
		}
	} else {

	}

}

function setClickEvents() {

	$( '.dropdown-botton' ).dropdown( {
		inDuration: 300,
		outDuration: 225,
		constrainWidth: false, // Does not change width of dropdown to that of the activator
		hover: true, // Activate on hover
		gutter: 0, // Spacing from edge
		belowOrigin: false, // Displays dropdown below the button
		alignment: 'left', // Displays dropdown with edge aligned to the left of button
		stopPropagation: false // Stops event propagation
	} );

	$( '.dropdown-button' ).click( function () {
		$( '#dropdown-button-' + index ).dropdown( 'open' );
	} );

	$( '.btn-favorite' ).click( function () {
		var qnum = $( this ).attr( 'qnum' );
		var pressLikeResult = INSIGHT.REST.pressLikeButton( eventID, classNum, qnum, token );
		if ( pressLikeResult.code == 200 ) {
			switch ( pressLikeResult.data.pressedLike ) {
				case 0:
					$( this ).removeClass( 'animated bounceIn' );

					$( this ).text( 'favorite_border' );
					$( this ).removeClass( 'red-text text-accent-3' );

					break;
				case 1:
					$( this ).removeClass( 'animated bounceIn' );
					$( this ).addClass( 'animated bounceIn' );
					$( this ).text( 'favorite' );
					$( this ).addClass( 'red-text text-accent-3' );
					break;
			}

			var likeCount = pressLikeResult.data.likeCount;
			console.log( likeCount );
			var index = $( this ).attr( 'cnum' );
			console.log( index );
			var targetId = 'card-content-likes-' + index;
			$( '#' + targetId ).text( '좋아요 ' + likeCount + '개' );
		}
	} );
	//Q&A 댓글 가져오기 (GET - /event/{이벤트번호}/class/{클래스번호}/qna/{qna번호}/comment
	$( '.btn-reply' ).click( function () {
		var questionIndex = $( this ).attr( 'cnum' );
		questionInfo = _arrQuestions[ questionIndex ];

		LEMP.Window.open( {
			"_sPagePath": "QNA/html/QNA3000.html",
			"_oMessage": {
				"questionInfo": questionInfo,
				"eventID": eventID,
				"token": token,
				"classNum": classNum

			}
		} );
	} );
	$( '.dropdown-mod' ).click( function () {
		var questionIndex = $( this ).attr( 'cnum' );
		questionInfo = _arrQuestions[ questionIndex ];
		var qnum = $( this ).attr( 'qnum' );

		LEMP.Window.open( {
			"_sPagePath": "QNA/html/QNA2000.html",
			"_oMessage": {
				"userID": userID,
				"eventID": eventID,
				"token": token,
				"classNum": classNum,
				"questionInfo": questionInfo,
				"mode": 1,
				"qnum": qnum
			}
		} );

	} );
	$( '.dropdown-del' ).click( function () {
		var qnum = $( this ).attr( 'qnum' );
		swal( {
				title: "해당 글을 삭제하시겠습니까?",
				text: "삭제하시면 해당 글은 사라집니다.",
				type: "warning",
				showCancelButton: true,
				cancelButtonText: "취소",
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "삭제",
				closeOnConfirm: false
			},
			function () {
				var deleteQna = INSIGHT.REST.deleteQna( eventID, qnum, token );
				if ( deleteQna.code == 200 ) {
					swal( "삭제", "삭제되었습니다.", "success" );
					LEMP.Window.replace( {
						'_sPagePath': "QNA/html/QNA1000.html",
						'_oMessage': {
							'evnum': eventID,
							'classNum': classNum
						}
					} );
				}else{
					// 200 아닐 경우의 처리 필요
				}
			} );
	} );

}