function mostrarDinheiro(valor) {
    valorFormatado = valor.toFixed(2).toString().replace('.', ',')
    return `R$ ${valorFormatado}`
}

console.log(mostrarDinheiro(0.1 + 0.2))
