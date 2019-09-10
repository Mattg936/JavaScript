'use strict'

/* Hacer una calculadora
1. Pida dos numeros
2. Si los pongo mal pida de nuevo
3. Muestre en el body de la pagina en un alert y por la consola el resultado de 
sumar, restar, multiplicar y dividir esos dos numeros
*/
do{
var numero1 = parseInt(prompt("Introducir primer numero"));
var numero2 = parseInt(prompt("Introducir segundo numero"));
}while(isNaN(numero1)||isNaN(numero2));
var suma= numero1+numero2;
var resta= numero1-numero2;
var mult= numero1*numero2;
var div= numero1/numero2;
document.write("La suma es: "+suma+"<br/>");
document.write("La resta es: "+resta+"<br/>");
document.write("La multiplicacion es: "+mult+"<br/>");
document.write("La division es: "+div);
alert("La suma es: "+suma);
alert("La resta es: "+resta);
alert("La multiplicacion es: "+mult);
alert("La division es: "+div);
console.log("La suma es: "+suma);
console.log("La resta es: "+resta);
console.log("La multiplicacion es: "+mult);
console.log("La division es: "+div);
