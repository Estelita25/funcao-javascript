function imc(peso, altura) {
    const indiceMassaCorporal = peso / (altura * altura);
    return indiceMassaCorporal;
}

const peso = 74; 
const altura = 1.60; 

const resultadoIMC = imc(peso, altura);
console.log(resultadoIMC); 
