'use strict'

/* Mostrar todos los numeros divisores de un numero
introducido por teclado */

var numero = parseInt(prompt("Ingrese numero",1));
for (var i = 1; i<=numero; i++){
    if(numero%i==0){
        console.log("El numero "+i+" es divisor de "+numero);
    }
}
