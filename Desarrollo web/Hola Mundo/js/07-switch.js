'use strict'

//Switch
var edad = 55;
var imprime = "";

switch(edad){
	case 18:
		imprime = "Mayor de edad";
		//console.log(imprime);
	break;
	case 25:
		imprime = "Adulto";
		//console.log(imprime);
	break;
	case 40:
		imprime = "Mediana edad";
		//console.log(imprime);
	break;
	case 75:
		imprime = "Tercera edad";
		//console.log(imprime);
	break;
	default:
		imprime = "Neutro";
	break;
}
console.log(imprime);