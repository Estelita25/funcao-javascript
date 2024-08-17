function calcularDesconto(valorProduto, percentualDesconto) {
    const desconto = valorProduto * (percentualDesconto / 100);
    const valorComDesconto = valorProduto - desconto;
    return valorComDesconto;
}

const valorProduto = 480; 
const percentualDesconto = 25; 

const valorFinal = calcularDesconto(valorProduto, percentualDesconto);
console.log(valorFinal); 
