$(function(){
	
	var liwidth = $(".content div:eq(0) ul li").width();
	var lilength = $(".content div:eq(0) ul li").length;
	var limargin = parseInt($(".content div:eq(0) ul li").css("marginLeft"))*2;
	
	var ulwidth = (liwidth+limargin) * lilength;
	
	$($(".content div:eq(0) ul").width(ulwidth));
	
	$(".content div:eq(0) ul li").click(function(){
		$(".content div:eq(0) ul li").removeClass("active");
		$(this).addClass("active");
	});
	
	
	
	
	
});
