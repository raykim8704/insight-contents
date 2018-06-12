/**
 *
 * @class
 * @classdesc Insight Client 개발을 위해 확장된,LEMP API 집합 입니다
 * @extends LEMP
 *
 */
LEMP.EDUApp = new Object();

/**
 * @description 현재의 GPS 정보와, 목표 좌표, 목표 범위 입력 받아 현재의 위치가 목표 반경 안에 존재 하는지 확인 합니다.
 * @param  {Number} _nlatitude  현재 위도
 * @param  {Number} _nlongitude 현재 경도
 * @param  {Number} _ntargetlat 목표 위도
 * @param  {Number} _ntargetlong 목표 경도
 * @param  {Number} _ndistance 목표 반경
 * @param  {Function} _fCallback 결과 값 반환 후 실행될 함수
 */
LEMP.EDUApp.GPSCheck = function(_nlatitude_nlongitude_ntargetlat_ntargetlong_ndistance_fCallback) {
    var required = new Array("_nlatitude", "_nlongitude", "_ntargetlat", "_ntargetlong", "_ndistance", "_fCallback");
    if (!LEMPCore.Module.checkparam(arguments[0], required)) {
        return;
    }
    LEMPCore.EDUApp.GPSCheck(arguments[0]);
};

/**
 * @description 사용자 및 디바이스의 정보를 입력 받아 Lomeo push 서비스에 등록합니다.
 * @param  {Number} _scustno 사용자의 고객번호
 * @param {Number} _suuid wave 프레임 워크에서 생성한 uuid
 * @param  {Function} _fCallback 결과 값 반환 후 실행될 함수
 */
LEMP.EDUApp.registPushInfo = function(_scustno_suuid_fCallback) {
    var required = new Array("_scustno", "_suuid", "_fCallback");
    if (!LEMPCore.Module.checkparam(arguments[0], required)) {
        return;
    }
    LEMPCore.EDUApp.registPushInfo(arguments[0]);

}

/**
 * @description 사용자 및 디바이스의 정보를 입력 받아 Lomeo push 서비스를 시작합니다.
 * @param  {Number} _scustno 사용자의 고객번호
 * @param {Number} _sagentid Lomeo 서비스에서 발행한 agentId
 * @param {Number} _sserverurl Lemeo 서버 url
 * @param {Number} _spackagename Lomeo서비스에 등록된 패키지 네임
 * @param  {Function} _fCallback 결과 값 반환 후 실행될 함수
 */
LEMP.EDUApp.startLomeoPush = function(_scustno_sagentid__sserverurl_spackagename_fCallback) {
    var required = new Array("_scustno", "_sagentid", "_sserverurl", "_spackagename", "_fCallback");
    if (!LEMPCore.Module.checkparam(arguments[0], required)) {
        return;
    }
    LEMPCore.EDUApp.startLomeoPush(arguments[0]);

}

/**
 * @description 사용자 및 디바이스의 정보를 입력 받아 Lomeo push 서비스를 종료합니다.
 * @param  {Function} _fCallback 결과 값 반환 후 실행될 함수
 */
LEMP.EDUApp.stopLomeoPush = function(_fCallback) {
    var required = new Array("_fCallback");
    if (!LEMPCore.Module.checkparam(arguments[0], required)) {
        return;
    }
    LEMPCore.EDUApp.stopLomeoPush(arguments[0]);
}

/**
 * @description Lomeo서비스로 부터 Custno를 가져 옵니다
 * @param  {Function} _fCallback 결과 값 반환 후 실행될 함수
 */
LEMP.EDUApp.getLomeoCustno = function(_fCallback) {
    var required = new Array("_fCallback");
    if (!LEMPCore.Module.checkparam(arguments[0], required)) {
        return;
    }
    LEMPCore.EDUApp.getLomeoCustno(arguments[0]);

}

/**
 * @description Lomeo서비스로 부터 UUID를 가져 옵니다
 * @param  {Function} _fCallback 결과 값 반환 후 실행될 함수
 */
LEMP.EDUApp.getLomeoUuid = function(_fCallback) {
    var required = new Array("_fCallback");
    if (!LEMPCore.Module.checkparam(arguments[0], required)) {
        return;
    }
    return LEMPCore.EDUApp.getLomeoUuid(arguments[0]);
}

