function filtrarLivrosPorAutor(livros, autor) {
    if (!Array.isArray(livros) || typeof autor !== 'string') {
      throw new Error("Parâmetros inválidos: o primeiro parâmetro deve ser um array e o segundo um string.");
    }
  
    return livros.filter(livro => livro.autor === autor);
  }
  
  const livros = [
    { titulo: 'O Futuro da Humanidade', autor: 'Augusto Cury', ano: 1980 },
    { titulo: 'É assim que Acaba', autor: 'Colleen Hoover', ano: 2000 },
    { titulo: 'Quem me Roubou de Mim', autor: 'Pe. Fabio de Melo', ano: 2021 },
    { titulo: 'Como eu era antes de você', autor: 'jojo Moyes', ano: 1990 }
  ];
  
  const autor = 'Augusto Cury';
  const livrosPorAutor = filtrarLivrosPorAutor(livros, autor);
  console.log(livrosPorAutor);
  