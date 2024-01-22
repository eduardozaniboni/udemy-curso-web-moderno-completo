const verificaDiaValido = (dia) => {
    switch (dia) {
        case 1:
            console.log('Fim de semana')
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log('Dia útil')
            break
        case 7:
            console.log('Fim de semana')
            break
        default:
            console.log('Dia inválido')
            break
    }
}

verificaDiaValido(2)
