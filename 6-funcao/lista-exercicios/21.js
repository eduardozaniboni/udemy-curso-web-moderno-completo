// 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
// de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
// idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

const calculaPlanoDeSaude = (idadeConveniado) => {
    let valorPadrao = 100
    let valorASerPago = 0

    if (idadeConveniado < 10) {
        valorASerPago = valorPadrao += 60
    } else if (idadeConveniado >= 10 && idadeConveniado <= 30) {
        valorASerPago = valorPadrao += 80
    } else if (idadeConveniado > 30 && idadeConveniado <= 60) {
        valorASerPago = valorPadrao += 100
    } else if (idadeConveniado > 60) {
        valorASerPago = valorPadrao += 120
    }

    return `O valor a ser pago para o plano de saúde é de R$ ${valorASerPago.toFixed(2).replace('.', ',')}.`
}

console.log(calculaPlanoDeSaude(20))
