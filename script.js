
//-- FUNCION DE LOS BOTONES DEL SLIDER

var indice = 0;

function mover(paso){
	var cinta = document.getElementById('cinta');
	var fotos = cinta.getElementsByTagName('img');
	var totalFotos = fotos.length;

	indice = indice + paso;
	if (indice >= totalFotos){
			indice = 0;
	}
	if (indice < 0){
			indice = totalFotos - 1;
	}	

	var desplazamiento = -indice * 100;
	cinta.style.transform = "translateX(" + desplazamiento + "%)";	
}