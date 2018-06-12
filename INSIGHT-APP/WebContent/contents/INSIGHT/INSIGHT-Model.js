/**
 * @class
 * @description 이클데이터를 필요 양식에 따라 적절히 변환한 후 반환합니다.
 * @version v1.0.3
 * @author aboutdh89@lotte.net, 정보기술연구소 솔루션연구팀 오동환
 * @logs "날짜 : [작업자] 내용"
 */
INSIGHT.Model = new Object();

/**
 * 날짜를 배열 형태로 변환합니다.
 * @param  {String} date [description]
 * @return {Array}      ["YYYY","MM","DD","hh:mm","일or월or화or수or목or금or토"]
 */
INSIGHT.Model.dateConversionService = function(date) {
    var dateAndTime = date.split(" ");
    var arr = dateAndTime[0].split("-");
    var week = [
        '일',
        '월',
        '화',
        '수',
        '목',
        '금',
        '토'
    ];
    var dayOfWeek = week[new Date(dateAndTime[0]).getDay()];
    arr[3] = dateAndTime[1];
    arr[4] = dayOfWeek;

    return arr;
};

/**
 * 날짜를 출석 가능 시간만 추출하여 반환합니다.
 * @param  {String} attendTime 출석 시작 시간
 * @param  {String} attendTerm 출석 마감 기한
 * @return {String}            HH:mm
 */
INSIGHT.Model.getAllowedAttendTime = function(attendTime, attendTerm) {
    attendTime = attendTime.split(':');
    attendTerm = attendTerm.split(':');
    var allowedAttendMinute = parseInt(attendTime[1]) + parseInt(attendTerm[1]);
    var allowedAttendHour = parseInt(attendTime[0]) + parseInt(attendTerm[0]);
    if (allowedAttendMinute >= 60) {
        allowedAttendHour += 1;
        allowedAttendMinute -= 60;
    }
    var allowdAttendTime = allowedAttendHour + ":" + allowedAttendMinute;
    return allowdAttendTime;
};

/**
 * 서버에서 받아온 설문 관련 날짜 형식(시작날짜, 종료날짜)을 비교하여,
 * <br>설문 가능한 날짜인지, 언제 설문이 가능한지 판단합니다.
 * @param  {Date} startDate 해당 설문의 시작 날짜 (ex: 2018-01-06/20:30)
 * @param  {Date} endDate   해당 설문의 종료 날짜 (ex: 2018-01-07/20:30)
 *
 * @return {Array} ["status","00일00시00분"]
 * <br> array.0 설문 가능 상태가 담깁니다. ("notYet":아직 설문 불가, "closed":종료된 설문, "onGoing":응답가능한 진행중인 설문)
 * <br> array.1 얼마 후 설문이 가능한지, 또는 언제까지 가능한지 String인 "00일00시00분" 형태로 담깁니다.
 */
INSIGHT.Model.compareSurveyTime = function(startDate, endDate) {
    var surveyStartInfo = INSIGHT.Model.dateConversionService(startDate);
    var surveyEndInfo = INSIGHT.Model.dateConversionService(endDate);

    var todayDateCompare = new Date();
    var startDateCompare = new Date(surveyStartInfo[0], parseInt(surveyStartInfo[1]) - 1, surveyStartInfo[2], surveyStartInfo[3].split(":")[0], surveyStartInfo[3].split(":")[1]);
    var endDateCompare = new Date(surveyEndInfo[0], parseInt(surveyEndInfo[1]) - 1, surveyEndInfo[2], surveyEndInfo[3].split(":")[0], surveyEndInfo[3].split(":")[1]);

    var result = [];
    var msecPerMinute = 1000 * 60;
    var msecPerHour = msecPerMinute * 60;
    var msecPerDay = msecPerHour * 24;

    if (startDateCompare.getTime() > todayDateCompare.getTime()) {
        // Get the difference in milliseconds.
        var interval = startDateCompare.getTime() - todayDateCompare.getTime();

        var days = Math.floor(interval / msecPerDay);
        interval = interval - (days * msecPerDay);

        // Calculate the hours, minutes, and seconds.
        var hours = Math.floor(interval / msecPerHour);
        interval = interval - (hours * msecPerHour);

        var minutes = Math.floor(interval / msecPerMinute);
        interval = interval - (minutes * msecPerMinute);
        result[0] = 'notYet';
        result[1] = days + "일 " + hours + "시 " + minutes + "분";

    } else if (todayDateCompare.getTime() > endDateCompare.getTime()) { //기간 지남
        result[0] = 'closed';
    } else {

        var interval = endDateCompare.getTime() - todayDateCompare.getTime();

        var days = Math.floor(interval / msecPerDay);
        interval = interval - (days * msecPerDay);

        // Calculate the hours, minutes, and seconds.
        var hours = Math.floor(interval / msecPerHour);
        interval = interval - (hours * msecPerHour);

        var minutes = Math.floor(interval / msecPerMinute);
        interval = interval - (minutes * msecPerMinute);
        result[0] = 'onGoing';
        result[1] = days + "일 " + hours + "시 " + minutes + "분";
    }
    return result;
};
