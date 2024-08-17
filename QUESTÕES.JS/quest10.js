function calcularMediaArredondada(numeros) {
    if (numeros.length === 0) {
      throw new Error("A lista não pode ser vazia.");
    }
    
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    const media = soma / numeros.length;
    
    return Math.round(media);
  }
  
  const listaDeNumeros = [18, 35, 68, 77, 92];
  console.log(calcularMediaArredondada(listaDeNumeros)); 
  