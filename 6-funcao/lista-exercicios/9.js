function classificacaoNotas(nota) {
    if (isNaN(nota)) {
        console.log('A nota deve ser um número de 0 a 100')
        return
    }

    let notaCorrigida = arredondarNota(nota)

    if (notaCorrigida >= 40) {
        console.log(`O aluno foi aprovado com a nota ${notaCorrigida}`)
    } else {
        console.log(`O aluno ficou reprovado com a nota ${notaCorrigida}`)
    }
}

function arredondarNota(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificacaoNotas('Teste')
classificacaoNotas(100)
classificacaoNotas(30)
classificacaoNotas(38)
classificacaoNotas(88)
classificacaoNotas(61)
