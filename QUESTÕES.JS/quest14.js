function calcularIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear(); 
    const idade = anoAtual - anoNascimento;    
    
    return idade;
  }
  
  // Exemplo de uso:
  const anoNascimento = 1976;
  console.log(calcularIdade(anoNascimento)); 
  