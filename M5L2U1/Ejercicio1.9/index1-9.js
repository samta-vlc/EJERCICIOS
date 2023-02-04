// Función para convertir grados Celsius (° C) a grados Fahrenheit (° F):
function coversorTa(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML=(valNum*9/5)+32;
  }