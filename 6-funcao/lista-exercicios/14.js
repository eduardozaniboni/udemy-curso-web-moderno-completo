const verificaFrutas = (fruta) => {
    switch (fruta) {
        case 'Maçã':
            return 'Não vendemos essa fruta aqui'
        case 'Kiwi':
            return 'Estamos com escassez de kiwis'
        case 'Melância':
            return 'Aqui está, são 3 reais o quilo'
        default:
            throw new Error('Fruta não verificada')
    }
}

console.log(verificaFrutas('Maçã'))
console.log(verificaFrutas('Kiwi'))
console.log(verificaFrutas('Melância'))
console.log(verificaFrutas('Uva'))



