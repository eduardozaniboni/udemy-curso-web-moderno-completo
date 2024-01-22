// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

const inteiroMaiorMenor = (vetor) => {
    let maior
    let menor

    for (let i = 0; i < vetor.length; i++) {
        if (maior === undefined && menor === undefined) {
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior) {
                maior = vetor[i]
            }
            if (vetor[i] < menor) {
                menor = vetor[i]
            }
        }
    }

    return [menor, maior]
}

vetor = [10, 11, 12, 13, 23, 34, 54, 65, 91, 93]
console.log(inteiroMaiorMenor(vetor))
