console.log(typeof Array, typeof new Array(), typeof [])

let aprovados = new Array('Ana', 'Bia', 'Carlos')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined, pois nao existe esse índice dentro do array

aprovados[3] = 'Paulo'
aprovados.push('Abia')

console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined) // true
console.log(aprovados[8] === null) // false

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)
// aprovados.splice(1, 2) // excluiria 2 elementos
// aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // add elementos
console.log(aprovados)
