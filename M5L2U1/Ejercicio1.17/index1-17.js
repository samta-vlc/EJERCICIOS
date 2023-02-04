// Número de enlaces de la página
let numeroLinks = document.links.length;
document.getElementById("numeroDeLinks").innerHTML = "El número de enlaces en esta página web es: " + numeroLinks + ".";
console.log("El número de enlaces en esta página web es: " + numeroLinks + ".");


// Dirección a la que enlaza el penúltimo enlace
const penultimoLink = document.links;
let text = "";
for (let i = 0; i < penultimoLink.length; i++) {
  text = penultimoLink[5].href;
}
document.getElementById("penultimoLink").innerHTML = "Dirección a la que enlaza el penúltimo enlace: [" + text + "].";
console.log("Dirección a la que enlaza el penúltimo enlace: " + penultimoLink[5] + ".");


// Número de enlaces del tercer párrafo
var numLinksP3 = document.getElementById('third-paragraph').getElementsByTagName('a').length;
document.getElementById("numero-Links-P3").innerHTML = "El número de enlaces en el tercer párrafo (id: third-paragraph) es: " + numLinksP3 + ".";
console.log("El número de enlaces en el tercer párrafo (id: third-paragraph) es: " + numLinksP3 + ".");

//
