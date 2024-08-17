function calcularMediaAlunos(alunos) {
    if (alunos.length === 0) {
      throw new Error("A lista não pode ser vazia.");
    }
    
    const somaNotas = alunos.reduce((acumulador, aluno) => {
      return acumulador + aluno.nota;
    }, 0);
    
    const mediaNotas = somaNotas / alunos.length;
    
    return mediaNotas;
  }
  
  const listaDeAlunos = [
    { nome: 'Ana', nota: 5.5 },
    { nome: 'José', nota: 7.0 },
    { nome: 'Estelita', nota: 9.8 }
  ];
  
  console.log(calcularMediaAlunos(listaDeAlunos)); 
  