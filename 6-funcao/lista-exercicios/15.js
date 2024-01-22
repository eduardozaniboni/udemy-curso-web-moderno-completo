const comprarCarros = (carro) => {
    switch (carro) {
        case 'hatch':
            return 'Compra efetuada com sucesso.'
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com esse tipo de automóvel aqui.'
    }
}

console.log(comprarCarros('sedan'))
console.log(comprarCarros('motocicleta'))
console.log(comprarCarros('caminhonete'))
console.log(comprarCarros('hatch'))
console.log(comprarCarros('caminhões'))
