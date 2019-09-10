'use strict'

// Funciones
// Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

//Defino la funcion

function porConsola(numero1, numero2){
    console.log("Para los numeros "+numero1 + " y " + numero2 + ": ");
    console.log("Suma: "+(numero1+numero2));
    console.log("Resta: "+(numero1-numero2));
    console.log("Multiplicacion: "+(numero1*numero2));
    console.log("Division: "+(numero1/numero2));
    console.log("-----------------------");
}
function porPantalla(numero1, numero2){
    document.write("Para los numeros "+numero1 + " y " + numero2 + ": ");
    document.write("Suma: "+(numero1+numero2));
    document.write("Resta: "+(numero1-numero2));
    document.write("Multiplicacion: "+(numero1*numero2));
    document.write("Division: "+(numero1/numero2));
    document.write("-----------------------");  
}  
function calculadora(numero1, numero2, mostrar = false){
    //Conjunto de instrucciones a ejecutar por la funcion
    if(mostrar==false){
    porConsola(numero1,numero2);
    }
    else{
    porPantalla(numero1,numero2);
    }

    return true;


}
// Invoco o llamo la funcion
calculadora(12,15);
//calculadora(1,2);

/*
for(var i = 1;i<=10;i++){
    console.log(i);
    calculadora(i, 8);
}*/