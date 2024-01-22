const mediaAritmetica = (vetor) => {
    let qtdNumerosVetor = 0
    let soma = 0
    let media = 0

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
        qtdNumerosVetor++
    }

    media = soma / qtdNumerosVetor

    return media.toFixed(2)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
vetor2 = [3, 5, 6, 2, 3, 4, 1, 0, 2, 17, 20, 21, 4, 5]

console.log(mediaAritmetica(vetor))
console.log(mediaAritmetica(vetor2))
