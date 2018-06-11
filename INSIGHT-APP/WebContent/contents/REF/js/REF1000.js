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
		$( "#header" ).load( "../../common/public/html/header.html" );
		$( "#sideNav" ).load( "../../common/public/html/sideNav.html" );


		eventDetail = INSIGHT.REST.getEventDetail( token, eventID );

		var eventRef, classRef;

		eventDetail.code == 200 ?
			( eventRef = eventDetail.data.information,
				classRef = eventDetail.data.classes[ 0 ].information ) :
			renderEmptyList( [ '#ref-section' ] );

		var refs = eventRef.concat( classRef );

		( refs.length > 0 ) ? (
			_map( renderRefList, refs ),
			setClickEvent() ) :
		renderEmptyList( [ '#ref-section' ] );
	},

	initInterface() {

	}
}


function _map( f, coll ) {
	var arr = coll.map( function ( v, i ) {
		return f( v, i );
	} );
	return arr;
}



function renderRefList( v, i ) {

	var fileName = v.fileName.split( '.' );
	var fileType;
	var fileColor;

	( fileName[ 1 ].toLowerCase() == 'pdf' ) ?
	( fileType = 'picture_as_pdf', fileColor = 'red-text text-darken-1' ) :
	( fileType = 'insert_drive_file', fileColor = 'blue-text text-darken-1' );

	console.log( fileType );
	$( '#ref-section' ).append( $( '<div/>', {
		class: 'card-panel',
		id: 'card-panel-' + i,
		path: v.fileHash,
		name: v.fileName
	} ) );
	$( '#card-panel-' + i ).append( $( '<div/>', {
		class: 'row valign-wrapper',
		id: 'row-' + i
	} ) );
	$( '#row-' + i ).append( $( '<div/>', {
		class: 'col s3 m3 l3 valign-wrapper',
		id: 'col-' + i
	} ) );
	$( '#col-' + i ).append( $( '<i/>', {
		class: 'material-icons ' + fileColor,
		text: fileType
	} ) );
	$( '#row-' + i ).append( $( '<div/>', {
		class: 'col s9 m9 l9',
		text: fileName[ 0 ]
	} ) );

	$( '.row' ).css( {
		'margin-bottom': '0px',
		'font-size': '18px'
	} );
	$( '.material-icons' ).css( {
		'font-size': '30px'
	} )




}

function renderEmptyList( target ) {

	_map( drawEmptyCard, target );

}

function drawEmptyCard( v, i ) {
	$( v ).empty();
	$( v ).append( $( '<div/>', {
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
		text: '- 등록된 자료가 없습니다 -'
	} ) );
	$( '#outline' ).css( {
		'font-size': '60px'
	} );
}


function setClickEvent() {
	$( '.card-panel' ).click( function () {
		var filePath = $( this ).attr( 'path' ) + '/' + $( this ).attr( 'name' );
		console.log( filePath )
		LEMP.EDUApp.showPDF( {
			"_ssev_url": INSIGHT.serviceURL,
			"_spdf_file_path": filePath,
			"_spdf_file": "file/",
			"_fCallback": function ( res ) {}
		} );
	} );
}