'use strict'
/* Mostrar todos los numeros impares entre dos numeros
introducidos por teclado*/

var numero1 = parseInt(prompt("Ingresar primer numero",0));
do{
    var numero2 = parseInt(prompt("Ingresar segundo numero mayor al primero",0));
}while(numero1>numero2);
document.write("<h2>De " + numero1 + " a " + numero2+" estan estos numeros impares:</h2>")
for(var i = numero1;i <= numero2 ;i++){
    if(i%2 != 0){
    document.write(i+"</br>");}
    }
