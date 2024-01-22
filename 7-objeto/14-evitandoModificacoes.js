// Object.preventExtensions (previne aumento de atributos)
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção',
})

console.log('Extensível', Object.isExtensible(produto))
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal (selar) (não pode adicionar/excluir attr, mas consegue alterar os valores)
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes (nao consegue incluir novos attr (chaves), nao consegue excluir attr (chaves), nao consegue modificar os dados)

