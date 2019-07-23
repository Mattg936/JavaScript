'use strict'

// Bucle WHILE

var year = 2018;

while(year >= 1991){
	//ejecuta esto
	console.log("Estamos en el año "+year);
	
	if(year == 2000){
		break; // Corta la ejecucion del bucle cuando se cumple la condicion
	}
	year--;
}

// Bucle DO WHILE

var years = 20;

do{
	alert("Solo cuando sea diferente a 20");
	years++;
}while(years < 25);