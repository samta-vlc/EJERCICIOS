const numeros = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
console.log('El array de partida es: ', numeros);

// Filtrado del array para que solamente muestre los números pares:
const numerosPares = numeros.filter(each => each % 2 === 0);
console.log('El array con sólo los números pares es: ', numerosPares);

// Filtrado del array para que solamente muestre los números impares:
const numerosImpares = numeros.filter(each => each % 2 !== 0);
console.log('El array con sólo los números impares es: ', numerosImpares);