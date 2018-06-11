/**
 * 실시간 퀴즈 제어를 위한 Firebase RealTime Database 추가,수정에 사용되는 모듈입니다.
 * <br> <a href="module-INSIGHT_INSIGHT-firebaseUtil-INSIGHT.Audience.html"><strong>INSIGHT.Audience <strong></a> 참여자 퀴즈 리모컨 제어 관련 처리를 담당합니다.
 * <br> <a href="module-INSIGHT_INSIGHT-firebaseUtil-INSIGHT.MC.html"><strong>INSIGHT.MC <strong></a> 진행자 퀴즈 리모컨 제어 관련 처리를 담당합니다.
 * @module
 */


INSIGHT.frmConfig = {
	apiKey: "AIzaSyDSqZz9rm-jeQg-e5R_KQ2ZHKAZq3miZvw",
	authDomain: "insight-324c9.firebaseapp.com",
	databaseURL: "insight-324c9.firebaseio.com",
	projectId: "insight-324c9",
	storageBucket: "insight-324c9.appspot.com",
	messagingSenderId: "352349008150"
};
INSIGHT.firebase = firebase;
INSIGHT.firebase.initializeApp( INSIGHT.frmConfig );

/**
 * @class
 * @description Firebase 실시간 Database를 이용한 진행자(선생님 등)용 실시간 리모컨 제어 클래스입니다.
 */
INSIGHT.MC = new Object();

/**
 * @class
 * @description Firebase 실시간 Database를 이용한 참여자(학생 등)용 실시간 리모컨 제어 클래스입니다.
 */
INSIGHT.Audience = new Object();

INSIGHT.MC.screenMode = 'NONE';
INSIGHT.MC.videoState = 'NONE';


INSIGHT.connectFRD = function () {

	INSIGHT.firebase.database().goOnline();
}

INSIGHT.disconnectFRD = function () {
	INSIGHT.firebase.database().goOffline();
}


/**
 * 진행자의 리모컨 움직임에 따라 화면을 Controll할 때 사용됩니다.
 * <br> 현재 웹은 Vue.js 및 다른 모듈을 사용하므로, 실제 이용되고 있지는 않습니다.
 * @type {Object}
 */
INSIGHT.MC.ViewService = {

	quizInfo: null,

	/**
	 * Parameters:
	 * eventNum - {String} 행사명, 또는 강의명
	 */
	addEvent: function ( eventNum, qnum ) {
		INSIGHT.firebase.database().ref( '/INSIGHT-dev/' + eventNum + '/' + qnum + '/quizINFO' ).set( {
			quizNum: "-1",
			quizType: "type",
			screenMode: "NONE",
			videoState: "NONE",
			viewState: 'READY'

		} );
	},

	setEvent: function ( eventNum, qnum ) {
		quizInfo = INSIGHT.firebase.database().ref( '/INSIGHTv2/' + eventNum + '/qnum' );
	},

	getQuizInfo: function () {
		if ( quizInfo != null )
			return quizInfo;
	}
};

/**
 * 진행자(선생님 등)가 퀴즈 화면 및, 사용자(학생 등)의 리모컨을 제어할 때 사용합니다.
 * <br>예를 들어, 진행자가 1번 문제 퀴즈 리모컨의 진행 버튼을 눌렀다면,
 * <br>화면에 해당 퀴즈 문제가 나오며, 동시에 사용자 리모컨이 해당 문제의 정답을 누를 수 있는 리모컨으로 변환됩니다.
 * @type {Object}
 */
