/**
 * @module
 * @description 모바일 애플리케이션의 세부정보 페이지(DTI)에서 이용됩니다.
 *              <br>세부정보 페이지에는 [정보,출석,퀴즈,설문] 탭이 포함됩니다.
 *              <br><strong>DTI00011 모듈 : </strong> 세부정보 페이지 [정보] 탭을 위한 모듈입니다. 세부정보 페이지에서 필요한 대부분의 정보들이 이곳에 존재합니다.
 *              <br><strong>DTI00012 모듈 : </strong> 세부정보 페이지 [출석] 탭을 위한 모듈입니다.
 *              <br><strong>DTI00013 모듈 : </strong> 세부정보 페이지 [퀴즈] 탭을 위한 모듈입니다.
 *              <br><strong>DTI00014 모듈 : </strong> 세부정보 페이지 [설문] 탭을 위한 모듈입니다.
 */
LEMP.addEvent( "backbutton", "page.callbackBackButton" ); //안드로이드 back 버튼 입력 이벤트
/**
 * 과정 ID 정보
 *
 * @type {Number}
 */
var eventID,

	/**
	 * 사용자 토큰(ID 대용)
	 *
	 * @type {String}
	 */
	token,

	/**
	 * 로그인한 사용자가 가지고 있는 권한. <br>
	 * 진행자/ 참여자의 세부정보 페이지가 다르며, 퀴즈 리모컨 형태도 다르기 때문에, 이를 구분하기 위해 사용됩니다.
	 *
	 * @type {String}
	 */
	authority,

	/**
	 * 과정에 대한 상세 정보가 담겨 있습니다.
	 *
	 * @type {Object}
	 */
	eventDetail,

	/**
	 * 과정 시작 기간. Date 형식을 갖춘 String입니다.
	 *
	 * @type {String}
	 */
	attendStartTime,

	/**
	 * 과정 종료 기간. Date 형식을 갖춘 String입니다.
	 *
	 * @type {Object}
	 */
	attendEndTime,

	/**
	 * 과정이 진행되는 장소. [0]위도 latitude , [1]경도 longitude
	 *
	 * @type {Array}
	 */
	locationXY,

	/**
	 * 과정에 사용되는 자료 정보. <a href="module-REF_js_REF0001.html">REF0001</a> 모듈에서
	 * 사용됩니다.
	 *
	 * @type {Object}
	 */
	meterials;



/**
 * 저희 앱은 LDCC의 <strong>L.EMP Platform</strong> 을 이용해 만들었습니다. <br>
 * DTI00011 모듈은 세부정보 페이지 중 [정보] 탭에 관한 내용을 처리합니다 <br>
 * DTI00011 모듈은 <strong>page</strong> class 안에서 native 기능은 L.EMP 라이브러리를, 그 외
 * 기능은 jQuery를 이용하여 동작합니다.
 *
 * @type {Object}
 */
$( document ).ready( function () {
	$( '.carousel' ).carousel();
} );

