function encontrarPalavraMaisLonga(frase) {
    if (typeof frase !== 'string' || frase.trim() === '') {
      throw new Error("A entrada deve ser uma string não vazia.");
    }
    
    const palavras = frase.split(' ');
    
    const palavraMaisLonga = palavras.reduce((maisLonga, palavraAtual) => {
      return palavraAtual.length > maisLonga.length ? palavraAtual : maisLonga;
    }, '');
  
    return palavraMaisLonga;
  }
  
  
  const frase = 'Tutorial de desenvolvimento da web';
  console.log(encontrarPalavraMaisLonga(frase)); 
  