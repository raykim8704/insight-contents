LEMP.addEvent( "backbutton", "page.callbackBackButton" ); //안드로이드 back 버튼 입력 이벤트
var eventID;
var token;
var authority;
var commentList = new Array();
var classNum;
var userID;


//  $(document).ready(function(){
//	  $('select').material_select();
//  });

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
		eventID = eventInfo.data.evnum;
		classNum = eventInfo.data.classNum;
		console.log( eventID );
		token = LEMP.Properties.get( {
			"_sKey": "token"
		} );
		authority = LEMP.Properties.get( {
			"_sKey": "authority"
		} );
		page.initLayout();
		page.initInterface();

	},
	initLayout: function () {

		$( "#header" ).load( "../../common/public/html/header.html" );
		$( "#sideNav" ).load( "../../common/public/html/sideNav.html" );

		$( '#selectbox-class' ).empty();
		$( "select" ).append( '<option disabled selected>퀴즈를 진행할 반을 선택 하세요</option>' );
		$( "select" ).append( '<option value="all">행사 전체</option>' );


		var classList = INSIGHT.REST.getClassList( token, eventID );

		if ( classList.length > 0 ) {



			renderSelectOptions( classList, renderItem );
			$( 'select' ).material_select( 'update' );
		}

	},

	initInterface: function () {

		$( '#selectbox-class' ).on( 'change', function ( arg ) {
			console.log( arg );
			var value = this.value;
			var eventList;
			var title = $( '#selectbox-class option:selected' ).text();



			( value == 'all' ) ?
			eventList = INSIGHT.REST.getAllQuizList( token, eventID ):
				eventList = INSIGHT.REST.getClassQuizList( token, eventID, value )


			if ( eventList.code == 200 ) {
				$( '#task-card' ).empty();
				$( '#task-card-title' ).text( '<li class=\"collection-header grey lighten-2\"><h4 class=\"task-card-title\">' + title + ' 퀴즈</h4></li>' )
				renderSelectOptions( eventList.data.array, renderEventListItems );

				$( '.collection-item' ).click( function () {
					var eventid = $( this ).attr( 'eventid' );
					var quizid = $( this ).attr( 'quizid' );
					var classId = $( this ).attr( 'classid' );
					console.log( classNum );
					LEMP.Window.open( {
						"_sPagePath": "QIZ/html/QIZ3000.html",
						"_oMessage": {
							"eventid": eventid,
							"quizid": quizid,
							"classnum": classId,
							"token": token
						}
					} );

				} );
			}
		} );



	}
}

function renderSelectOptions( list, _fDoms ) {
	list.map( function ( value, index ) {
		_fDoms( value, index );
	} );
}

function renderEventListItems( eventInfo, index ) {
	var label = index + 1;
	console.log( 'rendering go ', eventInfo )
	$( '#task-card' ).append( $( '<li/>', {
		class: 'collection-item dismissable',
		id: 'collection-item-' + index,
		classid: eventInfo.classesId,
		eventid: eventInfo.eventsId,
		quizid: eventInfo.id,
	} ) ).attr( {
		'eid': eventInfo.id
	} );
	$( '#collection-item-' + index ).append( '<span class=\"task-cat grey darken-2\" style=\"margin-left:0;\">' + label + '</span> <span>' + eventInfo.title + '</span>' )

}

function renderItem( value ) {
	$( "select" ).append(
		$( "<option></option>" ).attr( {
			"value": value.id,
			"name": value.name
		} ).text( value.name ) );
}