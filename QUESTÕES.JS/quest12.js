function contarDigitosParesImpares(numero) {
    const numeroString = Math.abs(numero).toString();
    
    let contagemPares = 0;
    let contagemImpares = 0;
    
    for (let i = 0; i < numeroString.length; i++) {
      const digito = parseInt(numeroString[i], 10);
      
      if (digito % 2 === 0) {
        contagemPares++;
      } else {
        contagemImpares++;
      }
    }
    
    return {
      pares: contagemPares,
      impares: contagemImpares
    };
  }
  
  const resultado = contarDigitosParesImpares(205816);
  console.log(resultado); 
  