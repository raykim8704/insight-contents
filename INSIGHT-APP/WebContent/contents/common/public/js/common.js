function nowDate8() {
	var now = new Date();
	var yyyy = now.getFullYear();
	var mm = now.getMonth() + 1; // 1월은 0이므로 +1 해줌.
	var dd = now.getDate();
	if(mm < 10) {
	    mm = "0" + mm;
	} 
	if(dd < 10) {
	    dd = "0" + dd;
	}
	
	return yyyy+mm+dd;
}

function date10ToDate8(date10) {
	return date10.substring(0, 4) + date10.substring(5, 7) + date10.substring(8, 10);
}

function date8ToDate10(date8) {
	return date8.substring(0, 4) + '-' + date8.substring(4, 6) + '-' + date8.substring(6, 8);
}

function date8ToDate8(date8) {
	return date8.substring(0, 4) + '.' + date8.substring(4, 6) + '.' + date8.substring(6, 8);
}

function time4ToTime8(time4) {
	return time4.substring(0, 2) + ':' + time4.substring(2, 4) + ':00';
}

function time4ToTime5(time4) {
	return time4.substring(0, 2) + ':' + time4.substring(2, 4);
}

function time5ToTime4(time5) {
	return time5.substring(0, 2) + time5.substring(3, 5);
}

function resetRate(starId) {
	
	$("#"+starId).rateYo("rating", 0);
	$("#"+starId).next().text(0);
	
}