vetor1 = [2.35, 6.23, 3.65, 5.34, 2.93, 5]
vetor2 = [2.35, 6.23, 3.65, 5.34, 2.93, 5]

const funcao = (vetor) => {
    let mult = 1

    for (let i = 0; i < vetor.length; i++) {
        mult *= vetor[i]
    }

    console.log(mult.toFixed(2))
}

const funcao2 = (vetor) => {
    let mult = 1

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 5) {
            mult *= vetor[i]
        }
    }

    console.log(mult.toFixed(2))
}

funcao(vetor1)
funcao2(vetor2)
