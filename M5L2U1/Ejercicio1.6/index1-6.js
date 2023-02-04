const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];

// Utilizando for:
let puntuacion1 = 0;
for (let i = 0; i < 9 ; i++) {
    puntuacion1 += notas[i];
};
console.log('Con el bucle FOR la puntuación final es ' + puntuacion1 + '.');

// Utilizando un for ... of:
let puntuacion2 = 0;
for (let nota of notas) {
    puntuacion2 += nota;
};
console.log('Con el bucle FOR OF la puntuación final es ' + puntuacion2 + '.');
