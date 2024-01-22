const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    },
}
console.log(JSON.stringify(obj1))

// console.log(JSON.parse('{ a: 1, b: 2, c: 3 }')) // devo conter aspas
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) // o delimitador dos atributos devem ser em aspas duplas ("")
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1.9, "b": "string", "c": true, "d": {}, "e": [] }'))
