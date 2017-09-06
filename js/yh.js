$(function() {
	$(".topnav ul li").click(function() {
		$(".topnav ul li").removeClass("active")
		$(this).addClass("active");
	});
});