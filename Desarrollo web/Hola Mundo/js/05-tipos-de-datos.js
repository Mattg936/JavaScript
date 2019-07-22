'use strict'
// alert();
// Operadores
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2;
var operacion2 = numero1 - numero2;
var operacion3 = numero1 * numero2;
var operacion4 = numero1 / numero2;
var operacion5 = numero1 % numero2; // Es el resto de la division entre los dos numeros, sirve para comprobar 
									// si un numero es par o impar.

alert("El resultado es: "+ operacion);
console.log("El resultado es: " +operacion);

// Tipos de datos
var numero_entero = 44;
var cadena_de_texto = "Hola";
var verdadero_o_falso = true;
var numero_falso = "33";

console.log(Number(numero_falso)+7); //funcion parseInt para convertir a entero
									 //funcion parseFloat para convertir a numero en coma flotante
console.log(String(numero_entero)+7); // para convertir variable a String

console.log(typeof numero_entero); //el type of devuelve el tipo de dato de la variable
console.log(typeof cadena_de_texto);
console.log(typeof verdadero_o_falso);
console.log(typeof numero_falso);