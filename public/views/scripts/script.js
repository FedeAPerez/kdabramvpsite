
$(document).ready(function(){
	$("a.page-scroll").click(function() {
	    var targetDiv = $(this).attr('href');
	    $('html, body').animate({
	        scrollTop: $(targetDiv).offset().top
	    }, 1000);
	});

	$("#enviar").click(function (){
		$("#enviar").addClass("buttonSending");

			var nombre  = $("#nombre").val();
			var empresa = $("#empresa").val();
			var plan 	= $("#plan").val();
			var email 	= $("#email").val();
			var mensaje = $("#mensaje").val();

			var sendInfo = {
				Nombre: nombre,
				Empresa: empresa,
				Plan: plan,
				Email: email,
				Mensaje: mensaje
			};
			$.ajax({
				type: "POST",
				url: "http://localhost:8000/contact",
				dataType: "json",
				success: function (msg) {
					if (msg) {
						alert("Somebody was added in list !");
					} else {
						alert("Cannot add to list !");
					}
				},
				data: sendInfo
			});

	});
});
