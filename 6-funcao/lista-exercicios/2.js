function classificaTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        return 'Triângulo Equilátero'
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return 'Triângulo Isósceles'
    } else {
        return 'Triângulo Escaleno'
    }
}

console.log(classificaTriangulo(5, 5, 5))
console.log(classificaTriangulo(5, 10, 5))
console.log(classificaTriangulo(5, 10, 15))
