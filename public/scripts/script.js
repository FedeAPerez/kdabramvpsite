$(document).ready(function(){
	alert("llego a js");
	$("#idBtnStart").click(function (){
		$('html, body').animate({
			alert("estoy ejecutando");
        	scrollTop: $("#content").offset().top;
    	}, 1500);
	});
});
