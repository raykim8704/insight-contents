LEMP.addEvent( "backbutton", "page.callbackBackButton" ); //안드로이드 back 버튼 입력 이벤트
var userID;
var eventID;
var classNum;
var token;

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
	init: function ( qnaInfo ) {

		userID = qnaInfo.data.userID;
		eventID = qnaInfo.data.eventID;
		classNum = qnaInfo.data.classNum;
		token = qnaInfo.data.token;
		var mode = qnaInfo.data.mode;
		var questionInfo;
		var qnum;
		console.log( 'mode' + mode );
		if ( mode ) {
			questionInfo = qnaInfo.data.questionInfo;
			qnum = qnaInfo.data.qnum;
		}

		page.initLayout( userID, mode, questionInfo );
		page.initInterface( eventID, classNum, token, mode, qnum );
	},
	initLayout: function ( userID, mode, questionInfo ) {
		$( "#header" ).load( "../../common/public/html/header.html" );
		$( "#sideNav" ).load( "../../common/public/html/sideNav.html" );
		$( '#icon-preview-name' ).text( userID );

		if ( mode ) {
			console.log( questionInfo.content );
			$( '#textarea-qna' ).val( questionInfo.content );
			var val = $( '#textarea-qna' ).val();
			$( '#textarea-qna' ).focus().val( "" ).val( val );
		}

	},
	initInterface: function ( eventID, classNum, token, mode, qnum ) {
		$( '#btn-cancle' ).click( function () {
			LEMP.Window.replace( {
				'_sPagePath': "QNA/html/QNA1000.html",
				'_oMessage': {
					'evnum': eventID,
					'classNum': classNum
				}
			} );
		} );

		$( '#btn-submit' ).click( function () {
			var qnaWriting = $( '#textarea-qna' ).val();
			var data = new Object();

			if ( qnaWriting ) {
				data = {
					content: qnaWriting
				}
				var writeQna;
				var comfirmText;

				switch ( mode ) {
					case 0:
						writeQna = INSIGHT.REST.writeQna( data, eventID, classNum, token );
						confirmText = " 게시물이 등록 되었습니다."
						break;
					case 1:
						writeQna = INSIGHT.REST.modifyQna( data, eventID, classNum, qnum, token );
						confirmText = " 게시물이 수정 되었습니다."
						break;

				}
				console.log( writeQna );
				if ( writeQna.code == 200 ) {
					swal( {
						title: "Success",
						text: confirmText,
						type: "success",
						showCancelButton: false,
						confirmButtonColor: "#00BCD4",
						confirmButtonText: "확 인",
						closeOnConfirm: false
					}, function () {
						LEMP.Window.replace( {
							'_sPagePath': "QNA/html/QNA1000.html",
							'_oMessage': {
								'evnum': eventID,
								'classNum': classNum
							}
						} );
					} );
				}
			} else {
				swal( "작성된 내용이 없습니다.", "내용을 입력해주세요.", "error" );
			}
		} );
	},
}