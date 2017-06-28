
$(document).ready(function() {
	var title = $('#title').text();
	var fontSizeTitle = 70; 
	var fontSize = 25;
	var windowWidth= $(window).width();
	var windowHeigth = $(window).height();
	var elemento = document.getElementById('lbl-oc');
	var posicion = elemento.getBoundingClientRect();
	/*var elemento = document.getElementById('circulos');
	var posicion = elemento.getBoundingClientRect();
	$("#circulos").css("height",windowHeigth-posicion.top);*/

	if(windowWidth<1349){
		$("#title").css("font-size",((windowWidth*fontSizeTitle/1349)+20)+"px");
		$("#lbl-dis").css("font-size",((windowWidth*fontSize/1349)+8)+"px");
		$("#lbl-oc").css("font-size",((windowWidth*fontSize/1349)+8)+"px");
	}
});

/*var elCanvas = document.getElementById("circulos");
		if (elCanvas && elCanvas.getContext) {
		var context = elCanvas.getContext("2d");
			if (context) {
					var X = elCanvas.width/2;
					var Y = 100;
					var r = 40;
					var aPartida = (Math.PI / 180) * 220;
					var aFinal =  (Math.PI / 180) * 320;
					context.strokeStyle = "orange";
					context.lineWidth = 15;
					context.arc(X,Y,r,0,2*Math.PI,false);
					context.stroke();
			}
		}*/

var divCircles = document.getElementById('circulos');

function parkingCircle(name, posx, posy, disponibilidad){
	var elCanvas = document.getElementById('circulos');
	if (elCanvas && elCanvas.getContext) {
		var context = elCanvas.getContext("2d");
			if (context) {
					var X = posx;
					var Y = posy;
					var r = 20;
					context.lineWidth = 10;
					context.strokeStyle = "rgb(38, 130, 193)";
					context.beginPath();
					context.arc(X,Y,r,0,disponibilidad,false);
					context.stroke();
					context.closePath();
					context.strokeStyle = "rgb(255, 238, 0)";
					context.beginPath();
					context.arc(X,Y,r,disponibilidad,2*Math.PI,false);
					context.stroke();
					context.closePath();
					context.fillStyle = "white";
					context.beginPath();
					context.arc(X,Y,r,0,2*Math.PI,false);
					context.fill();
					context.closePath();
					context.beginPath();
					context.font = "Open Sans 6px sans-serif";
					context.fillText(name,X-(r+r/2),Y+2*r);
					context.fill();
					context.closePath();
			}
		}
	}

	var elCanvas = document.getElementById('circulos');
	if (elCanvas && elCanvas.getContext) {
		var context = elCanvas.getContext("2d");
			if (context) {
				context.lineWidth = 3;
				context.strokeStyle = "white";
				context.moveTo(250,50);
				context.lineTo(150,100);
				context.stroke();
				context.lineTo(50,50);
				context.stroke();
		}
	}

	var circleOne = new parkingCircle("La Gran Plaza", 250, 50, Math.PI);
	var circleTwo = new parkingCircle("Centro Magno", 50, 50, 3/4*Math.PI);
	var circleTwo = new parkingCircle("Plaza Galerías", 150, 100, 1/4*Math.PI);