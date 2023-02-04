const a = 23;
const b = 16;
const c = 13;

const volumen = a * b * c;
const area = 2 * (a * b + a * c + b * c);
const areaBase = a * b;
const areaLateral = 2 * c * (a + b);
const areaTotal = 2 * areaBase + areaLateral;

console.log ('Ortoedro 1')
console.log ('Volumen =', volumen + ' cm3');
console.log ('Área =', area + ' cm2');
console.log ('Área base =', areaBase + ' cm2');
console.log ('Área lateral =', areaLateral + ' cm2');
console.log ('Área total =', areaTotal + ' cm2');

// Generalización
const areaBase2 = 368;
const areaLateral2 = 1014;
const areaTotal2 = 2 * areaBase2 + areaLateral2;
const volumen2 = areaBase2 * c;

console.log (' ')
console.log ('Ortoedro 2 (generalización)')
console.log ('Área base =', areaBase2 + ' cm2');
console.log ('Área lateral =', areaLateral2 + ' cm2');
console.log ('Área total =', areaTotal2 + ' cm2');
console.log ('Volumen* =', volumen2, 'cm3')