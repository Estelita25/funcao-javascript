function imprimirQuadro(lista) {
    if (!Array.isArray(lista) || lista.length === 0) {
      throw new Error("A entrada deve ser uma lista não vazia.");
    }
  
    const larguraMaxima = Math.max(...lista.map(str => str.length));
  
    const linhaBordas = '*'.repeat(larguraMaxima + 4);
  
    console.log(linhaBordas);
  
    for (const str of lista) {
      const espacosEsquerda = ' '.repeat(larguraMaxima - str.length);
      console.log(`* ${str}${espacosEsquerda} *`);
    }
  
    console.log(linhaBordas);
  }
  
  const lista = ["Hello", "World", "in", "a", "frame"];
  imprimirQuadro(lista);
  