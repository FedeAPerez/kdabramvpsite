
$(document).ready(function(){
	$("#idBtnStart").click(function (){
		$('html, body').animate({
        	scrollTop: $("#content").offset().top
    	}, 700);
	});
});
