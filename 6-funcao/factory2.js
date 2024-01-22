// Factory personalizada
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1,
    }
}

console.log(criarProduto('Lápis', 5))
console.log(criarProduto('Tesoura', 7))
console.log(criarProduto('Apontador', 4))
