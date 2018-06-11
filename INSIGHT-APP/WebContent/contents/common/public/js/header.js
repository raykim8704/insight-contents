////페이지 경로 READ
//console.log(window.location.pathname);
//var pathName = window.location.pathname;			// /contents/MGL/html/MGL0001.html
//var pageName = pathName.split('/contents/')[1].split('/')[0];    // MGL
//var pageLastUrl = pathName.split('/').pop();	// MGL0001.html
//var pageNameFull = pageLastUrl.split('.')[0];	// MG
//
//$('#back_btn').click(function() {
//	console.log("bacnbtn");
//	if((pageNameFull == "TGL0001") || (pageNameFull == "MGL0001") || (pageNameFull == "CRD0001") || (pageNameFull == "SRD0001")
//			|| (pageNameFull == "SCH0001") || (pageNameFull == "TRD0001") || ((pageNameFull == "MGL0002") && (main == "MAN0002")) || (pageNameFull == "MTT0001")){				
//		if(main == "MAN0001"){
//			LEMP.Window.open({
//				"_sPagePath" : "MAN/html/MAN0001.html"
//			});					
//		} else if(main == "MAN0002"){					
//			LEMP.Window.open({
//				"_sPagePath" : "MAN/html/MAN0002.html"
//			});					
//		}				
//	} else {				
//		LEMP.Window.back({
//			"_nStep" : -1
//		});				
//	}
//});