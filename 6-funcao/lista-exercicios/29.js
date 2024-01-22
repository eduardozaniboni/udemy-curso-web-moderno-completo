const observarIntervalo = (vetor) => {
    let qtdNumerosNoIntervalo = 0
    let qtdNumerosForaIntervalo = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            qtdNumerosNoIntervalo++
        } else {
            qtdNumerosForaIntervalo++
        }
    }

    return `${qtdNumerosNoIntervalo} números dentro do intervalo e ${qtdNumerosForaIntervalo} números fora do intervalo.`
}

vetor = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(observarIntervalo(vetor))
