function verificaDivisaoPorTres(numero) {
    if (isNaN(numero)) {
        return 'Passe um número inteiro válido'
    }

    // if (Number.isInteger(numero / 3)) {
    //     return true
    // } else {
    //     return false
    // }

    if (number % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(verificaDivisaoPorTres(30))
