function filtrarStringsLongas(array) {
    if (!Array.isArray(array)) {
      throw new Error("O parâmetro deve ser um array.");
    }
  
    return array.filter(str => typeof str === 'string' && str.length > 5);
  }
  
  
  const lista = ["laranja", "banana", "cajú", "maçã", "limão", "graviola"];
  const resultado = filtrarStringsLongas(lista);
  console.log(resultado); 