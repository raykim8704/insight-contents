/**
 * @module
 * @description 모바일 애플리케이션의 과정리스트 페이지에서 이용됩니다.
 */

LEMP.addEvent( "backbutton", "page.callbackBackButton" ); //안드로이드 back 버튼 입력 이벤트
var token;
var exitCount = 0;



var page = {
	init: function () {
		page.initLayout();
		page.initInterface();
	},
	/**
	 * 안드로이드에서 back 버튼을 눌렀을 경우, 종료 여부를 묻고 이에 따른 처리를 합니다.
	 * <br> '종료하기' 버튼을 클릭한 경우 : 앱을 종료합니다.
	 * <br> '아니오' 버튼틀 클릭한 경우 : 앱 상태를 유지합니다.
	 */
	callbackBackButton: function () {

		var timer = setTimeout( function () {
			exitCount = 0;
		}, 2000 );
		exitCount += 1;
		if ( exitCount == 1 ) {
			Materialize.toast( '한번 더 누를 경우 앱을 종료합니다.', 2000 )
		} else if ( exitCount == 2 ) {
			LEMP.App.exit();
		}
	},

	initLayout: function () {
		token = LEMP.Properties.get( {
			"_sKey": "token"
		} );
		var eventList = INSIGHT.REST.getEventList( token );
		console.log( eventList );

		if ( eventList.code == 200 ) {
			page.renderEventList( eventList );
		} else {
			LEMP.EDUApp.showProgressBar( false );
			LEMP.EDUApp.errorService( eventList, "과정 목록 조회" );
		}

	},
	initInterface: function () {
		$( '#btn-logout-man' ).click( function () {

			swal( {
					title: "Logout",
					text: "로그아웃하고 로그인페이지로 이동합니다.",
					type: "warning",
					showCancelButton: true,
					confirmButtonColor: "#DD6B55",
					confirmButtonText: "네, 로그아웃 합니다. ",
					cancelButtonText: "아니요",
					closeOnConfirm: false,
					closeOnCancel: false
				},
				function ( isConfirm ) {
					if ( isConfirm ) {
						var result = true;
						LEMP.EDUApp.stopLomeoPush( {
							"_fCallback": function ( res ) {}
						} );

						var uuid;
						LEMP.EDUApp.getLomeoUuid( {
							"_fCallback": function ( res ) {
								var logoutResult;
								if ( res.result === "true" || res.result === true ) {
									var uuid = res.uuid;
									logoutResult = INSIGHT.REST.logoutService( token, uuid );
								} else {
									logoutResult = INSIGHT.REST.logoutService( token );
								}

								if ( logoutResult.customStatus === 'failed' ) {
									LEMP.EDUApp.showProgressBar( false );
									LEMP.EDUApp.errorService( eventDetail, "로그아웃하기" );
								}

								LEMP.Properties.remove( {
									"_sKey": "token"
								} );
								LEMP.Properties.remove( {
									"_sKey": "autoLoginState"
								} );
								LEMP.Properties.remove( {
									"_sKey": "userID"
								} );
								LEMP.Properties.remove( {
									"_sKey": "userPw"
								} );



								LEMP.Window.replace( {
									"_sPagePath": "LGN/html/LGN1000.html"
								} );
							}
						} );
						// result = INSIGHT.REST.logoutService(tokenID);
					} else {
						swal.close();
					}
				} );
		} );

	},

	renderEventList: function ( eventList ) {
		
		$( '#ongoing_event_lists' ).empty();
		$( '#ended_event_lists' ).empty();
		var onGoingEventList;
		var endEventList;

		console.log( eventList );

		( eventList.data.totalCount > 0 ) ?
		( onGoingEventList = _filter(removeNull, _map( sortOngoing, eventList.data.array )),
		 endEventList = _filter(removeNull, _map( sortEnd, eventList.data.array )),
		 checkEachList( onGoingEventList, endEventList )
		) :
		( renderEmptyList( [ '#ongoing', '#ended' ] ) );

		$( ".card" ).click( function () {
			var isEmptyCard = $( this ).hasClass( 'empty-card' );
			if ( !isEmptyCard ) {
				var ev = $( this ).attr( 'id' );
				var title = $( '#content-title-' + ev ).text();
				LEMP.Properties.set( {
					'_sKey': 'evnum',
					'_vValue': ev
				} )
				LEMP.Properties.set( {
					'_sKey': 'evtitle',
					'_vValue': title
				} );
				var authLevel = LEMP.Properties.get( {
					"_sKey": "authority"
				} );
				var sPagePath = "DTI/html/DTI1000.html";
				var eventIdentifier = $( this ).attr( 'id' );
				LEMP.Window.open( {
					"_sPagePath": sPagePath,
					"_oMessage": {
						"evnum": eventIdentifier
					}
				} );
			}
		} );
	}
}




