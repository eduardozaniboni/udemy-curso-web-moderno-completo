const escreveNumeroPorExtenso = (numero) => {
    switch (numero) {
        case 0:
            return 'Zero'
        case 1:
            return 'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Três'
        case 4:
            return 'Quatro'
        case 5:
            return 'Cinco'
        case 6:
            return 'Seis'
        case 7:
            return 'Sete'
        case 8:
            return 'Oito'
        case 9:
            return 'Nove'
        case 10:
            return 'Dez'
        default:
            return 'Número fora do intervalo'
    }
}

console.log(escreveNumeroPorExtenso(1))
console.log(escreveNumeroPorExtenso(2))
console.log(escreveNumeroPorExtenso(3))
console.log(escreveNumeroPorExtenso(4))
console.log(escreveNumeroPorExtenso(5))
console.log(escreveNumeroPorExtenso(6))
console.log(escreveNumeroPorExtenso(7))
console.log(escreveNumeroPorExtenso(8))
console.log(escreveNumeroPorExtenso(9))
console.log(escreveNumeroPorExtenso(10))
console.log(escreveNumeroPorExtenso(11))
