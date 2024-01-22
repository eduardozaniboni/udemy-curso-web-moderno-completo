const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13,
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

// Object.entries(pessoa).forEach(e => {
//     console.log(`${e[0]}: ${e[1]}}`)
// })

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// definir uma propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // vai ser listada
    writable: false, // vai ser modificada
    value: '01/01/2019',
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign -> forma de concatenar vários objetos em um só (os últimos objetos sobreescrevem os anteriores caso tenham o mesmo atributo)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

console.log(1, obj)

Object.freeze(obj)
obj.c = 1234
console.log(2, obj)
