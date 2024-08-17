function calcularPrecoProduto(valorCusto, margemLucroPercentual, valorFrete) {
    if (typeof valorCusto !== 'number' || valorCusto < 0 ||
        typeof margemLucroPercentual !== 'number' || margemLucroPercentual < 0 ||
        typeof valorFrete !== 'number' || valorFrete < 0) {
      throw new Error("Os parâmetros devem ser números não negativos.");
    }
    
    const margemLucro = (valorCusto * margemLucroPercentual) / 100;
    
    const precoVenda = valorCusto + margemLucro + valorFrete;
    
    return precoVenda;
  }
  
  const valorCusto = 300;         
  const margemLucroPercentual = 25; 
  const valorFrete = 18;          
  
  console.log(calcularPrecoProduto(valorCusto, margemLucroPercentual, valorFrete)); 
  