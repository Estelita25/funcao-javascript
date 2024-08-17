function gerarTabuada(numero) {
    if (typeof numero !== 'number' || isNaN(numero)) {
      throw new Error("O parâmetro deve ser um número válido.");
    }
    
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
  
  const numero = 6;
  gerarTabuada(numero);
  