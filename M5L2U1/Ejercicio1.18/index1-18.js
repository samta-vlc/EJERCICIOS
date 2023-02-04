// Cuando hagamos click sobre el botón «Guardar» aparecerá un alert
function clicaBoton() {
    alert("¡Guardado! 💾✔️");
  };

// Cuando hagamos foco sobre el input a continuacion de «Nombre» el fondo será de un color y cuando se lo quitemos, de otro
function spcNombreOnFocus(obj) {
    obj.style.background = "yellow";
};
function spcNombreOnBlur(obj) {
    obj.style.background = "#EECDE5";
};

// Dependiendo de si escribimos una vocal o una consonante (sin importar que sea mayúscula o minúscula)  el contenido del input aparecerá de distinto color.
const inputRandom = document.querySelector('.random');
    var vocales = [65, 69, 73, 79, 85, 97, 101, 105, 111, 117];
    function compruebaLetra(event){
    const currentLetter = event.keyCode;
    if (vocales.indexOf(currentLetter) === -1) {
        inputRandom.style.color = 'red';
    }
    else {
        inputRandom.style.color = 'blue';
    }
};

// Dependiendo de si escribimos una letra vocal o consonante (sin importar que sea mayúscula o minúscula) u otro carácter en este input, abajo se irá mostrando un mensaje distinto
function compruebaTexto(event) {
    let key = event.key;
    if (key == "a" || key == "A" || key == "e" || key == "E" || key == "i" || key == "I" || key == "o" || key == "O" || key == "u" || key == "U") { 
      let text = "Has tecleado una VOCAL.";
      document.getElementById("respuesta").innerHTML = text;
    }
    else if (key == "B" || key == "C" || key == "D" || key == "F" || key == "G" || key == "H" || key == "J" || key == "K" || key == "L" || key == "M" || key == "N" || key == "Ñ" || key == "P" || key == "Q" || key == "R" || 
    key == "S" || key == "T" || key == "V" || key == "W" || key == "X" || key == "Y" || key == "Z" || key == "b" || key == "c" || key == "d" || key == "f" || key == "g" || key == "h" || key == "j" || key == "k" || 
    key == "l" || key == "m" || key == "n" || key == "ñ" || key == "p" || key == "q" || key == "r" || key == "s" || key == "t" || key == "v" || key == "w" || key == "x" || key == "y" || key == "z") {
      let text = "Has tecleado una CONSONANTE.";
      document.getElementById("respuesta").innerHTML = text;
    }
    else {
      let text = "Ni vocal ni consonante.";
      document.getElementById("respuesta").innerHTML = text;  
    }
};
