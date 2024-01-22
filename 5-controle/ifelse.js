const imprimirResultado = function (nota) {
  if (nota >= 7) {
    console.log('Aprovado')
  } else {
    console.log('Reprovado')
  }
}

const imprimirResultadoResumido = nota => {
  if (nota >= 7) {
    console.log('Aprovado')
  } else {
    console.log('Reprovado')
  }
}

imprimirResultado(6)
imprimirResultado(10)
imprimirResultadoResumido(4)
imprimirResultadoResumido(10)