var page = {
		init : function(){
			page.initInterface();
		},
		initInterface :function(){
			
			$(".pg-button").click(function(){
				LEMP.Window.close({
					"_sType":"popup"
				})
			})
		}
}