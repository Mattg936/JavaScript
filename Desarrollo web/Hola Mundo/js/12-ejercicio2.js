'use strict'

// Mostrar la media y la suma de los numeros hasta
// que se introduzca un numero negativo

var x, c=0, media, suma=0;

do{
	x = parseFloat(prompt("Introduzca un numero",0));
	if(isNaN(x)){
		x=0;
	}
	if(x>=0){
	suma = suma+x;
    c++;
    console.log(suma, c);
	}

}while(x>=0);

media = suma/c;
alert("La SUMA es "+suma);
alert("La MEDIA es "+media);