/**
 * @description PDF뷰어를 생성하고 입력한 경로의 내용을 표시합니다.
 * @param  {String}  _ssev_url 파일이 존재하는 서버 userList
 * @param  {String}  _spdf_file 서버 context
 * @param  {String}  _spdf_file_path 파일 명
 * @param  {Function} _fCallback 결과 값 반환 후 실행될 함수
 */
LEMP.EDUApp.showPDF = function(_ssev_url_spdf_file_path_spdf_file_fCallback) {
    var required = new Array("_ssev_url", "_spdf_file_path", "_spdf_file", "_fCallback");
    if (!LEMPCore.Module.checkparam(arguments[0], required)) {
        return;
    }
    LEMPCore.EDUApp.showPDF(arguments[0]);

}

LEMPCore.EDUApp = new Object();

LEMPCore.EDUApp.servicename = "EDUApp";

LEMPCore.EDUApp.GPSCheck = function() {

    var action = "GPSCheck";
    var callback = LEMPCore.CallbackManager.save(arguments[0]._fCallback);

    var tr = {
        "id": "GPSCHECK",
        "param": {
            "latitude": arguments[0]._nlatitude,
            "longitude": arguments[0]._nlongitude,
            "targetlat": arguments[0]._ntargetlat,
            "targetlong": arguments[0]._ntargetlong,
            "distance": arguments[0]._ndistance,
            "callback": callback

        }
    };

    LEMPCore.Module.gateway(tr, this.servicename, action);
};

LEMPCore.EDUApp.registPushInfo = function() {

    var action = "registPushInfo";
    var callback = LEMPCore.CallbackManager.save(arguments[0]._fCallback);

    var tr = {
        "id": "REGISTPUSH",
        "param": {
            "custno": arguments[0]._scustno,
            "uuid": arguments[0]._suuid,
            "callback": callback
        }
    };

    LEMPCore.Module.gateway(tr, this.servicename, action);
};

LEMPCore.EDUApp.startLomeoPush = function() {

    var action = "StartPush";
    var callback = LEMPCore.CallbackManager.save(arguments[0]._fCallback);

    var tr = {
        "id": "LOMEO_PUSH_START",
        "param": {
            "custNo": arguments[0]._scustno,
            "agentId": arguments[0]._sagentid,
            "serverUrl": arguments[0]._sserverurl,
            "packagename": arguments[0]._spackagename,
            "callback": callback
        }
    };

    LEMPCore.Module.gateway(tr, this.servicename, action);
};

LEMPCore.EDUApp.stopLomeoPush = function() {

    var action = "StopPush";
    var callback = LEMPCore.CallbackManager.save(arguments[0]._fCallback);

    var tr = {
        "id": "LOMEO_PUSH_STOP",
        "param": {
            "callback": callback
        }
    };

    LEMPCore.Module.gateway(tr, this.servicename, action);
};

LEMPCore.EDUApp.getLomeoCustno = function() {

    var action = "getLomeoCustno";
    var callback = LEMPCore.CallbackManager.save(arguments[0]._fCallback);

    var tr = {
        "id": "LOMEO_PUSH_GET_CUST_NO",
        "param": {
            "callback": callback
        }
    };

    LEMPCore.Module.gateway(tr, this.servicename, action);
};

LEMPCore.EDUApp.getLomeoUuid = function() {

    var action = "getLomeoUuid";
    var callback = LEMPCore.CallbackManager.save(arguments[0]._fCallback);

    var tr = {
        "id": "LOMEO_PUSH_GET_UUID",
        "param": {
            "callback": callback
        }
    };

    LEMPCore.Module.gateway(tr, this.servicename, action);
};

/**
 * @function
 * @name openBoardFromPush
 * @description 푸시를 통해 앱을 열었을 경우 공지사항 페이지로 연결하는 함수
 * @param  {Object} eventNumber [푸시를 통해 앱을 열었을 경우 전달되는 JSON]
 */
var openBoardFromPush = function(eventNumber) {

    var evnum;

    if (eventNumber.data.popup_image) {
        var temp = eventNumber.data.popup_image;
        evnum = temp.split(":")[1];
    } else {
        evnum = eventNumber.data.evnum;
    }
    
	var autoLogin = LEMP.Properties.get({
		"_sKey" : "autoLoginState"
	});
	
	autoLogin ? 
    LEMP.Window.open({
        "_sPagePath": "BRD/html/BRD1000.html",
        "_sName": "Board",
        "_oMessage": {
            "evnum": evnum
        }
    }) :
    LEMP.Window.open({
        "_sPagePath": "LGN/html/LGN1000.html"
    })
};