var page = {
	/**
	 * 안드로이드에서 back 버튼을 눌렀을 경우, 행사 정보 리스트로 돌아갑니다.
	 */
	callbackBackButton: function () {
		LEMP.Window.replace( {
			"_sPagePath": "MAN/html/MAN1000.html"
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
		console.log(eventDetail);



		LEMP.Properties.set( {
			'_sKey': 'classNum',
			'_vValue': eventDetail.data.classes[ 0 ].id
		} );

		page.initLayout();

	},
	initLayout: function () {
		$( "#header" ).load( "../../common/public/html/header.html" );
		$( "#sideNav" ).load( "../../common/public/html/sideNav.html" );



		if ( eventDetail.code == 200 ) {
			console.log( 'in' )
			agendaDetailil = eventDetail.data;

			attendStartTime = eventDetail.data.checkStartTime;
			attendEndTime = eventDetail.data.checkEndTime;
			locationXY = eventDetail.data.locationXY.split( "," );
			meterials = eventDetail.data.information;
			LEMP.EDUApp.showProgressBar( false );
			
			
			authority == 'STUDENT' ? 
			$( '.carousel' ).carousel( 'next', 	page.renderEventDetailInformation(eventDetail.data) )  :
			$('#slide-card').hide()
				
		} else {
			LEMP.EDUApp.errorService( eventDetail, "과정 상세 보기" );
		}



	},
	renderEventDetailInformation: function (agendaDetail) {

		console.log(agendaDetail.agendaList);
		
		if ( agendaDetail.agendaList == null || agendaDetail.agendaList.length > 0 ) { 
		
		// 화면에 보여질 날짜 형식 가공 : From originDate To date
		var originStartDate = INSIGHT.Model.dateConversionService( agendaDetail.startDate );
		var originEndDate = INSIGHT.Model.dateConversionService( agendaDetail.endDate );
		var startDate = originStartDate[ 0 ] + "년 " + originStartDate[ 1 ] + "월 " + originStartDate[ 2 ] + "일(" + originStartDate[ 4 ] + ")";
		var endDate = originEndDate[ 0 ] + "년 " + originEndDate[ 1 ] + "월 " + originEndDate[ 2 ] + "일(" + originEndDate[ 4 ] + ")";
		// 행사 이미지 없을 경우 디폴트 이미지를 보여줍니다.
		if ( agendaDetail.image != null ) {
			$( '#event-detail-img' ).append( $( '<img/>', {
				src: INSIGHT.serviceURL + "file/" + agendaDetail.image.fileHash + "/" + agendaDetail.image.fileName
			} ) );
		} else {
			$( '#event-detail-img' ).append( $( '<img/>', {
				src: "../../LEMP/common/images/cover3.jpg"
			} ) );
		}

		$( '#text-event-title' ).text( agendaDetail.title );

		$( '#card-detail-main-content' ).append( '<p>' + agendaDetail.description + '</p>' );
		$( '#card-detail-main-content' ).append( '<p>' + startDate + " - " + endDate + '</p>' );

		$( '#text-location' ).text( agendaDetail.location );
		$( '#text-location-detail' ).text( agendaDetail.detailLocation );


		var locationX = parseFloat( locationXY[ 0 ] );
		var locationY = parseFloat( locationXY[ 1 ] );
		LEMP.EDUApp.drawMap( locationX, locationY, "map" );


		$( '#text-time-begin' ).text( startDate.substring( 6 ) + " " + originStartDate[ 3 ] );

		$( '#text-time-end' ).text( endDate.substring( 6 ) + " " + originEndDate[ 3 ] );


		var agendaHeight = 0;

		var colorArray = [ 'amber', 'green', 'blue', 'red' ];

		var today = new Date();

		var _sToday = today.getFullYear() + '-' + ( today.getMonth() + 1 ) + '-' + today.getDate();
		console.log( _sToday );
		var sliderIndex = 0;

		console.log( today );
		
		
		$( '#slide-section' ).append( $( '<div/>', {
			class: 'carousel carousel-slider center',
			'data-indicators': 'true',
			id: 'agenda-slider'
		} ) );

		jQuery.each( agendaDetail.agendaList, function ( index, value ) {

			if ( value.date == _sToday ) sliderIndex = index;

			$( '#agenda-slider' ).append( $( '<div/>', {
				//class : 'carousel-item '+colorArray[index%4]+' white-text',
				class: 'carousel-item grey lighten-4 white-text',
				id: 'carousel-item-' + index
			} ) );

			var color = colorArray[ index % 4 ];

			// $('#carousel-item-'+index).append('<h5>'+value.date+'</h5>');
			$( '#carousel-item-' + index ).append( $( '<h5/>', {
				class: color + '-text',
				text: value.date
			} ) )

			$( '#carousel-item-' + index ).append( $( '<table/>', {
				class: 'centered agenda-table grey lighten-1',
				id: 'table-' + index
			} ) );

			var agenda = value.agenda;
			if ( agendaHeight < value.agenda.length ) {
				agendaHeight = value.agenda.length;
			}
			jQuery.each( agenda, function ( agendaIndex, agendaValue ) {
				var startTime = agendaValue.startTime;
				startTime = startTime.substring( 0, 5 );
				var endTime = agendaValue.endTime;
				endTime = endTime.substring( 0, 5 );
				var location = agendaValue.location;
				if ( !location ) {
					location = '-';
				}

				$( '#table-' + index ).append( '<tr><th class=\"white center-align\ " colspan=\'3\'><span class=\"white grey-text \">' + agendaValue.title + '</span></th></tr>' );
				$( '#table-' + index ).append( $( '<tbody/>', {
					id: 'tbody' + index + agendaIndex
				} ) );
				$( '#tbody' + index + agendaIndex ).append( '<tr><td>시작</td><td>종료</td><td>장소</td></tr>' );
				$( '#tbody' + index + agendaIndex ).append( '<tr><td>' + startTime + '</td><td>' + endTime + '</td><td>' + location + '</td></tr>' );
			} );
		} );
		agendaHeight = agendaHeight * 160;
		agendaHeight = agendaHeight + 'px';

		$( '.carousel' ).css( {
			'height': agendaHeight
		} );
		$( '.agenda-table' ).css( {
			'table-layout': 'fixed'
		} )
		$( '.agenda-table td' ).css( {
			'padding': '10px 5px'
		} );
		$( 'thead' ).css( {
			'border-bottom': '1px solid #FFFFFF'
		} );


		$( '.carousel.carousel-slider' ).carousel( {
			fullWidth: true
		} );
		
		}
		else{
			$('#slide-card').hide();
		}

		return sliderIndex;
	}
}