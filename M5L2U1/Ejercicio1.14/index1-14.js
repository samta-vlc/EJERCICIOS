const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
console.log('El array de partida es: ', meses);

// El array resultado de concatenar (filtrado escrito en mayúsculas).
const mesesNomLargMayus = meses
    .filter(meses => meses.length > 7)
    .map(meses => meses.toLocaleUpperCase());
console.log("El array resultado de concatenar (filtrar meses con más de 7 letras y éstos escritos en mayúsculas) es:", mesesNomLargMayus);

// Variable con número meses de más de 7 letras
const numeroMesesLarg = mesesNomLargMayus.length;
console.log("En total hay" , numeroMesesLarg , "mes/es con el nº letras filtradas anteriormente.");
