// Cadeia de protótipos (prototype chain)

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }
// Object.prototype.attr0 = '0' // não faça isso em casa!

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelararMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    },
}

const ferrari = {
    modelo: 'F40',
    velMax: 324, // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    },
}

// função que estabelece uma relação de prototipos entre dois objetos
// primeiro o objeto e depois o prototipo daquele objeto
// equivalente: __proto__ -> (apontar) carro)
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelararMais(100)
console.log(volvo.status())

ferrari.acelararMais(300)
console.log(ferrari.status())
