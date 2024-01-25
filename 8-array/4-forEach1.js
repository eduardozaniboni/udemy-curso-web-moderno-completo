const aprovados = ['Ana', 'Bia', 'Carlos', 'Daniel']

aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach((nome) => console.log(nome))

const exebirAprovados = (aprovado) => console.log(aprovado)
aprovados.forEach(exebirAprovados)
