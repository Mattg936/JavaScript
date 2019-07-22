'use strict'
//alert();
//Condicional IF
//Si A es 'condicion' a B entonces haz algo
/*do{
var edad = prompt("Ingrese edad", "Ej. 9");
if(edad<0){
	alert("No ingresar numeros negativos.")
}
}while(edad<0);*/
var edad = 75;
var nombre = "David Suarez"

/*
//Operadores relacionales
	mayor >, menor <, mayor igual >=, menor igual <=, distonto !=, igual ==
*/
//Si pasa esto
if(edad >= 18){
	// Ejecuta esto
	console.log(nombre + " tiene " + edad + " años, es mayor de edad");

	if(edad <= 33){
		console.log("Todavia eres millenial");
	}else if(edad >= 70){
		console.log("Eres anciano");
	}else{
		console.log("Ya no eres millenial");
	}
}else{
	console.log(nombre + " tiene " + edad + " años, no es mayor de edad");
}