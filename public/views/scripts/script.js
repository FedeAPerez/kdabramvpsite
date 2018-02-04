
$(document).ready(function(){
	$("a.scrollSection").click(function() {
	    var targetSection = $(this).attr('href');
	    $('html, body').animate({
	        scrollTop: $(targetSection).offset().top
	    }, 1000);
	});

	$("#enviar").click(function (){
		$("#enviar").addClass("buttonSending");

			var nombre  = $("#nombre").val();
			var empresa = $("#empresa").val();
			var plan 	= $("#plan").val();
			var email 	= $("#email").val();
			var mensaje = $("#mensaje").val();
			var formTested = $("#form").val();

			var sendInfo = {
				Nombre: nombre,
				Empresa: empresa,
				Plan: plan,
				Email: email,
				Mensaje: mensaje,
				Test: formTested
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
