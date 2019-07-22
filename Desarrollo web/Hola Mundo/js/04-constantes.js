'use strict'

// Constantes
// El valor de una constante no es modificable despues de ser asignado.

var web = "https://google.com";
const ip = "192.88.0.12";

web = "valor cambiado a " + " " + "https://hola.com";
// ip = "1.1.1.1"; no se puede cambiar el valor a una cosntante
console.log(web, ip);