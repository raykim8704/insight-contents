/**
 * @class
 */
INSIGHT = new Object();

(function(){

	var CURRENT_PATH = location.pathname;
	var PATH_DEPTH = CURRENT_PATH.split("/");
	var PATHARR_IDX=PATH_DEPTH.length-2;
	var RELATE_DEPTH = "";

	for(var i=PATHARR_IDX; i > 0;i--){
		if(PATH_DEPTH[i] != "contents"){
			RELATE_DEPTH += "../";
		}else{
			break;
		}
	}

	var jsUrls = new Array(
		//"INSIGHT/INSIGHT-firebaseUtil.js",
		"INSIGHT/INSIGHT-Model.js",
	 	"INSIGHT/INSIGHT-REST.js"
	);

	var JsList="";

  //document.write("<script src=\"https://www.gstatic.com/firebasejs/3.6.2/firebase.js\"></script>");
	for(var i=0;i<jsUrls.length;i++)
	{
		 if(/jquery|core/.test( jsUrls[i] )){
			 document.write("<script type=\"text/javascript\" src=\""+ RELATE_DEPTH + jsUrls[i] + "\" charset=\"utf-8\"></script>");
		   }else{
			   JsList +=	"<script type=\"text/javascript\" src=\""+ RELATE_DEPTH + jsUrls[i] + "\" charset=\"utf-8\"></script>";
		   }
	}
	document.write(JsList);


})();
