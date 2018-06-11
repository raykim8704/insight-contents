LEMP.addEvent( "backbutton", "page.callbackBackButton" ); //안드로이드 back 버튼 입력 이벤트
var textareaHeight = 0;
var focusIn = 1;
var eventID;
var token;
var classNum;

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
	init: function ( writingInfo ) {
		console.log( writingInfo.data );
		eventID = writingInfo.data.eventID;
		token = writingInfo.data.token;
		classNum = writingInfo.data.classNum;
		var question = writingInfo.data.questionInfo;
		page.initLayout( question );
		page.initInterface( question );
		//	       eventID = eventInfo.data.evnum;
		//			classNum = eventInfo.data.classNum;
		$( '#btn-cancle' ).click( function () {
			LEMP.Window.replace( {
				'_sPagePath': "QNA/html/QNA1000.html",
				'_oMessage': {
					'evnum': eventID,
					'classNum': classNum
				}
			} );
		} );
	},
	initLayout: function ( questionInfo ) {
		$( "#header" ).load( "../../common/public/html/header.html" );
		$( "#sideNav" ).load( "../../common/public/html/sideNav.html" );
		console.log( questionInfo )
		var user_name = questionInfo.userName;
		var question_date = questionInfo.regDT;
		question_date = question_date.split( ' ' )[ 0 ];
		var question_content = questionInfo.content;
		var isMine = questionInfo.isMine;
		var qnum = questionInfo.id;

		$( '.dropdown-del' ).attr( 'qnum', qnum );
		$( '.dropdown-mod' ).attr( 'qnum', qnum );

		$( '#user-name' ).text( user_name );
		$( '#question-date' ).text( question_date );
		$( '#question-content' ).text( question_content );

		if ( !isMine ) {
			$( '#icon-option' ).hide();
		}


		renderReplys( qnum );


	},
	initInterface: function ( questionInfo ) {
		var qnum = questionInfo.id;

		$( '#btn-write-comment' ).click( function () {
			var commentContent = $( '#textarea-reply' ).val();
			if ( commentContent ) {
				var comment = {
					'content': commentContent
				}
				var registComment = INSIGHT.REST.registComment( eventID, qnum, token, comment );
				if ( registComment.code == 200 ) {
					renderReplys( qnum );
					$( '#textarea-reply' ).val( '' );
				}
			}
		} );
		$( '#textarea-reply' ).click( function () {
			if ( textareaHeight ) {

				$( "body, html" ).animate( {
					scrollTop: $( document ).height()
				}, 400 );

				$( '.footer-fixed' ).css( {
					'position': 'relative'
				} );
				$( this ).css( {
					'height': textareaHeight + 'px'
				} );
				var val = $( this ).val();
				$( this ).focus().val( "" ).val( val );
			}

			focusIn = 1;
			//			$('.footer-fixed').css({
			//
			//			});
		} );
		$( '#textarea-reply' ).keydown( function () {
			//
			//			$('.footer-fixed').css({
			//				'position' : 'relative'
			//			});
		} );
		$( window ).on( 'touchstart', function ( e ) {
			var swipe = e.originalEvent.touches,
				start = swipe[ 0 ].pageY;

			$( this ).on( 'touchmove', function ( e ) {

				var contact = e.originalEvent.touches,
					end = contact[ 0 ].pageY,
					distance = end - start;

				if ( distance < -30 ) {
					if ( focusIn ) {
						textareaHeight = $( '#textarea-reply' ).height();
						console.log( textareaHeight );
						focusIn = 0;
					}
					$( '#textarea-reply' ).blur();
					$( '#textarea-reply' ).css( {
						height: '1rem'
					} );

					console.log( e );
					$( '.footer-fixed' ).css( {
						position: 'fixed'
					} );

				} // up
				if ( distance > 30 ) {
					if ( focusIn ) {
						textareaHeight = $( '#textarea-reply' ).height();
						console.log( textareaHeight );
						focusIn = 0;
					}
					$( '#textarea-reply' ).blur();
					$( '#textarea-reply' ).css( {
						height: '1rem'
					} );

					console.log( e );
					$( '.footer-fixed' ).css( {
						position: 'fixed'
					} );

				} // down
			} );
		} );
		$( '.dropdown-mod' ).click( function () {

			var qnum = $( this ).attr( 'qnum' );

			LEMP.Window.open( {
				"_sPagePath": "QNA/html/QNA2000.html",
				"_oMessage": {
					"userID": questionInfo.userID,
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
					}
				} );
		} );

	},
}

var renderReplys = function ( qnum ) {
	//(GET - /event/{이벤트번호}/class/{클래스번호}/qna/{qna번호}/comment
	var replyList = INSIGHT.REST.getQnaCommnets( token, eventID, qnum );

	if ( replyList.code == 200 ) {
		var commentList = replyList.data.array;
		$( '#reply-section' ).empty();

		jQuery.each( commentList, function ( index, value ) {
			$( '#reply-section' ).append( $( '<div/>', {
				class: 'card-content animated fadeIn',
				id: 'comment-' + index
			} ) );
			$( '#comment-' + index ).append( $( '<div/>', {
				class: 'row',
				id: 'row-' + index
			} ) );
			$( '#row-' + index ).append( $( '<div/>', {
				class: 'col s10 m10 l10',
				id: 'col-' + index
			} ) );
			$( '#col-' + index ).append( $( '<div/>', {
				class: 'title',
				text: value.userName +'(' + value.userAccount + ')'
			} ) );




			$( '#row-' + index ).append( $( '<div/>', {
				class: 'col s2 m2 l2',
				id: 'col1-' + index
			} ) );

			if ( value.isMine ) {
				$( '#col1-' + index ).append( $( '<i/>', {
					class: 'material-icons prefix grey-text text-lighten-3 delete-comment',
					id: 'btn-delete-' + index,
					text: 'delete',
					cnum: value.id
				} ) );
			}
			$( '#comment-' + index ).append( $( '<div/>', {
				class: 'row',
				id: 'row-contents-' + index
			} ) );
			$( '#row-contents-' + index ).append( $( '<div/>', {
				class: 'col s12 m12 l12 grey-text comment-box',
				id: 'col-content-' + index,
				text: value.content
			} ) );


			//			$('#col-content-'+index).append($('<div/>',{
			//				class : 'grey-text',
			//				text : value.content
			//				}));

		} );
	}

	$( '.row' ).css( {
		'margin-bottom': 0
	} );
	$( '.comment-box' ).css( {

		'word-break': 'break-all',
		'word-wrap': 'break-word'

	} )

	$( '.delete-comment' ).click( function () {
		var cnum = $( this ).attr( 'cnum' );
		swal( {
				title: "댓글을 삭제 하시겠습니까?",
				//             text: "삭제된 데이터는 ",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "삭 제",
				cancelButtonText: "취 소"
			},
			function ( isConfirm ) {
				if ( isConfirm ) {
					var res = INSIGHT.REST.deleteComment( token, eventID, qnum, cnum );
					if ( res.code == 200 ) {
						renderReplys( qnum );
					}
				} else {}
			} );

	} );


}