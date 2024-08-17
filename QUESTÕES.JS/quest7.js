function media(nota1, nota2, nota3) {
    const soma = nota1 + nota2 + nota3;
    const media = soma / 3;
    return media;
}

const nota1 = 5;
const nota2 = 9;
const nota3 = 4;

const resultado = media(nota1, nota2, nota3);
console.log(resultado);
