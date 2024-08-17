function encontrarPessoaMaisVelha(pessoas) {
    if (!Array.isArray(pessoas)) {
      throw new Error("O parâmetro deve ser um array.");
    }
    
    if (pessoas.length === 0) {
      throw new Error("O array não pode estar vazio.");
    }
    
    const pessoaMaisVelha = pessoas.reduce((maisVelha, pessoaAtual) => {
      if (typeof pessoaAtual !== 'object' || pessoaAtual === null ||
          typeof pessoaAtual.idade !== 'number' || typeof pessoaAtual.nome !== 'string') {
        throw new Error("Cada elemento do array deve ser um objeto com propriedades 'nome' e 'idade'.");
      }
  
      return pessoaAtual.idade > maisVelha.idade ? pessoaAtual : maisVelha;
    });
  
    return pessoaMaisVelha.nome;
  }
  
  const pessoas = [
    { nome: 'Maria', idade: 14 },
    { nome: 'Ivo', idade: 40 },
    { nome: 'João', idade: 65 }
  ];
  
  console.log(encontrarPessoaMaisVelha(pessoas)); 
  