'use strict'

/*
Hacer la tabla de multiplicar de un numero introducido por teclado
*/
do{
   var numero = parseInt(prompt("Ingresar numero: "));
}while(isNaN(numero));
console.log("Tabla del "+numero);
for(var i=0;i<=10;i++){
    var multiplicacion = numero*i;
    console.log(numero +" * "+i + " = " + multiplicacion);
}
/* Todas las tablas de multiplicar */ 