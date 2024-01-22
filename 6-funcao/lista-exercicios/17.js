const calculaNovoSalario = (planoDeTrabalho, salarioAtual) => {
    let novoSalario = 0
    switch (planoDeTrabalho) {
        case 'A':
            return (novoSalario = salarioAtual + salarioAtual * 0.1)
        case 'B':
            return (novoSalario = salarioAtual + salarioAtual * 0.15)
        case 'C':
            return (novoSalario = salarioAtual + salarioAtual * 0.2)
        default:
            return 'Plano é inválido'
    }

    // switch (planoDeTrabalho) {
    //     case 'A':
    //         return salarioAtual * 1.1
    //     case 'B':
    //         return salarioAtual * 1.15
    //     case 'C':
    //         return salarioAtual * 1.2
    //     default:
    //         return 'Plano inválido.'
    // }
}

console.log(calculaNovoSalario('A', 1000))
console.log(calculaNovoSalario('B', 1000))
console.log(calculaNovoSalario('C', 1000))
console.log(calculaNovoSalario('D', 1000))
