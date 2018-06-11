LEMP.addEvent( "backbutton", "page.callbackBackButton" ); //안드로이드 back 버튼 입력 이벤트
var eventID;
var token;
var authority;
var answers = new Array();
var classNum;
var userID;
var surNum;

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
		surNum = eventInfo.data.surNum;
		token = LEMP.Properties.get( {
			"_sKey": "token"
		} );
		authority = LEMP.Properties.get( {
			"_sKey": "authority"
		} );

		console.log( eventID, classNum, surNum );

		//   eventDetail = INSIGHT.REST.getEventDetail(token, eventID);
		page.initLayout( surNum );
		page.initInterface();
	},
	initLayout: function ( surNum ) {
		$( "#header" ).load( "../../common/public/html/header.html" );
		$( "#sideNav" ).load( "../../common/public/html/sideNav.html" );

		var surveyDetail = INSIGHT.REST.getSurveyDetail( token, eventID, surNum );
		var questions;

		( surveyDetail.code == 200 ) ?
		( $( '#survey-title' ).text( surveyDetail.data.title ),
			questions = surveyDetail.data.questions ) :
		swal( "네트워크 오류", "잠시후에 다시 시도해 주세요." );

		( questions.length > 0 ) ?
		( _map( renderQuestions, questions ),
			setEvents( questions ) ) :
		swal( "설문내용이 없습니다." );

		console.log( surveyDetail );


	},
	initInterface: function () {
		userID = LEMP.Properties.get( {
			"_sKey": "userID"
		} );

		$( '#btn-cancle' ).click( function () {
			LEMP.Window.close();
		} )
	}
}

function setEvents( questions ) {
	var types = _map( setAnswerTypes, questions );
	$( '#btn-submit' ).click( function () {
		var userAnswers = _map( getUserAnswers, types );
		_find( findEmpty, userAnswers ) ? swal( '모든 항목을 작성해 주세요' ) : sendUserAnswers( userAnswers )
	} );


}



function _map( f, coll ) {

	var arr = coll.map( function ( value, index ) {
		return f( value, index );
	} );
	return arr;
}

function _find( f, coll ) {
	for ( var i = 0; i < coll.length; i++ ) {
		var result = f( coll[ i ], i );
		if ( result ) {
			return true;
		}
	}
	return false;
}

function sendUserAnswers( userAnswers ) {
	var res = INSIGHT.REST.postSurveyAnswers( token, eventID, surNum, userAnswers );
	( res.code == 200 ) ?
	swal( {
				title: "설문작성이 완료되었습니다. ",
				text: "감사합니다",
				type: "success",
				showCancelButton: false,
				confirmButtonColor: "#8CD4F5",
				confirmButtonText: "확 인",
				closeOnConfirm: false,
				closeOnCancel: false
			},
			function ( isConfirm ) {
				if ( isConfirm ) {
					LEMP.Window.close( {
						"_sCallback": "page.initLayout",
						"_oMessage": {
							"eventid": eventID
						}
					} );
				} else {

				}
			} ):
		swal( '실패하였습니다.', '잠시후에 다시 시도해 주십시오.', 'warning' );

}

function setAnswerTypes( v, i ) {
	var obj = new Object();
	obj[ 'type' ] = v.type;
	obj[ 'duplicate' ] = v.duplicate;
	return obj;
}

function findEmpty( arr, index ) {
	var isEmpty = ( arr.length > 0 ) ? ( ( typeof arr[ 0 ] == "undefined" || arr[ 0 ] == "" ) ? true : false ) : true
	return isEmpty;

}

function getUserAnswers( obj, i ) {
	var name;
	var type = obj.duplicate ? 'checkbox' : 'radio';
	var answer = new Array();

	switch ( obj.type ) {
		case 2:
			name = 'ox' + i;
			answer.push( $( 'input:radio[name=' + name + ']:checked' ).val() );
			break;
		case 3:
			name = 'textarea' + i;
			answer.push( $( '#' + name ).val() );

			break;
		case 4:
			name = 'group-' + i;
			$( 'input[name=' + name + ']:checked' ).each( function () {
				answer.push( this.value );
			} );
			console.log( answer );
			break;
	}

	return answer;

}


