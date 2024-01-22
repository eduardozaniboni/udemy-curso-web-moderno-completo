console.log('\nEstrutura FOR em Array\n')
// Não recomendado, tem formas melhores de usar

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
  console.log(i, notas[i])
}

console.log('\nEstrutura FOR em Objeto\n')
// Recomendado forIn para usar em Objetos

const pessoa = {
  nome: 'Ana',
  sobrenome: 'Silva',
  idade: 29,
  peso: 64,
  endereco: {
    municipio: 'Domingos Martins',
    bairro: 'Centro',
    logradouro: 'Avenida Presidente Vargas',
    numero: 788,
    cep: '29260-000'
  }
}

for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`)
}