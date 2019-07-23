'use strict'

//Un programa que pida dos numeros y que nos diga cual es el mayor, el menor
// y si son iguales
// Si los numeros no son un numero o < 0, que vuelva a pedir los datos.

var numero1;
var numero2;
do{
numero1 = parseFloat(prompt("Ingresar primer numero."));
console.log(typeof numero1);
}while(isNaN(numero1) || numero1 <0);
do{
	numero2 = parseFloat(prompt("Ingresar segundo numero."));
	console.log(typeof numero2);
}while(isNaN(numero2) || numero2 < 0);
if(numero1>numero2){
	console.log("Primer numero "+numero1+" Segundo numero "+ numero2);
	alert("El primer numero ("+numero1+ ") es mayor que el segundo ("+numero2+")");
}else{
	if(numero2>numero1){
	console.log("Primer numero "+numero1+" Segundo numero "+ numero2);
	alert("El segundo numero(" + numero2 + ") es mayor que el primero(" + numero1+")");
	}
	else{
		alert("Los numeros son iguales");
	}
}