function renderQuestions( obj, index ) {

	switch ( obj.type ) {
		case 2:
			renderOX( obj, index );
			break;
		case 3:
			renderShortAnswer( obj, index );
			break;
		case 4:
			renderMultiple( obj, index );
			break;
	}

}


function renderOX( obj, index ) {
	$( '#question-section' ).append( $( '<div/>', {
		class: 'card',
		id: 'card-' + index
	} ) );
	$( '#card-' + index ).append( $( '<div/>', {
		class: 'card-content',
		id: 'card-content-' + index
	} ) );
	$( '#card-content-' + index ).append( $( '<span/>', {
		class: 'card-title',
		text: obj.number + '.' + obj.title
	} ) );
	$( '#card-content-' + index ).append( $( '<form/>', {
		id: 'form-' + index
	} ) );

	$( '#form-' + index ).append( $( '<p/>', {
		id: 'p-' + index
	} ) );
	$( '#p-' + index ).append( $( '<input/>', {
		class: 'ox with-gap',
		id: 'ox' + index,
		name: 'ox' + index,
		type: 'radio',
		num: index,
		value: 'O'
	} ) )
	$( '#p-' + index ).append( $( '<label/>', {
		id: 'label-' + index,
		'for': 'ox' + index
	} ) );
	$( '#label-' + index ).append( $( '<i/>', {
		class: 'material-icons',
		text: 'radio_button_unchecked'
	} ) );

	$( '#form-' + index ).append( $( '<p/>', {
		id: 'p1-' + index
	} ) );
	$( '#p1-' + index ).append( $( '<input/>', {
		class: 'ox with-gap',
		id: 'ox1' + index,
		name: 'ox' + index,
		type: 'radio',
		num: index,
		value: 'X'
	} ) )
	$( '#p1-' + index ).append( $( '<label/>', {
		id: 'label1-' + index,
		'for': 'ox1' + index
	} ) );
	$( '#label1-' + index ).append( $( '<i/>', {
		class: 'material-icons',
		text: 'clear'
	} ) );


}

function renderShortAnswer( obj, index ) {
	$( '#question-section' ).append( $( '<div/>', {
		class: 'card',
		id: 'card-' + index
	} ) );
	$( '#card-' + index ).append( $( '<div/>', {
		class: 'card-content',
		id: 'card-content-' + index
	} ) );
	$( '#card-content-' + index ).append( $( '<span/>', {
		class: 'card-title',
		text: obj.number + '.' + obj.title
	} ) );
	$( '#card-content-' + index ).append( $( '<form/>', {
		class: 'col s12',
		id: 'col-' + index
	} ) );
	$( '#col-' + index ).append( $( '<div/>', {
		class: 'row',
		id: 'row-' + index
	} ) );
	$( '#row-' + index ).append( $( '<div/>', {
		class: 'input-field col s12',
		id: 'input-' + index
	} ) );
	$( '#input-' + index ).append( $( '<textarea/>', {
		class: 'materialize-textarea',
		id: 'textarea' + index
	} ) );
	$( '#input-' + index ).append( $( '<label/>', {
		'for': 'textarea' + index,
		text: '내용을 입력해 주세요.'
	} ) )
}


function renderMultiple( obj, index ) {
	var type = obj.duplicate ? 'checkbox' : 'radio'

	$( '#question-section' ).append( $( '<div/>', {
		class: 'card',
		id: 'card-' + index
	} ) );
	$( '#card-' + index ).append( $( '<div/>', {
		class: 'card-content',
		id: 'card-content-' + index
	} ) );
	$( '#card-content-' + index ).append( $( '<span/>', {
		class: 'card-title',
		text: obj.number + '.' + obj.title
	} ) );
	$( '#card-content-' + index ).append( $( '<form/>', {
		id: 'form-' + index
	} ) );

	for ( var i = 0; i < obj.example.length; i++ ) {
		$( '#form-' + index ).append( $( '<p/>', {
			id: 'p-' + index + '-' + i
		} ) );
		$( '#p-' + index + '-' + i ).append( $( '<input/>', {
			class: 'with-gap',
			name: 'group-' + index,
			'type': type,
			id: 'input-' + index + '-' + i,
			'value': i + 1
		} ) );
		$( '#p-' + index + '-' + i ).append( $( '<label/>', {
			'for': 'input-' + index + '-' + i,
			text: obj.example[ i ].content
		} ) );
	}
}