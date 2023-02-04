// Un array podría ser...
const misNumeros = [1,2,17,8,8,7,1,11,9,44,3,21,4,21,22,5,3];

// Función para sumar todos los números pares del array "misNumeros":
function sumaTodosPares(misNumeros) {
    var numeros_pares = [];
    var suma = 0;
    for (let i = 0; i < misNumeros.length; i++) {
          if(misNumeros[i] % 2 === 0){
            numeros_pares.push(misNumeros[i]);
            suma = suma + misNumeros[i];   
          }  
    }
     return suma;  
  }
console.log('El resultado de sumar solamente los números pares del array "misNumeros"', misNumeros, 'es:', sumaTodosPares(misNumeros));

// Filtrado del array para que solamente muestre los números pares:
const evenNumbers = misNumeros.filter(each => each % 2 === 0);
console.log('El array con sólo los números pares, nombrado como "evenNumbers", es: ', evenNumbers);


// Comprobar que la suma del array filtrado con números paraes ("evenNumbers") coincide con la suma anterior:
evenNumbers
let sum = 0;
for (let i = 0; i < evenNumbers.length; i++) {
    sum += evenNumbers[i];
};
console.log('El resultado de sumar todo el array "evenNumbers" es:', sum);
