'use strict'
// Pruebas con let (variables que funcionen solo en el bloque de codigo donde este) y var (variables globales)

// Prueba con var
// alert("hola");
var numero = 40; //valor 40
console.log(numero);
if(true){
	var numero = 50;
	console.log(numero); //valor 50
}

console.log(numero); //valor 50

// Prueba con let

var texto = "JavaScript fuera de bloque if";
console.log(texto); // JavaScript
if(true){
	let texto = "Java dentro bloque if"; 
	console.log(texto); // Java
						// Solo se modifica para el bloque IF
}
console.log(texto); // JavaScript