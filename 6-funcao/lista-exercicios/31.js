const verificaNegativos = (vetor) => {
    let qtdNegativos = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            qtdNegativos++
        }
    }
    return qtdNegativos
}

vetor = [-5, -2, -3, -4, -1, -6, 0, 1, 2, 5, 6, 3, 8, -19, 10, -11, 12, -13]
console.log(verificaNegativos(vetor))
