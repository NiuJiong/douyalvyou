$(function(){
	$(".topnav ul li").click(function() {
		$(".topnav ul li").removeClass("active")
		$(this).addClass("active");
	});
	
	
	
	//回到顶部
	
	$(".totop").click(function(){
		$("body").animate({
			"scrollTop":0
		},300);
	});
	
});




