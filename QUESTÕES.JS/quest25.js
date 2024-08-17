function inverterString(str) {
    if (typeof str !== 'string') {
      throw new Error("O parâmetro deve ser uma string.");
    }
  
    return str.split('').reverse().join('');
  }
  
  // Exemplo de uso:
  const stringOriginal = "vida";
  const stringInvertida = inverterString(stringOriginal);
  console.log(stringInvertida);
  