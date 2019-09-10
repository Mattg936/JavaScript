'use strict'

/* Un numero es par o impar 
1. Ventana prompt
2. Cuando un numero no sea valido que vuelva a pedir el numero*/

do{
    var numero = parseInt(prompt("Ingresar numero: "));
}while(isNaN(numero));

if(numero%2 == 0 )
{
    console.log(numero + " es par");
}
else{
    if(numero%2==1){
        console.log(numero + " es impar")
    }
    else{
        console.log(numero + " no es par ni impar");
        }
    }
