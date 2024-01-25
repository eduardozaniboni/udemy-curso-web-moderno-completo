const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4999, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

console.log(
    produtos.filter(function (p) {
        return p.fragil == true
    })
)

const caro = (produto) => produto.preco >= 500
const fragil = (produto) => produto.fragil

const resultado = produtos.filter(fragil).filter(caro)
console.log(resultado)
