'use strict'

// Funciones anonimas
// Funciones que no tienen nombre y se pueden guardar
// en variables.

/*var pelicula = function(nombre){
    return "La pelicula es "+ nombre;
}
console.log(pelicula("abc"));
*/
//Callback una funcion que se ejecuta dentro de otra

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;

}

sumame(5, 7, dato => {
    console.log("La suma es: ", dato)
},
dato => {
    console.log("La suma por dos es: ", (dato*2));
});
