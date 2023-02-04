// Ejecuta en la consola de tu navegador una función que determine si el número, introducido en la ventana emergente, es par o impar.

const numero = prompt('Dame un número para comprobar si es par o impar.');

function Par_o_Impar(numero) {
    if (numero % 2 == 0) {
      return "par";
    } else {
      return "impar";
    }
};

console.log('El número ' + numero + ' es ' + Par_o_Impar(numero) + '.');
