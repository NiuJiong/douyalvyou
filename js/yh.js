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
	
	
	
//	当地旅游点击样式
	$(".xiangqingclick ul li").click(function(){
		$(".xiangqingclick ul li .ddclick").removeClass("active");
		$(this).find(".ddclick").addClass("active");
	});
	
//首页点击样式
	$(".yinyclick").click(function(){
		$(".dwac").removeClass("active");
		$(this).find(".dwac").addClass("active");
	});
	
	
//	评分
	$(".chrome i").click(function(){
		
		var index = $(this).index();
		$(".chrome i").removeClass("active");
		for(var j=0;j<=index;j++){
			$(".chrome i:eq("+j+")").addClass("active");
		}
	});
	
	
	
});




