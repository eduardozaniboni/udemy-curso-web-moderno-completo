// 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

const calculoAnuidade = (mesDePagamento, valorAnuidade) => {
    if (mesDePagamento == 1) {
        return `O valor da anuidade é de R$ ${valorAnuidade.toFixed(2).replace('.', ',')}.`
    } else if (mesDePagamento > 1 && mesDePagamento < 13) {
        let valorAtualizado = valorAnuidade * (1 + 5 / 100) ** mesDePagamento
        return `Devido o pagamento após o vencimento, foi aplicado multa e juros e o valor atualizado é de R$ ${valorAtualizado
            .toFixed(2)
            .replace('.', ',')}.`
    } else if (mesDePagamento > 12) {
        return `Mês de pagamento inválido.`
    }
}

console.log(calculoAnuidade(1, 100))
console.log(calculoAnuidade(3, 100))
console.log(calculoAnuidade(7, 100))
console.log(calculoAnuidade(13, 100))
