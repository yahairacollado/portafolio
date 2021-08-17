// Código del cuadrado

//Fórmula para calcular el área del cuadrado
function formularAreaCuadrado(lado) {
  return lado * lado;
}

//Fórmula para calcular el perímetro del cuadrado
function formularPerimetroCuadrado(lado) {
  return lado * 4;
}

//Aquí interactuamos con el HTML

function calcularAreaCuadrado() {
  const input = document.getElementById("ladoCuadrado");
  const result = document.getElementById("resultCuadrado");
  const unit = document.getElementById("unidadCuadrado");
  const unitValue = unit.value;
  const value = input.value;

  const area = formularAreaCuadrado(value);
  result.innerText = `The area of ​​the square is: ${area} ${unitValue}²`;
}

function calcularPerimetroCuadrado(){
  const input = document.getElementById("ladoCuadrado");
  const result = document.getElementById("resultCuadrado");
  const unit = document.getElementById("unidadCuadrado");
  const unitValue = unit.value;
  const value = input.value;

  const perimetro = formularPerimetroCuadrado(value);

  result.innerText = `The perimeter of the square is: ${perimetro} ${unitValue}`;
}


// Código del triángulo

function formulaAreaTriangulo(altura, base){
  return (base * altura) / 2
}

function formulaPerimetroTriangulo(ladoA, ladoB, base){
  return Number.parseInt(ladoA) +  Number.parseInt(ladoB) + Number.parseInt(base);
}

// function calcularAlturaTriangulo(ladoA, ladoB, base){
//   if (ladoA != ladoB) {
//     console.error("Sides A and B are not equal");
//   } else {
//       const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
//       const trianguloPequenoLadoBase = trianguloGrandeLadoA;

//       const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
//       const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

//       const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

//       const trianguloGrandeAltura = trianguloPequenoLadoA;
//       return trianguloGrandeAltura;
//   }
// }

function calcularAlturaTriangulo(ladoA, ladoB, base){
  if(ladoA === ladoB){
      return Math.sqrt((ladoA * ladoA) - ((base / 2) * (base / 2)))
  } else{
      return (ladoA * ladoB) / base
  }
}

//Interactuar con el html del triangulo

function calcularAreaTriangulo(){
  const result = document.getElementById("resultTriangulo");
  const unit = document.getElementById("selectBaseT")
  let unitValue = unit.value;
  let ladoA = document.getElementById("ladoAtriangulo");
  let ladoAValue = ladoA.value;
  let ladoB = document.getElementById("ladoBTriangulo");
  let ladoBValue = ladoB.value;
  let base = document.getElementById("baseTriangulo");
  let baseValue = base.value;

  let altura = calcularAlturaTriangulo(ladoAValue, ladoBValue, baseValue);
  let area = formulaAreaTriangulo(altura, baseValue);
  
  result.innerText = `The area of ​​the triangle is: ${area} ${unitValue}²`
  
}

function calcularPerimetroTriangulo(){
  const result = document.getElementById("resultTriangulo");
  const unit = document.getElementById("selectBaseT")
  let unitValue = unit.value;
  let ladoA = document.getElementById("ladoAtriangulo");
  let ladoAValue = ladoA.value;
  let ladoB = document.getElementById("ladoBTriangulo");
  let ladoBValue = ladoB.value;
  let base = document.getElementById("baseTriangulo");
  let baseValue = base.value;

  let perimetro = formulaPerimetroTriangulo(ladoAValue, ladoBValue, baseValue);
  
  result.innerText = `The perimeter of the triangle is: ${perimetro} ${unitValue}`
  
}


// Código del círculo

const PI = Math.PI;

// Diámetro
function formulaDiametro(radio){
  return radio * 2;
}

// Circunferencia
function formulaCircunferencia(radio){
  const diametro = formulaDiametro(radio);

  return diametro * PI;
}

// Área
function formulaAreaCirculo(radio){
  return (radio * radio) * PI;
}

//Interactuar con el html del circulo

function calcularAreaCirculo(){
  const input = document.getElementById("radioCirculo");
  const result = document.getElementById("resultCirulo");
  const unit = document.getElementById("selectCirculo");
  const value = input.value;
  const valueUnit = unit.value;

  const area = formulaAreaCirculo(value);
  result.innerText = `The area of ​​the circle is: ${area} ${valueUnit}`
}

function calcularCircunferencia(){
  const input = document.getElementById("radioCirculo");
  const result = document.getElementById("resultCirulo");
  const unit = document.getElementById("selectCirculo");
  const value = input.value;
  const valueUnit = unit.value;

  const circunferencia = formulaCircunferencia(value);
  result.innerText = `The circumference of the circle is: ${circunferencia} ${valueUnit}`
}

function calcularDiametro(){
  const input = document.getElementById("radioCirculo");
  const result = document.getElementById("resultCirulo");
  const unit = document.getElementById("selectCirculo");
  const value = input.value;
  const valueUnit = unit.value;

  const diametro = formulaDiametro(value);
  result.innerText = `The diameter of the circle is: ${diametro} ${valueUnit}`
}