INSIGHT.MC.remoteController = {

	/**
	 * 어떤 과정인지, 어떤 퀴즈 그룹인지를 설정합니다.
	 * @param  {Number} eventNum   [description]
	 * @param  {Number} quizGroup   [description]
	 */

	setEvent: function ( eventNum, quizGroup, classNum ) {
		INSIGHT.MC.eventNum = eventNum + '/' + ( classNum == 0 ? 'ALL' : classNum ) + '/' + quizGroup;
		INSIGHT.firebase.database().ref( '/INSIGHTv2/' + eventNum + '/' + ( classNum == 0 ? 'ALL' : classNum ) + '/lastQgroup' ).set( quizGroup );
		INSIGHT.firebase.database().ref( '/INSIGHTv2/' + eventNum + '/' + ( classNum == 0 ? 'ALL' : classNum ) + '/isOnGoing' ).set( true );
		// if ( classNum !== 'ALL' )
		// 	INSIGHT.firebase.database().ref( '/INSIGHTv2/' + eventNum + '/ALL/isOnGoing' ).set( false );
	},

	offEvent: function ( eventNum, classNum ) {
		INSIGHT.firebase.database().ref( '/INSIGHTv2/' + eventNum + '/' + ( classNum == 0 ? 'ALL' : classNum ) + '/isOnGoing' ).set( false );
	},

	onOffVisibleState: function ( eventNum, trueFunction = null, falseFunction = null, classNum = 'ALL' ) {
		var quizInfo = INSIGHT.firebase.database().ref( '/INSIGHTv2/' + eventNum + '/' + classNum );
		quizInfo.child( 'isOnGoing' ).once( 'value' ).then( function ( snapshot ) {
			console.log( snapshot.val() );
			if ( snapshot.val() === null ) {
				return null;
			} else {
				if ( snapshot.val() == true && trueFunction != null )
					trueFunction();
				else if ( snapshot.val() == false && trueFunction != null )
					falseFunction();
			}
		} );
	},

	showAllStatistics: function ( queNum, type ) {
		INSIGHT.MC.screenMode = "NONE";
		INSIGHT.firebase.database().ref( '/INSIGHTv2/' + INSIGHT.MC.eventNum + '/quizINFO' ).set( {
			quizNum: queNum,
			quizType: type,
			screenMode: "NONE",
			videoState: "NONE",
			viewState: 'RANK'
		} );
	},

	showQuiz: function ( queNum, type ) {
		INSIGHT.MC.screenMode = "NONE";
		INSIGHT.firebase.database().ref( '/INSIGHTv2/' + INSIGHT.MC.eventNum + '/quizINFO' ).set( {
			quizNum: queNum,
			quizType: type,
			viewState: 'RUN',
			screenMode: "NONE",
			videoState: INSIGHT.MC.videoState
		} );
	},

	showAnswer: function ( queNum, type ) {
		INSIGHT.firebase.database().ref( '/INSIGHTv2/' + INSIGHT.MC.eventNum + '/quizINFO' ).set( {
			quizNum: queNum,
			quizType: type,
			viewState: 'RESULT',
			screenMode: INSIGHT.MC.screenMode,
			videoState: INSIGHT.MC.videoState
		} );
	},

	showCurrentStatic: function ( queNum, type ) {
		INSIGHT.firebase.database().ref( '/INSIGHTv2/' + INSIGHT.MC.eventNum + '/quizINFO' ).set( {
			quizNum: queNum,
			quizType: type,
			viewState: 'STATIC',
			screenMode: INSIGHT.MC.screenMode,
			videoState: INSIGHT.MC.videoState
		} );
	},

	stopQuiz: function ( queNum, type ) {
		INSIGHT.MC.videoState = "NONE";
		INSIGHT.firebase.database().ref( '/INSIGHTv2/' + INSIGHT.MC.eventNum + '/quizINFO' ).set( {
			quizNum: queNum,
			quizType: type,
			screenMode: "NONE",
			videoState: INSIGHT.MC.videoState,
			viewState: "STOP"
		} );
	},

	playVideo: function ( queNum, type ) {

		INSIGHT.firebase.database().ref( '/INSIGHTv2/' + INSIGHT.MC.eventNum + '/quizINFO' ).set( {
			quizNum: queNum,
			quizType: type,
			viewState: 'RUN',
			screenMode: INSIGHT.MC.screenMode,
			videoState: "START"
		} );
		INSIGHT.MC.videoState = "START";
	},

	pauseVideo: function ( queNum, type ) {
		INSIGHT.firebase.database().ref( '/INSIGHTv2/' + INSIGHT.MC.eventNum + '/quizINFO' ).set( {
			quizNum: queNum,
			quizType: type,
			viewState: 'RUN',
			screenMode: INSIGHT.MC.screenMode,
			videoState: "PAUSE"
		} );
		INSIGHT.MC.videoState = "PAUSE";
	},

	onScreenMode: function ( queNum, type ) {

		INSIGHT.MC.screenMode = 'FULL';

		INSIGHT.firebase.database().ref( '/INSIGHTv2/' + INSIGHT.MC.eventNum + '/quizINFO' ).set( {
			quizNum: queNum,
			quizType: type,
			viewState: 'RUN',
			screenMode: INSIGHT.MC.screenMode,
			videoState: INSIGHT.MC.videoState
		} );

		return INSIGHT.MC.screenMode;
	},

	offScreenMode: function ( queNum, type ) {

		INSIGHT.MC.screenMode = 'NONE';

		INSIGHT.firebase.database().ref( '/INSIGHTv2/' + INSIGHT.MC.eventNum + '/quizINFO' ).set( {
			quizNum: queNum,
			quizType: type,
			viewState: 'RUN',
			screenMode: INSIGHT.MC.screenMode,
			videoState: INSIGHT.MC.videoState
		} );

		return INSIGHT.MC.screenMode;
	}

};


/**
 * 참여자(학생 등)의 리모컨을 실시간으로 제어하기 위한 Object입니다.
 * @type {Object}
 */
INSIGHT.Audience.remoteController = {
	quizInfo: null,
	eventNum: null,

	getInitQuizInfo: function ( eventNum, classNum ) {
		quizInfo = INSIGHT.firebase.database().ref( '/INSIGHTv2/' + eventNum );
		if ( quizInfo != null )
			return quizInfo;
	},

};