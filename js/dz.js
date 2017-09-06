$(function() {

	console.log($("form .cradd li:eq(0)"));

	$("form .cradd li:eq(0)").on("tap", function() {
		var ht = $("form .cradd li:eq(1)");
		console.log($(this));
	});

});

$(document).on("pagecreate", "#pageone", function() {
	console.log($("form .cradd li:eq(0)"));

	$("form .cradd li:eq(0)").on("tap", function() {
		var ht = $("form .cradd li:eq(1)");
		alert($(this));
	});
});