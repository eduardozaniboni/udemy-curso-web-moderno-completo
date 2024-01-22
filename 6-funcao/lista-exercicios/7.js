function formulaBhaskara(ax2, bx, c) {
    let resultados = []
    let delta = bx ** 2 - 4 * ax2 * c

    if (delta < 0) {
        return `Delta é negativo: ${delta.toFixed(2)}`
    }

    let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
    let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)

    resultados.push(x1.toFixed(2))
    resultados.push(x2.toFixed(2))

    return resultados
}

console.log(formulaBhaskara(1, 3, 2))
console.log(formulaBhaskara(2, 14, 6))
console.log(formulaBhaskara(3, -5, 12))
