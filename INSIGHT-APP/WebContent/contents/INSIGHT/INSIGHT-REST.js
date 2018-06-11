/**
 * @class
 * @description REST API를 이용하기 위한 function들의 집합입니다.
 *              <br> 통신 모듈은 모두 이곳에 존재합니다.
 */
INSIGHT.REST = new Object();



/**
 * @typedef {Object} AjaxResult
 * @property {String} customStatus "success" or "failed"
 * @property {Array} array 서버에서 리스트 정보를 받아오는 경우에는, array에 정보가 담겨 있습니다.
 */


/**
 * @namespace
 * @description REST API를 호출하는 주소입니다.
 *              <br> - 개발 서버 주소 : <strong>http://13.124.83.168:8080/</strong>
 *              <br> - 운영 서버 주소 : <strong>https://insight.lotte.net/m/</strong>
 */

INSIGHT.serviceURL = 'http://13.124.83.168:8080/v2/';
//INSIGHT.serviceURL = 'https://insight.lotte.net/m/';


$.ajaxSettings.contentType = "application/json";


/**
 * 서버에 로그인을 요청한 후, 서비스 이용에 필요한 정보[토큰,권한 등]를 받아옵니다.
 * @param  {String} id          사용자 ID. 애플리케이션 로그인 화면에서 사용자가 입력한 ID 정보입니다.
 * @param  {String} password    사용자 비밀번호. 애플리케이션 로그인 화면에서 사용자가 입력한 PW 정보입니다.
 * @param  {String} uuid        L.message push 기기 ID. LEMP.EDUApp.startLomeoPush() 의 result 값 중 하나입니다.
 *
 * @return {AjaxResult}         ajax 리턴 값과 customStatus가 담겨 있습니다.
 *
 * @example
 * // sample of AjaxResult
 * AjaxResult = {
 *      eventList: Array(5),
 *      userRealName: "teacher",
 *      authority: "TEACHER",
 *      unum: "2",
 *      username: "teacher", 
 *      customStatus:"success"
 *      token:"f3b1791d-58c1-4c5a-...",
 *      ...
 * }
 */

INSIGHT.REST.loginService = function ( id, password, uuid ) {

	var userINFO = new Object(); //요청에 대한 응답 정보
	var url = INSIGHT.serviceURL + "user/login"; //서비스 요청 주소
	var data = { //서비스 이용에 필요한 정보
		username: id,
		password: password
	};
	var token = null;


	return _post( url, token, data );
};



/**
 * 서버에 비밀번호 변경을 요청합니다.
 * @param  {String} password    사용자가 입력한 비밀번호
 * @param  {Number} unum        데이터베이스에 저장된 사용자의 실제 ID
 * @param  {String} token       사용자 토큰(ID 대용)
 * @return {AjaxResult}
 */
INSIGHT.REST.initPassword = function ( password, token ) {

	var url = INSIGHT.serviceURL + "user/myinfo/put/changepw"; //서비스 요청 주소
	var data = { //서비스 이용에 필요한 정보
		'password': password
	};

	return _post( url, token, data );
};





/**
 * 서버에 로그아웃을 요청하고, 해당 로그아웃 계정이 L.message push 를 이용할 수 없도록 제한합니다.
 * @param  {String} token 사용자 토큰(id 대용)
 * @param  {String} uuid  L.message push 기기 ID. LEMP.EDUApp.startLomeoPush() 의 result 값 중 하나입니다.
 *
 * @return {AjaxResult}
 */
INSIGHT.REST.logoutService = function ( token, uuid ) {

	var url = INSIGHT.serviceURL + "user/logout"
	var data = { //서비스 이용에 필요한 정보
		uuid: uuid
	};
	return _post( url, token, data );
};

/**
 * L.message push 서비스를 이용하기 위한 uuid를 서버에 전송합니다.
 * uuid 는 LEMP 플러그인을 통해 생성됩니다.
 *
 * @param  {String} token 사용자 토큰(id 대용)
 * @param  {String} uuid  L.message push 기기 ID. LEMP.EDUApp.startLomeoPush() 의 result 값 중 하나입니다.
 *
 * @return {AjaxResult}
 *
 */
INSIGHT.REST.sendUUIDService = function ( token, uuid ) {

	var url = INSIGHT.serviceURL + "user/push"
	var data = { //서비스 이용에 필요한 정보
		uuid: uuid
	};
	return _post( url, token, data );
};

