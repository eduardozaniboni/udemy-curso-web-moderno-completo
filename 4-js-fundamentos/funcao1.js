// Funcao sem retorno
function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 5, 6, 7, 8, 9)
imprimirSoma()

// Funcao com retorno
function soma(a, b = 1) {
  return a + b
}

console.log(soma(2, 3))
console.log(soma(5))
console.log(soma())