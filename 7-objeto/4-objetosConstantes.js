// pessoa -> 123 (endereco de memoria) -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' } // erro

Object.freeze(pessoa) // passa a ignorar alterações posteriores no Objeto

pessoa.nome = 'Maria'
console.log(pessoa.nome)
delete pessoa.nome
pessoa.end = 'Rua ABC'
console.log(pessoa)

// Criando o objeto "congelado" constante
const pessoaConstante = Object.freeze({ nome: 'Eduardo' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