/**
 * 특정 사용자가 참여하는 모든 과정 리스트를 가져옵니다.
 *
 * @example
 * // sample of AjaxResult
 * AjaxResult = {
 *      array: Array(1),
 *      totalCount: 11,
 *      customStatus: "success"
 * }
 *
 * // sample of array  * array[0] = {
 *      agenda : null
 *      checkEndTime : "22:30"
 *      checkStartTime : "03:30"
 *      description : "ㅁㄴㅇㄻㄴㅇㄹ"
 *      detailLocation : ""
 *      distance : "300"
 *      end : 0
 *      endDate : "2018-01-06/20:30"
 *      evnum : 139
 *      image : null
 *      information : []
 *      location : ""
 *      locationXY : ""
 *      password : null
 *      qrPassword : null
 *      startDate : "2017-12-18/13:00"
 *      tempState : 0
 *      title : "오동환의 Firebase"
 *      userList : null
 *      users : null
 *      validEndDate : "2018-01-06/00:00"
 *      validStartDate : "2017-12-18/00:00"
 *      writer : "없어없어"
 * }
 * @param  {String} token 사용자 토큰(id 대용)
 *
 * @return {AjaxResult}
 */
INSIGHT.REST.getEventList = function ( token ) {

	var url = INSIGHT.serviceURL + "event?size=1000"
	return _get( url, token );
};

/**
 * 과정 리스트 중, 특정 과정에 대한 상세 정보를 가져오는데 사용됩니다.
 * @param  {String} token       사용자 토큰(id 대용)
 * @param  {Number} eventNumber 특정 과정의 ID 번호
 *
 * @return {AjaxResult}
 */
INSIGHT.REST.getEventDetail = function ( token, eventNumber ) {

	var url = INSIGHT.serviceURL + "event/" + eventNumber;
	return _get( url, token );
};


/**
 * 출석 히스토리를 가져옵니다.
 *
 * @param  {String} token       사용자 토큰(id 대용)
 * @param  {Number} classNumber 특정 과정의 class 번호
 * @param  {String} eventNumber 특정 과정의 event 번호
 * @return {AjaxResult}
 */
INSIGHT.REST.getAttendList = function ( token, eventNumber, classNumber ) {
	//http://13.124.83.168:8080/v2/event/{이벤트번호}/class/{class번호}/check/mylist
	var url = INSIGHT.serviceURL + "event/" + eventNumber + "/class/" + classNumber + "/check/mylist";
	return _get( url, token );
}




/**
 * QR 코드를 이용하여 출석 체크를 시도할 때 이용됩니다.
 *
 * @param  {String} token       사용자 토큰(id 대용)
 * @param  {Number} eventNumber 특정 과정의 ID 번호
 * @param  {String} qrPW        특정 과정의 QR코드 인증 번호
 * @return {AjaxResult}
 */
INSIGHT.REST.attendQRService = function ( token, eventNumber, classNum, qrPW ) {
	var url = INSIGHT.serviceURL + "event/" + eventNumber + "/class/" + classNum + "/checkqr/" + qrPW;
	var data = {};
	return _post( url, token, data );
}

/**
 * 비밀번호를 이용하여 출석 체크를 시도할 때 이용됩니다.
 * @param  {Number} eventNumber 특정 과정의 ID 번호
 * @param  {String} password    특정 과정의 출석 비밀번호
 * @param  {String} token       사용자 토큰(id 대용)
 * @return {AjaxResult}
 */
INSIGHT.REST.attendPWService = function ( eventNumber, password, token ) {

	var url = INSIGHT.serviceURL + "event/" + eventNumber + "/checkpw/" + password;
	var data = {};

	return _post( url, token, data );
}

/**
 * 선택한 과정에 대한 공지사항 리스트를 가져옵니다.
 * @param  {Number} eventNumber 특정 과정의 ID 번호
 * @param  {String} token       사용자 토큰(id 대용)
 * @return {AjaxResult}
 */
INSIGHT.REST.getNoticeService = function ( eventNumber, token ) {

	var url = INSIGHT.serviceURL + "event/" + eventNumber + "/class/all/mobilenotice";
	return _get( url, token );
}

/**
 * 선택한 과정에 대한 공지사항 리스트를 가져옵니다.
 * @param  {Number} eventNumber 특정 과정의 ID 번호
 * @param  {String} token       사용자 토큰(id 대용)
 * @return {AjaxResult}
 */
INSIGHT.REST.getClassNoticeService = function ( eventNumber, token, classNum ) {

	// /v2/event/{행사번호}/class/all/mobilenotice
	///v2/event/{행사번호}/class/{반번호}/webnotice
	var url = INSIGHT.serviceURL + "event/" + eventNumber + "/class/" + classNum + "/webnotice";
	return _get( url, token );
}