LEMP.addEvent("push", "openBoardFromPush");

LEMP.EDUApp.openAlertPopup = function(message,callback) {
    LEMP.EDUApp.showProgressBar(false);

    LEMP.Window.open({
        "_sPagePath": "ALR/html/ALR0001.html",
        "_sType": "popup",
        "_sWidth": "80%",
        "_sHeight": "50%",

        "_oMessage": {
            "param": message,
            "callback":callback
        }
    });
}

LEMP.EDUApp.errorService = function(data, serviceName) {
    var result = true;
    if (data.status === 403) {
        LEMP.Properties.remove({"_sKey": "token"});
        LEMP.Properties.remove({"_sKey": "authority"});
        LEMP.Properties.remove({"_sKey": "unum"});
        LEMP.Properties.remove({"_sKey": "userID"});
        LEMP.Properties.remove({"_sKey": "userPw"});

        LEMP.Window.open({"_sPagePath": "LGN/html/LGN0001.html"});
    } else if (data.customStatus === "failed") {
        LEMP.EDUApp.openAlertPopup("네트워크 또는 서버 상태로 인해 " + serviceName + "을(를) 처리하는데 실패하였습니다. 잠시 후 재시도 해주세요.")
    } else {
        result = false;
    }
    return result;
}

LEMP.EDUApp.showProgressBar = function(status) {
    if (status) {
        $('body').append($('<div/>', {class: 'loader-table'}));
        $('.loader-table').append($('<div/>', {class: 'loader-progress'}));
    } else {
        $('.loader-table').remove();
    }
}

LEMP.EDUApp.getTodayDate = function() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = mm + "/" + dd + "/" + yyyy;

    return today;
}

LEMPCore.EDUApp.showPDF = function() {

    var action = "SHOW_PDF";
    var callback = LEMPCore.CallbackManager.save(arguments[0]._fCallback);

    var tr = {
        "id": "SHOW_PDF",
        "param": {
            "sev_url": arguments[0]._ssev_url,
            "pdf_file_path": arguments[0]._spdf_file_path,
            "pdf_file": arguments[0]._spdf_file,
            "callback": callback
        }
    };
    LEMPCore.Module.gateway(tr, this.servicename, action);
};

/**** 공통 함수 ****/

/**
 * @description 입력한 dom 위치에 행사 위치와 사용자 좌표의 위치를 표시하고, 마커와 반경을 생성 합니다.
 * @param  {Double}  _dlatitude 행사 좌표의 위도
 * @param  {Double}  _dlongitude 행사 좌표의 경도
 * @param  {String}  dom 지도를 그릴 dom의 이름
 * @param  {Double}  _duserLatitude 사용자 자표의 위도
 * @param  {Double}  _duserLongitude 사용자 좌표의 경도
 * @param  {Number}  distance 행사 지점의 반경
 */
