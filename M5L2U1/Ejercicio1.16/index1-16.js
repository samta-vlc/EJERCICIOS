//
class Cuadrado {
  constructor (lado) {
    this.perimetro = lado * 4;
    this.area = lado * lado;
  }
  get Perimetro() {
    return this.calculaPerimetro();
  }
  get Area() {
    return this.calculaArea();
  }
  calculaPerimetro () {
    return this.perimetro
  }
  calculaArea () {
    return this.area
  }
};

const pequeño = new Cuadrado(2);
console.log(`El cuadrado pequeño tiene un perímetro de ${pequeño.Perimetro} cm y un área de ${pequeño.Area} cm2.`);
const mediano = new Cuadrado(5);
console.log(`El cuadrado mediano tiene un perímetro de ${mediano.Perimetro} cm y un área de ${mediano.Area} cm2.`);
const grande = new Cuadrado(10);
console.log(`El cuadrado grande tiene un perímetro de ${grande.Perimetro} cm y un área de ${grande.Area} cm2.`);
