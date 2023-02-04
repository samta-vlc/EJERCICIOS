// Frase en mayúsculas, minúsculas o ambas.

const frase = prompt('Introduce una frase.');

function minusMayus(frase) { 
    if (frase == frase.toUpperCase()) {
        return alert ("La frase " + '"' + frase + '"' + " está en mayúsculas.");
    }
    if (frase == frase.toLowerCase()) {
        return alert ("La frase " + '"' + frase + '"' + " está en minúsculas.");
    }
    else {
        return alert ("La frase " + '"' + frase + '"' + " está en mayúsculas y minúsculas.");
    }
};

console.log("El resultado de la función se ha mostrado en la alerta. " , minusMayus(frase));