vetorPilha = [1, 2, 3, 4, 5]
vetorAdiciona = [6, 7, 8, 9, 10]

const concatenaVetores = (vetorPilha, vetorAdiciona) => {
    console.log('Vetor inicial: ' + vetorPilha)

    for (let i = 0; i < vetorAdiciona.length; i++) {
        vetorPilha.push(vetorAdiciona[i])
    }

    console.log('Vetor adicionado: ' + vetorAdiciona)
    console.log('Vetor resultado: ' + vetorPilha)
}

concatenaVetores(vetorPilha, vetorAdiciona)
