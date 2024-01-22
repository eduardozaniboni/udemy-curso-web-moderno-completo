const calculadoraBasica = (numero1, operador, numero2) => {
    switch (operador) {
        case '+':
            return numero1 + numero2
        case '-':
            return numero1 - numero2
        case '*':
            return numero1 * numero2
        case '/':
            return numero1 / numero2
        default:
            return 'Operação inválida'
    }
}

console.log(calculadoraBasica(2, '+', 3))
console.log(calculadoraBasica(2, '-', 3))
console.log(calculadoraBasica(2, '*', 3))
console.log(calculadoraBasica(2, '/', 3))
console.log(calculadoraBasica(2, '%', 3))
