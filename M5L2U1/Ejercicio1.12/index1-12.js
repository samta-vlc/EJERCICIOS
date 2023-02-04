/*
let temas = new Array();
temas = ["JavaScript", "Variables", "funciones", "condicionales", "bucles"];
temas.forEach(function(valor, ind, lista){ 
    lista[ind] = valor.toUpperCase();
 	});
console.log(temas);
console.log(temas.reverse());
*/

const temas = ["JavaScript", "Variables", "funciones", "condicionales", "bucles"];
console.log('El array «temas» es:' , temas);

const enMayusculas = temas.map(element => element.toUpperCase());
console.log('El array «enMayusculas» es «temas» en mayúsculas:' , enMayusculas);

const invertido = enMayusculas.reverse();
console.log('El array «invertidos» es «enMayusculas» con sus elementos en orden invertido:' , invertido);