function _map( f, coll ) {
	var arr = coll.map( function ( value, index ) {
		return f( value, index );
	} );
	return arr;
}

function _filter (f, coll) {
	var arr  = coll.filter(f);
	return arr;
}

function removeNull(v){
	return v != 'null'
}

function checkEachList( onGoingEventList, endEventList ) {
	onGoingEventList.length > 0 ? _map( renderList, onGoingEventList ) : renderEmptyList( [ '#ongoing' ] );
	endEventList.length > 0  ? _map( renderList, endEventList ) : renderEmptyList( [ '#ended' ] );
}

function sortOngoing( v, i ) {
	return v.end ? null : v;
}

function sortEnd( v, i ) {
	return v.end ? v : null;
}

function renderList( v, i ) {
	if(v==null){
		
	}else{
		var target = ( v.end ) ? '#ended' : '#ongoing';

		var originStartDate = INSIGHT.Model.dateConversionService( v.startDate );
		var originEndDate = INSIGHT.Model.dateConversionService( v.endDate );
		var startDate = originStartDate[ 0 ] + "년 " + originStartDate[ 1 ] + "월 " + originStartDate[ 2 ] + "일(" + originStartDate[ 4 ] + ")";
		var endDate = originEndDate[ 0 ] + "년 " + originEndDate[ 1 ] + "월 " + originEndDate[ 2 ] + "일(" + originEndDate[ 4 ] + ")";

		$( target ).append( $( '<div/>', {
			id: v.id,
			class: 'card small',
			// classNum : v.classes[0].id
		} ) );

		$( '#' + v.id ).append( $( '<div/>', {
			class: 'card-image'
		} ) );
		if ( v.image != null ) {
			$( '#' + v.id ).children( '.card-image' ).append( $( '<img/>', {
				src: INSIGHT.serviceURL + "file/" + v.image.fileHash + "/" + v.image.fileName,
				"width": "100%",
				"height": "100%",
				"object-fit": "cover"
			} ) );
		} else {
			$( '#' + v.id ).children( '.card-image' ).append( $( '<img/>', {
				src: "../../LEMP/common/images/cover3.jpg",
				"width": "100%",
				"height": "100%",
				"object-fit": "cover"
			} ) );
		}
		//카드 안에 card-contents(제목,설명,날짜가 들어가는) 추가
		$( '#' + v.id ).append( $( '<div/>', {
			class: 'card-content'
		} ) );

		//카드 안에 설명 추가
		$( '#' + v.id ).children( '.card-content' ).append( $( '<p/>', {
			class: 'content-title'
		} ) ).append( $( '<p/>', {
			text: v.description
		} ) ).append( $( '<p/>', {
			class: 'content-term'
		} ) );

		//카드 안에 제목 추가
		$( '#' + v.id ).children( '.card-content' ).children( '.content-title' ).append( $( '<span/>', {
			text: v.title,
			id: 'content-title-' + v.id
		} ) ).css( {
			"color": "#2c2a29",
			"font-size": "16px"
		} );

		//카드 안에 날짜 추가
		$( '#' + v.id ).children( '.card-content' ).children( '.content-term' ).append( $( '<span/>', {
			text: startDate.substring( 2 ) + " ~ " + endDate.substring( 2 ),
			class: 'tast-cat teal '
		} ) ).css( {
			color: '#FFFFFF',
			'font-size': '0.8rem'
		} );

		console.log( target, v, i );
	}
	
}

function renderEmptyList( target ) {

	_map( drawEmptyCard, target );

}

function drawEmptyCard( v, i ) {
	$( v ).empty();
	$( v ).append( $( '<div/>', {
		class: 'card empty-card',
		id: 'empty-card' + i
	} ) );
	$( '#empty-card' + i ).append( $( '<div/>', {
		class: 'card-content center-align',
		id: 'empty-card-content' + i
	} ) );
	$( '#empty-card-content' + i ).append( $( '<i/>', {
		class: 'material-icons  deep-orange-text text-lighten-1 outline',
		text: 'error_outline'
	} ) );
	$( '#empty-card' + i ).append( $( '<div/>', {
		class: 'center-align',
		id: 'empty-text' + i
	} ) );
	$( '#empty-text' + i ).append( $( '<p/>', {
		text: '- 진행중인 행사가 없습니다 -'
	} ) );
	$( '.outline' ).css( {
		'font-size': '60px'
	} )

}