/**
 * 사용자의 푸시 수신 허용/비허용 선택 정보를, 서버에 전달합니다.
 * @param  {String} token 사용자 토큰(id 대용)
 * @param  {Number} state 1 or 0. (1:허용, 0:비허용)
 * @return {AjaxResult}
 */
INSIGHT.REST.setInsightPushAllowState = function ( token, state ) {
	var url;
	if ( state === 1 ) {
		url = INSIGHT.serviceURL + "user/push/put/allow";
	} else if ( state === 0 ) {
		url = INSIGHT.serviceURL + "user/push/put/deny";
	}
	var data = {};

	return _post( url, token, data );
}

/**
 * 사용자의 푸시 수신 허용/비허용 상태를 가져옵니다.
 * 앱의 설정 페이지에서, 푸시 수신 허용/비허용 상태를 보여주기 위해 이용됩니다.
 * @param  {String} token 사용자 토큰(id 대용)
 * @return {AjaxResult}
 */
INSIGHT.REST.checkInsightPushAllowState = function ( token ) {
	var url = INSIGHT.serviceURL + "user/push/state";
	return _get( url, token );
}

/**
 * 푸시 알림을 발송하기 위한 사용자 정보를 제거합니다.
 * 로그아웃할 때 호출합니다.
 * @param  {String} token 사용자 토큰(id 대용)
 * @param  {String} uuid  L.message push 기기 ID. LEMP.EDUApp.startLomeoPush() 의 result 값 중 하나입니다.
 * @return {AjaxResult}
 */
INSIGHT.REST.deleteInsightPushInfo = function ( token, uuid ) {
	var url = INSIGHT.serviceURL + "user/push/delete";
	var data = { //서비스 이용에 필요한 정보
		uuid: uuid
	};
	return _post( url, token, data );
}

/**
 * 선택한 과정에 존재하는 모든 설문 리스트를 가져옵니다.
 * @param  {String} token       사용자 토큰(id 대용)
 * @param  {Number} eventNumber 특정 과정의 ID 번호
 * @return {AjaxResult}
 */
//INSIGHT.REST.getSurveyList = function(token, eventNumber) {
//    var url = INSIGHT.serviceURL + "event/" + eventNumber + "/survey";
//	return _get(url,token);
//}

/**
 * 선택한 설문에 대한 설문 상세 내역[질문 내용, 응답 타입]을 가져옵니다.
 * @param  {String} eventNumber    특정 과정의 ID 번호
 * @param  {Number} surveyNumber   특정 설문의 ID 번호
 * @param  {String} token          사용자 토큰(id 대용)
 * @return {AjaxResult}
 */
//INSIGHT.REST.getSurveyDetails = function(eventNumber, surveyNumber, token) {
//    var url = INSIGHT.serviceURL + "event/" + eventNumber + "/survey/" + surveyNumber;
//	return _get(url,token);
//}

/**
 * 사용자가 설문에 대해 응답한 내용을 제출합니다.
 * @param  {String} token        사용자 토큰(id 대용)
 * @param  {Number} eventNumber  특정 과정의 ID 번호
 * @param  {Number} surveyNumber 특정 설문의 ID 번호
 * @param  {Array}  surveyAnswer 사용자의 설문 응답 내용
 * @return {AjaxResult}
 */


//INSIGHT.REST.submitSurveyAnswer = function(token, eventNumber, surveyNumber, surveyAnswer) {
//    var url = INSIGHT.serviceURL + "event/" + eventNumber + "/survey/" + surveyNumber + "/user";
//    var data = surveyAnswer;
//    return _post(url,token,data);
//}

/**
 * 사용자(참여자, 학생 등)가 퀴즈 리모컨에서 정답읍 선택하고, 제출할 때 이용합니다.
 * @param  {Number} eventNumber 특정 과정의 ID 번호
 * @param  {Number} qNum        퀴즈 그룹의 ID 번호
 * @param  {Number} quizNumber  퀴즈 그룹의 실제 퀴즈 ID 번호
 * @param  {String} quizAnswer  사용자가 퀴즈에 대해 입력한 답
 *
 * @return {AjaxResult}
 */
INSIGHT.REST.submitQuizAnswer = function ( eventNumber, qNum, quizNumber, quizAnswer ) {
	// http://127.0.0.1:8080/event/1/quiz/1
	///event/{evnum}/quiz/{qnum}/question/{quenum}/user
	var url = INSIGHT.serviceURL + "event/" + eventNumber + "/quiz/" + qNum + '/question/' + quizNumber;
	return _post( url, token, quizAnswer );
}

