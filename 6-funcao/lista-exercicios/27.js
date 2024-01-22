// 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e calcule se existe uma criança menor

// Caso exista -> se a criança menor ultrapassará a maior e em quantos anos isso acontecerá.

// Utilize centímetros para as unidades de medida.

const calcularCrescimento = (fstAltura, fstTaxaCrescimentoAnual, secAltura, secTaxaCrescimentoAnual) => {
    if (fstAltura == secAltura) {
        if (fstTaxaCrescimentoAnual > secTaxaCrescimentoAnual) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if (fstTaxaCrescimentoAnual < secTaxaCrescimentoAnual) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        } else {
            return 'As crianças tem altura e taxa de crescimento iguais.'
        }
    } else {
        if (fstAltura > secAltura) {
            if (fstTaxaCrescimentoAnual >= secTaxaCrescimentoAnual) {
                return 'A criança menor não ultrapassará a maior.'
            } else {
                return `A criança menor ultrapassará a maior em ${calcularTempo(
                    secAltura,
                    secTaxaCrescimentoAnual,
                    fstAltura,
                    fstTaxaCrescimentoAnual
                )} anos`
            }
        } else {
            if (secTaxaCrescimentoAnual >= fstTaxaCrescimentoAnual) {
                return 'A criança menor não ultrapassará a maior.'
            } else {
                return `A criança menor ultrapassará a maior em ${calcularTempo(
                    fstAltura,
                    fstTaxaCrescimentoAnual,
                    secAltura,
                    secTaxaCrescimentoAnual
                )} anos`
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior) {
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }

    return qtdAnos
}

console.log(calcularCrescimento(150, 2, 130, 4))