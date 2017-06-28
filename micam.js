$(document).ready(function() {
	var video = document.getElementById('camara');
	

	navigator.getUserMedia = 	navigator.getUserMedia ||
	                            navigator.webkitGetUserMedia ||
	                            navigator.mozGetUserMedia || 
	                            navigator.msGetUserMedia;

	navigator.getUserMedia({ 
		video: true, 
		audio: false 
		},

		function(stream){
			if (navigator.mozGetUserMedia){
				camara.mozSrcObject = stream;
			}
            else{
                var	vandorUrl = window.URL || window.webkitURL;
                camara.src = vandorUrl.createObjectURL(stream);
            }
			camara.play();
		},

		function(error){
			console.log("Ocurrió el siguiente error: " + err);
		}

	);
    
    var horas = ["0:30hrs","1:00hrs","1:30hrs","2:00hrs","2:30hrs","3:00hrs"];
    var precio = ["$10.00","$20.00","$30.00","$40.00","$50.00","$60.00"];
    
    $(document).keypress(function(){
        var r=Math.floor(Math.random()*horas.length);
        $("#pago").attr("src","pagariconverde.png");
        $("#reloj").attr("src","relojiconverde.png");
        $("#miHora").text(horas[r]);
        $("#miPago").text(precio[r]);
        $("#texto").css("color","#8fff16");
        $("#qrcode").css("opacity","1");
        $("#pagar").css("opacity","1");
        $("#pagar").css("cursor","pointer");
    });

    $("#pagar").click(function(){
        alert("Tu pago fue realizado exitosamente. Tienes 15 mins para salir.");
        $("#pago").attr("src","pagaricon.png");
        $("#reloj").attr("src","relojicon.png");
        $("#miHora").text("0:00hrs");
        $("#miPago").text("$0.00");
        $("#texto").css("color","white");
        $("#qrcode").css("opacity","0");
        $("#pagar").css("opacity",".2");
        $("#pagar").css("cursor","auto");
    });
    
});