/**
 * 퀴즈 그룹 리스트를 요청합니다.
 * @param  {String} token       사용자 토큰(id 대용)
 * @param  {Number} eventNumber 특정 과정의 ID 번호
 * @return {AjaxResult}
 */
INSIGHT.REST.getQuizList = function ( token, eventNumber ) {
	var url = INSIGHT.serviceURL + "event/" + eventNumber + "/quiz";
	return _get( url, token );
}

/**
 * 특정 퀴즈 그룹에 포함된 퀴즈 리스트를 가져옵니다.
 * @param  {String} token       사용자 토큰(id 대용)
 * @param  {Number} eventNumber 특정 과정의 ID 번호
 * @param  {Number} quizNumber  퀴즈 그룹의 ID 번호
 * @return {AjaxResult}
 */
INSIGHT.REST.getQuizDetailList = function ( token, eventNumber, quizNumber ) {
	var url = INSIGHT.serviceURL + "event/" + eventNumber + "/quiz/" + quizNumber + "/mobile";
	return _get( url, token );
}

/**
 * 퀴즈 진행 이력을 관리하기 위해 사용됩니다.
 * 진행자가 특정 퀴즈를 한 번이라도 진행하게 될 때 호출하여,
 * 서버 데이터베이스에서 해당 이력을 관리하게 됩니다.
 * 이러한 진행 이력은 진행자 리모콘에 표출되어서 진행자가 해당 퀴즈를 진행한 적이 있는지 확인하는데 사용됩니다.
 * @param  {Number} eventNumber 특정 과정의 ID 번호
 * @param  {Number} qNum        퀴즈 그룹의 ID 번호
 * @param  {Number} quizNumber  퀴즈 그룹의 ID번호
 * @param  {String} token       사용자 토큰(id 대용)
 * @return {AjaxResult}
 */
INSIGHT.REST.completeQuiz = function ( eventNumber, qNum, quizNumber, token ) {
	var url = INSIGHT.serviceURL + "event/" + eventNumber + "/quiz/" + qNum + '/question/' + quizNumber + '/complete';
	var data = {};


	return _post( url, token, data );
}


//GET - /event/{이벤트번호}/class/{클래스번호}/qna
INSIGHT.REST.getQuestionList = function ( token, eventNumber, classNum, page ) {
	var url = INSIGHT.serviceURL + "event/" + eventNumber + "/class/" + classNum + "/qna?page=" + page + "&size=10&date=desc";
	return _get( url, token );
}


/*
Q&A 등록하기 (POST - /event/{이벤트번호}/class/{클래스번호}/qna
<Request Body>
{
  "content":"잠이 매우매우매우많이 쏟아집니다..."
}

<Response Body>
{
    "code": 200,
    "message": "Success",
    "data": null
}*/

INSIGHT.REST.writeQna = function ( params, eventNumber, classNum, token ) {
	var url = INSIGHT.serviceURL + "event/" + eventNumber + "/class/" + classNum + '/qna';
	var data = params;
	return _post( url, token, data );
}

///Q&A 수정하기 (POST - /event/{이벤트번호}/qna/put/{qna번호}

INSIGHT.REST.modifyQna = function ( params, eventNumber, classNum, qnum, token ) {
	var url = INSIGHT.serviceURL + "event/" + eventNumber +'/qna/put/' + qnum;
	var data = params;
	return _post( url, token, data );
}
//Q&A 삭제하기 (POST - /event/{이벤트번호}/qna/delete/{qna번호 배열}
INSIGHT.REST.deleteQna = function ( eventNumber, qnum, token ) {

	var url = INSIGHT.serviceURL + "event/" + eventNumber + '/qna/delete/' + qnum;
	var data = {};
	return _post( url, token, data );
}

//좋아요 (POST - /event/{이벤트번호}/class/{클래스번호}/qna/{qna번호}/like
INSIGHT.REST.pressLikeButton = function ( eventNumber, classNum, qnum, token ) {

	var url = INSIGHT.serviceURL + "event/" + eventNumber + "/class/" + classNum + '/qna/' + qnum + '/like';
	var data = {};
	return _post( url, token, data );
}


//댓글 가져오기 (GET - /event/{이벤트번호}/qna/{qna번호}/comment


