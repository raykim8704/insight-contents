/**
 * @module
 * @description 모바일 애플리케이션의 공지사항 페이지에서 이용됩니다.
 */

LEMP.addEvent( "backbutton", "page.callbackBackButton" ); //안드로이드 back 버튼 입력 이벤트
/**
 * 저희 앱은 LDCC의 <strong>L.EMP Platform</strong> 을 이용해 만들었습니다.
 * <br> BRD1000 모듈은 <strong>page</strong> class 안에서 native 기능은 L.EMP 라이브러리를, 그 외 기능은 jQuery를 이용하여 동작합니다.
 * @type {Object}
 * */

var eventID;

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
		page.initLayout();
		page.initInterface();

		eventID = eventInfo.data.evnum;
		var token = LEMP.Properties.get( {
			"_sKey": "token"
		} );
		console.log(eventID);
		console.log(token);
		var eventDetail = INSIGHT.REST.getEventDetail( token, eventID );
		eventDetail = eventDetail.data;
		var classNum = eventDetail.classes[ 0 ].id;
		console.log( classNum )


		var noticeList = INSIGHT.REST.getNoticeService( eventID, token, 1 );

		if ( noticeList.customStatus === "success" ) {
			page.renderNoticeList( noticeList, 1 );
		} else if ( noticeList.customStatus === "failed" ) {
			LEMP.EDUApp.showProgressBar( false );
			LEMP.EDUApp.errorService( noticeList, "공지사항 확인" );
		}

		var classNoticeList = INSIGHT.REST.getClassNoticeService( eventID, token, classNum );

		if ( classNoticeList.customStatus === "success" ) {
			page.renderNoticeList( classNoticeList, 2 );
		} else if ( noticeList.customStatus === "failed" ) {
			LEMP.EDUApp.showProgressBar( false );
			LEMP.EDUApp.errorService( classNoticeList, "공지사항 확인" );
		}

	},
	initLayout: function () {
		$( "#header" ).load( "../../common/public/html/header.html" );
		$( "#sideNav" ).load( "../../common/public/html/sideNav.html" );
	},
	initInterface: function () {

	},
	renderNoticeList: function ( noticeList, type ) {
		console.log( noticeList );
		var tabId;
		switch ( type ) {
			case 1:
				tabId = 'eventnotice'
				break;
			case 2:
				tabId = 'classnotice'
				break;
		}
		if ( noticeList.array.length > 0 ) {
			jQuery.each( noticeList.array, function ( brdIndex, value ) {
				var brdDate = value.sendDate;
				brdDate = brdDate.split( ' ' )[ 0 ];
				if ( !value.image ) {
					$( '#' + tabId ).append( $( '<div/>', {
						class: 'card ',
						id: 'card-' + tabId + brdIndex
					} ) );
					$( '#card-' + tabId + brdIndex ).append( $( '<div/>', {
						class: 'card-content ',
						id: 'card-content-' + tabId + brdIndex
					} ) );
					$

					$( '#card-content-' + tabId + brdIndex ).append( '<span class=\"blue-text\" style=\"font-weight:700\"><h5>' + value.title + '</h5></span>' );

					$( '#card-content-' + tabId + brdIndex ).append( '<p>' + brdDate + '</P>' );

					$( '#card-content-' + tabId + brdIndex ).append( $( '<div/>', {
						class: 'divider'
					} ) );

					$( '#card-content-' + tabId + brdIndex ).append( '<p style="padding-top:15px;">' + value.content + '</P>' );
				} else {
					$( '#' + tabId ).append( $( '<div/>', {
						class: 'card',
						id: 'card-' + tabId + brdIndex
					} ) );
					$( '#card-' + tabId + brdIndex ).append( $( '<div/>', {
						class: 'card-image',
						id: 'card-image-' + tabId + brdIndex
					} ) );
					$( '#card-image-' + tabId + brdIndex ).append( $( '<img/>', {
						src: INSIGHT.serviceURL + "file/" + value.image.fileHash + "/" + value.image.fileName,
					} ) );
					// src: INSIGHT.serviceURL + "file/" + value.image.fileHash + "/" + value.image.fileName,
					$( '#card-' + tabId + brdIndex ).append( $( '<div/>', {
						class: 'card-content ',
						id: 'card-content-' + tabId + brdIndex
					} ) );
					$( '#card-content-' + tabId + brdIndex ).append( '<span class=\"blue-text\" style=\"font-weight:700\"><h5>' + value.title + '</h5></span>' );

					$( '#card-content-' + tabId + brdIndex ).append( '<p>' + brdDate + '</P>' );

					$( '#card-content-' + tabId + brdIndex ).append( '<p style="padding-top:15px;">' + value.content + '</P>' );

				}

			} );

			$( '.card-content' ).css( {
				padding: '10'
			} )

		}


	}

}