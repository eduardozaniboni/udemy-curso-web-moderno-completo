let vetor = [6, 5, 7, 8, 10, 9, 4, 6, 5, 7, 10]

const funcao = (notas) => {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 0 && notas[i] <= 4.9) {
            console.log(`Nota: ${notas[i]}\nConceito: D\n`)
        } else if (notas[i] >= 5 && notas[i] <= 6.9) {
            console.log(`Nota: ${notas[i]}\nConceito: C\n`)
        } else if (notas[i] >= 7 && notas[i] <= 8.9) {
            console.log(`Nota: ${notas[i]}\nConceito: B\n`)
        } else if (notas[i] >= 9 && notas[i] <= 10) {
            console.log(`Nota: ${notas[i]}\nConceito: A\n`)
        } else {
            console.log('Nota inválida')
        }
    }
}

funcao(vetor)
