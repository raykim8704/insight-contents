LEMP.addEvent( "backbutton", "page.callbackBackButton" ); //안드로이드 back 버튼 입력 이벤트
var eventID;
var token;
var authority;
var commentList = new Array();
var classNum;
var userID;

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
		page.initLayout( eventID );
		page.initInterface();
	},
	initLayout: function ( eventID ) {
		eventID = ( typeof eventID == 'object' ) ? eventID.eventid : eventID;

		$( "#header" ).load( "../../common/public/html/header.html" );
		$( "#sideNav" ).load( "../../common/public/html/sideNav.html" );

		var surveyListAll = INSIGHT.REST.getSurveyListAll( token, eventID );
		var surveyListClass = INSIGHT.REST.getSurveyListClass( token, eventID, classNum );

		var surveyList;

		( surveyListAll.code == 200 ) && ( surveyListClass.code == 200 ) ? surveyList = surveyListAll.data.array.concat( surveyListClass.data.array ): surveyList = [];
		( surveyList.length > 0 ) ? ( $( '#survey-section' ).empty(), _map( renderSurveyItem, surveyList ) ) : renderEmptyList();

		$( '.card-panel' ).click( function () {
			var complete = $( this ).attr( 'complete' );
			var surNum = $( this ).attr( 'surNum' )
			parseInt( complete ) ? swal( '설문 완료', '제출 완료된 설문입니다' ) :
				LEMP.Window.open( {
					'_sPagePath': 'SUR/html/SUR2000.html',
					'_oMessage': {
						'surNum': surNum,
						'evnum': eventID,
						'classNum': classNum
					}
				} )
		} )
	},
	initInterface: function () {
		userID = LEMP.Properties.get( {
			"_sKey": "userID"
		} );
	}
}

function renderEmptyList() {

	$( '#survey-section' ).empty();
	$( '#survey-section' ).append( $( '<div/>', {
		class: 'card',
		id: 'empty-card'
	} ) );
	$( '#empty-card' ).append( $( '<div/>', {
		class: 'card-content center-align',
		id: 'empty-card-content'
	} ) );
	$( '#empty-card-content' ).append( $( '<i/>', {
		class: 'material-icons  deep-orange-text text-lighten-1',
		id: 'outline',
		text: 'error_outline'
	} ) );
	$( '#empty-card' ).append( $( '<div/>', {
		class: 'center-align',
		id: 'empty-text'
	} ) );
	$( '#empty-text' ).append( $( '<p/>', {
		text: '- 진행중인 행사가 없습니다 -'
	} ) );
	$( '#outline' ).css( {
		'font-size': '60px'
	} )

}

function _map( f, list ) {
	console.log( list )
	list.map( function ( v, i ) {
		f( v, i );
	} );
}



function renderSurveyItem( obj, index ) {
	var num = index + 1;
	var title = obj.title;
	var backgroundColor, fontColor, dateFontColor, dateText;
	var endDate = obj.endDate.split( ':' );
	endDate = endDate[ 0 ] + ':' + endDate[ 1 ];

	obj.complete ?
		( backgroundColor = 'teal', fontColor = 'white-text', dateFontColor = 'deep-orange-text text-lighten-4', dateText = '설문완료' ) :
		( backgroundColor = '', fontColor = 'grey-text text-darken-4', dateFontColor = 'deep-orange-text', dateText = '완료기한 : ' + endDate );

	$( '#survey-section' ).append( $( '<div/>', {
		class: 'card-panel ' + backgroundColor,
		id: 'card-panel-' + index,
		surNum: obj.id,
		complete: obj.complete

	} ) );
	$( '#card-panel-' + index ).append( $( '<span/>', {
		class: fontColor,
		text: num + ". " + title
	} ) );
	$( '#card-panel-' + index ).append( '<br>' );
	$( '#card-panel-' + index ).append( $( '<span/>', {
		class: dateFontColor,
		text: dateText
	} ) );



}