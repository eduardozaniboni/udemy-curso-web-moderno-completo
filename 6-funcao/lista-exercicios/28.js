const paresImpares = (vetorNumeros) => {
    let qtdNumerosPares = 0
    let qtdNumerosImpares = 0

    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            qtdNumerosPares++
        } else {
            qtdNumerosImpares++
        }
    }

    console.log(`${qtdNumerosPares} números pares e ${qtdNumerosImpares} números impares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

paresImpares(vetor)
