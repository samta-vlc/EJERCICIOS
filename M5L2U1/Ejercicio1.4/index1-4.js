var numero1 = 5;
var numero2 = 8;

if (numero1 < numero2) {
    alert(numero1 + " no es mayor que " + numero2 + '.');
};

if (numero2 >= 0) {
    alert(numero2 + " es positivo.");
};

if (numero1 < 0) {
    alert(numero1 + " es negativo o distinto de 0.");
};

if (++numero1 != numero2) {
    alert("El incrementar en 1 unidad la variable «numero1», siendo ahora " + numero1 + ", no lo hace mayor o igual que " + numero2 + '.');
};