INSIGHT.REST.getQnaCommnets = function ( token, eventNumber, qnum ) {
	var url = INSIGHT.serviceURL + "event/" + eventNumber + "/qna/" + qnum + "/comment";
	return _get( url, token );
}


//댓글 달기 (POST - /event/{이벤트번호}/qna/{qna번호}/comment

INSIGHT.REST.registComment = function ( eventNumber, qnum, token, comment ) {

	var url = INSIGHT.serviceURL + "event/" + eventNumber + '/qna/' + qnum + '/comment';
	return _post( url, token, comment );
}

// 댓글 삭제하기 (POST - /event/{이벤트번호}/qna/{qna번호}/comment/delete/{코멘트번호}

INSIGHT.REST.deleteComment = function ( token, eventNumber, qnum, cnum ) {

	var url = INSIGHT.serviceURL + "event/" + eventNumber + '/qna/' + qnum + '/comment/delete/' + cnum;
	var data = {};
	return _post( url, token, data );
}


///event/{id}/classname

INSIGHT.REST.getClassList = function ( token, eventNumber ) {
	var url = INSIGHT.serviceURL + "event/" + eventNumber + "/classname";
	return _get( url, token );
}

//전체용 퀴즈 리스트 가져오기 (GET - /event/{이벤트번호}/class/all/mobilequiz)

INSIGHT.REST.getAllQuizList = function ( token, eventNumber ) {
	var url = INSIGHT.serviceURL + "event/" + eventNumber + "/class/all/mobilequiz";
	return _get( url, token );
}


//반용  퀴즈 리스트 가져오기 GET (event/{이벤트번호/class/{클래스번호}/quiz}

INSIGHT.REST.getClassQuizList = function ( token, eventNumber, classNumber ) {
	var url = INSIGHT.serviceURL + "event/" + eventNumber + "/class/" + classNumber + "/quiz";
	return _get( url, token );
}

//퀴즈 상세 가져오기 (GET - /event/{이벤트번호}/quiz/{퀴즈번호})


INSIGHT.REST.getQuizDetails = function ( token, eventNumber, quizNumber ) {
	var url = INSIGHT.serviceURL + "event/" + eventNumber + "/quiz/" + quizNumber;
	return _get( url, token );
}

//3.     행사 설문 리스트 가져오기 (GET - /event/{이벤트번호}/class/all/survey)
INSIGHT.REST.getSurveyListAll = function ( token, eventNumber ) {
	var url = INSIGHT.serviceURL + "event/" + eventNumber + "/class/all/survey";
	return _get( url, token );
}

//반 설문 리스트 가져오기 (GET - /event/{이벤트번호}/class/{클래스번호}/survey}

INSIGHT.REST.getSurveyListClass = function ( token, eventNumber, classNumber ) {
	var url = INSIGHT.serviceURL + "event/" + eventNumber + "/class/" + classNumber + "/survey";
	return _get( url, token );
}

//5.     설문 상세 가져오기 (GET - /event/{이벤트번호}/survey/{설문번호})
INSIGHT.REST.getSurveyDetail = function ( token, eventNumber, surveyNumber ) {
	var url = INSIGHT.serviceURL + "event/" + eventNumber + "/survey/" + surveyNumber;
	return _get( url, token );
}

/// (POST - /event/{이벤트번호}/survey/{설문번호}
INSIGHT.REST.postSurveyAnswers = function ( token, eventNumber, surveyNumber, data ) {

	var url = INSIGHT.serviceURL + "event/" + eventNumber + '/survey/' + surveyNumber;

	return _post( url, token, data );
}


function _get( url, token ) {
	var obj = new Object();
	$.ajax( {
		url: url,
		type: "GET",
		async: false,
		contentType: "application/json",
		headers: {
			"x-auth-token": token
		}
	} ).done( function ( data ) {
		obj = data;
		obj.customStatus = "success";
	} ).fail( function ( data ) {
		obj = data;
		obj.customStatus = "failed";
	} ).always( function () {
		console.log( obj );
	} );
	return obj;
}

function _post( url, token, data ) {
	var result = new Object();

	$.ajax( {
		url: url,
		type: "POST",
		async: false,
		data: JSON.stringify( data ),
		contentType: "application/json",
		headers: {
			"x-auth-token": token
		}
	} ).done( function ( res ) {
		console.log( res );
		res.customStatus = "success";
		result = res;

	} ).fail( function ( resFail ) {
		result = resFail;
		if ( resFail.status === 200 ) {
			result.customStatus = "success";
		} else {
			result.customStatus = "failed";
		}
	} ).always( function () {
		console.log( result );
	} );
	return result;
}