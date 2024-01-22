function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacaoEmMeses) {
    let juros = capitalInicial * taxaDeJuros * tempoDeAplicacaoEmMeses
    // montante = capitalInicial * (1 + taxaDeJuros * tempoDeAplicacaoEmMeses)
    let montante = capitalInicial + juros

    return `Simples - O montante final da aplicação será de: R$ ${montante.toFixed(2).toString().replace('.', ',')}`
}

function jurosCompostos(capitalInicial, taxaDeJuros, tempoDeAplicacaoEmMeses) {
    let montante = capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacaoEmMeses

    return `Composto - O montante final da aplicação será de: R$ ${montante.toFixed(2).toString().replace('.', ',')}`
}

console.log(jurosSimples(1000000, 0.0102, 12))
console.log(jurosCompostos(1000000, 0.0102, 12))
