const calculaValorDePagamento = (codigoItem, quantidadeItem) => {
    switch (codigoItem) {
        case 100:
            valorAPagar = quantidadeItem * 3
            console.log(
                `Você pediu ${quantidadeItem} ${
                    quantidadeItem > 1 ? 'cachorros quentes' : 'cachorro quente'
                }, o valor de pagamento será: R$ ${valorAPagar.toFixed(2)}`
            )
            break
        case 200:
            valorAPagar = quantidadeItem * 4
            console.log(
                `Você pediu ${quantidadeItem} ${
                    quantidadeItem > 1 ? 'hambúrguers simples' : 'hambúrguer simples'
                }, o valor de pagamento será: R$ ${valorAPagar.toFixed(2)}`
            )
            break
        case 300:
            valorAPagar = quantidadeItem * 5.5
            console.log(
                `Você pediu ${quantidadeItem} ${
                    quantidadeItem > 1 ? 'cheeseburguers' : 'cheeseburguer'
                }, o valor de pagamento será: R$ ${valorAPagar.toFixed(2)}`
            )
            break
        case 400:
            valorAPagar = quantidadeItem * 7.5
            console.log(
                `Você pediu ${quantidadeItem} ${
                    quantidadeItem > 1 ? 'baurus' : 'bauru'
                }, o valor de pagamento será: R$ ${valorAPagar.toFixed(2)}`
            )
            break
        case 500:
            valorAPagar = quantidadeItem * 3.5
            console.log(
                `Você pediu ${quantidadeItem} ${
                    quantidadeItem > 1 ? 'refrigerantes' : 'refrigerante'
                }, o valor de pagamento será: R$ ${valorAPagar.toFixed(2)}`
            )
            break
        case 600:
            valorAPagar = quantidadeItem * 2.8
            console.log(
                `Você pediu ${quantidadeItem} ${
                    quantidadeItem > 1 ? 'sucos' : 'suco'
                }, o valor de pagamento será: R$ ${valorAPagar.toFixed(2)}`
            )
            break
        default:
            console.log('Produto não existe no cardápio')
            break
    }
}

calculaValorDePagamento(100, 1)
calculaValorDePagamento(200, 1)
calculaValorDePagamento(300, 1)
calculaValorDePagamento(400, 1)
calculaValorDePagamento(500, 1)
calculaValorDePagamento(600, 1)
