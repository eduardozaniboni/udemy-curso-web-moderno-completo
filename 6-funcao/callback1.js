const fabricantes = ["Mercedes", "Audi", "BMW", "Ferrari"]

function imprimir(nome, indice, array) {
  console.log(`${indice + 1}. ${nome} - ${array}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))