function verificarPropriedade(objeto, nomePropriedade) {
    return objeto.hasOwnProperty(nomePropriedade);
  }
  
  const pessoa = {
    nome: 'Estelita',
    idade: 45,
    profissao: 'Estudante'
  };
  
  console.log(verificarPropriedade(pessoa, 'nome'));       // Saída: true
  console.log(verificarPropriedade(pessoa, 'idade'));      // Saída: true
  console.log(verificarPropriedade(pessoa, 'endereco'));   // Saída: false
  