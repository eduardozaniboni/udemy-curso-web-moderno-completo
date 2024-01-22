let pontosPorJogos = '10, 20, 20, 8, 25, 3, 0, 30, 1'

function avaliaPontuacoesJogos(pontosPorJogos) {
    let pontuacoes = pontosPorJogos.split(', ') // retorna um array com as pontuacoes
    let qtdQuebraDeRecords = 0
    let piorJogo = 0
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if (parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        } else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i + 1
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}

console.log(avaliaPontuacoesJogos(pontosPorJogos))
