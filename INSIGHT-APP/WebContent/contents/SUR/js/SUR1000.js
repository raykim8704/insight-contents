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
			var time = $(this).attr('time');
			var startDate = $(this).attr('startdate');
			parseInt( complete ) ? swal( '설문 완료', '제출 완료된 설문입니다' ) : openSurvey(surNum,time,startDate);
				
		} )
	},
	initInterface: function () {
		userID = LEMP.Properties.get( {
			"_sKey": "userID"
		} );
	}
}
function openSurvey(surNum, time,startDate){
	console.log(time)
	
	var parsedTime = time.split(' ');
	
	var date = parsedTime[0];
	var year = date.split('-')[0];
	var month = date.split('-')[1];
	var day = date.split('-')[2];
	
	var _time = parsedTime[1];
	var hours = _time.split(':')[0];
	var mins = _time.split(':')[1];
	
	console.log(_time, hours, mins);
	
	var _sParsedTime = startDate.split(' ');
	var _sDate = _sParsedTime[0];
	var _sYear = _sDate.split('-')[0];
	var _sMonth = _sDate.split('-')[1];
	var _sDay = _sDate.split('-')[2]; 
	var _sTime = _sParsedTime[1];
	var _sHours = _sTime.split(':')[0];
	var _sMins = _sTime.split(':')[1];
	
	
	
	
	var startDate = new Date(parseInt(_sYear),parseInt(_sMonth)-1,parseInt(_sDay),_sHours,_sMins);
	var targetDate = new Date(parseInt(year),parseInt(month)-1,parseInt(day),hours,mins);
	var endTime = time.split(' ')[1];
	
	var today =  new Date();
	console.log('today:',today);
	console.log('targetdate',targetDate);
	console.log('time',today.getHours());

	if(today < startDate){
		swal('Sorry!','설문 시작 전 입니다');
	}else if (today > targetDate){
		swal('기한종료','설문 기간이 종료 되었습니다.');
	}else{
		LEMP.Window.open( {
		'_sPagePath': 'SUR/html/SUR2000.html',
		'_oMessage': {
			'surNum': surNum,
			'evnum': eventID,
			'classNum': classNum
		}
	} ); 
	}
	
//	(today <= targetDate ) ? 
//	LEMP.Window.open( {
//		'_sPagePath': 'SUR/html/SUR2000.html',
//		'_oMessage': {
//			'surNum': surNum,
//			'evnum': eventID,
//			'classNum': classNum
//		}
//	} ) : 
//	swal( '기한종료', '종료된 설문 입니다.' );
	

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
	var startDate = obj.startDate.split(':');
	endDate = endDate[ 0 ] + ':' + endDate[ 1 ];
	startDate = startDate[0] + ':' + startDate[1];
	

	obj.complete ?
		( backgroundColor = 'teal', fontColor = 'white-text', dateFontColor = 'deep-orange-text text-lighten-4', dateText = '설문완료' ) :
		( backgroundColor = '', fontColor = 'grey-text text-darken-4', dateFontColor = 'deep-orange-text', dateText = '완료기한 : ' + endDate );

	$( '#survey-section' ).append( $( '<div/>', {
		class: 'card-panel ' + backgroundColor,
		id: 'card-panel-' + index,
		surNum: obj.id,
		complete: obj.complete,
		time : endDate,
		startdate : startDate

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