//위치 좌표에 대해 지도에 그려줍니다.
LEMP.EDUApp.drawMap = function(_dlatitude, _dlongitude, dom, _duserLatitude, _duserLongitude, distance) {
    var myNode = document.getElementById(dom);
    var atd_map;
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    if (_dlatitude == 0 && _dlongitude == 0) {

        $("#atd_map").load('DTI0011.html');

        return;
    } else {
        daum.maps.load(function() {

            var atd_container = document.getElementById(dom); //지도를 담을 영역의 DOM 레퍼런스
            var atd_options = { //지도를 생성할 때 필요한 기본 옵션
                center: new daum.maps.LatLng(_dlatitude, _dlongitude), //지도의 중심좌표.
                level: 5 //지도의 레벨(확대, 축소 정도)
            };
            atd_map = new daum.maps.Map(atd_container, atd_options); //지도 생성 및 객체 리턴

            if (_duserLatitude != null && _duserLongitude != null) {
                var circle = new daum.maps.Circle({
                    center: new daum.maps.LatLng(_dlatitude, _dlongitude), // 원의 중심좌표 입니다
                    radius: distance, // 미터 단위의 원의 반지름입니다
                    strokeWeight: 5, // 선의 두께입니다
                    strokeColor: '#75B8FA', // 선의 색깔입니다
                    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                    strokeStyle: 'dashed', // 선의 스타일 입니다
                    fillColor: '#CFE7FF', // 채우기 색깔입니다
                    fillOpacity: 0.7 // 채우기 불투명도 입니다
                });

                // 지도에 원을 표시합니다
                circle.setMap(atd_map);

                // 마커 이미지의 이미지 크기 입니다
                // 마커 이미지의 이미지 주소입니다
                var myImageSrc = "../../LEMP/common/images/myMarker.png";
                var myImageSize = new daum.maps.Size(35, 35);

                // 마커 이미지를 생성합니다
                var myMarkerImage = new daum.maps.MarkerImage(myImageSrc, myImageSize);

                // 마커를 생성합니다
                var myMarker = new daum.maps.Marker({
                    map: atd_map, // 마커를 표시할 지도
                    position: new daum.maps.LatLng(_duserLatitude, _duserLongitude), // 마커를 표시할 위치
                    image: myMarkerImage // 마커 이미지
                });
                var iwContent = '<div style="padding:5px; width:152px; text-align:center;">내 위치</div>'
                var infowindow = new daum.maps.InfoWindow({
                    position: new daum.maps.LatLng(_duserLatitude, _duserLongitude),
                    content: iwContent,
                    removable: false
                });
                infowindow.open(atd_map, myMarker);
            }

            var markerPosition = new daum.maps.LatLng(_dlatitude, _dlongitude);
            var tImageSrc = "../../LEMP/common/images/targetMarker.png";
            var tImageSize = new daum.maps.Size(40, 40);

            // 마커 이미지를 생성합니다
            var tMarkerImage = new daum.maps.MarkerImage(tImageSrc, tImageSize);
            // 마커를 생성합니다
            var marker = new daum.maps.Marker({position: markerPosition, map: atd_map, image: tMarkerImage});

            var iwContent = '<div style="padding:5px; width:152px; text-align:center;">진행 장소</div>'
            var infowindow = new daum.maps.InfoWindow({position: markerPosition, content: iwContent, removable: false});
            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(atd_map);
            infowindow.open(atd_map, marker);
            //
            if (_duserLatitude != null && _duserLongitude != null) {
                var points = [
                    new daum.maps.LatLng(_duserLatitude, _duserLongitude),
                    new daum.maps.LatLng(_dlatitude, _dlongitude)
                ];

                var bounds = new daum.maps.LatLngBounds();
                bounds.extend(points[0]);
                bounds.extend(points[1]);
                atd_map.setBounds(bounds);

                // 지도에 표시할 선을 생성합니다
                var polyline = new daum.maps.Polyline({
                    path: points, // 선을 구성하는 좌표배열 입니다
                    strokeWeight: 3, // 선의 두께 입니다
                    strokeColor: '#db4040', // 선의 색깔입니다
                    strokeOpacity: 0.5, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                    strokeStyle: 'solid' // 선의 스타일입니다
                });

                // 지도에 선을 표시합니다
                polyline.setMap(atd_map);

                if (polyline.getLength() < 1001) {
                    atd_map.setLevel(5);
                }
            }
        })
    }
};


/**
 * @description 요청한 데이터가 없을경우, 사용자 화면에 데이터 없음을 그리는 함수
 * @param {String} targetDom 표시하고자 하는 dom의 class 또는 id
 * @param {String} comment 표시하고자 하는 문구
 * @param {String} option (nullable)특정 동작을 수행하기 위한 flag
 */
LEMP.EDUApp.drawEmptyBox = function(targetDom,comment, option){
  if(option!=null){
      if (option==='agenda'){
          $(targetDom).append($('<div/>', {
              class: 'empty-box no-agenda'
          }));
          $(targetDom).children('.empty-box').append($('<div/>',{
            class:'iu-floating-image empty-img no-agenda',
            id:'empty-img'
          }))
      }
  }else{
    // $(targetDom).removeChild(targetDom.firstChild);

      $(targetDom).append($('<div/>', {
          class: 'empty-box'
      }));
      $(targetDom).children('.empty-box').append($('<div/>',{
        class:'iu-floating-image empty-img',
        id:'empty-img'
      }))
  }

  $(targetDom).children('.empty-box').append($('<div/>',{
    class : 'iu-box empty-text-box',
    id: 'empty-text-box'
  }))
  $(targetDom).children('.empty-box').children('.empty-text-box').append($('<div/>',{
    class : 'iu-text empty-text',
    id : 'empty-text'
  }))
  $(targetDom).children('.empty-box').children('.empty-text-box').children('.empty-text').append($('<p/>',{})).append($('<span/>',{
    text :comment
  }));
};
