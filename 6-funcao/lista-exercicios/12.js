function calculaFatorial(numero) {
    let numeroFator = numero
    for (let i = 1; i < numeroFator; i++) {
        numero = numero * i
    }
    console.log(numero)
}

calculaFatorial(10)
