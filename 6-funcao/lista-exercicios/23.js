// 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

const calculaMediaPonderada = (codigoAluno, nota1, nota2, nota3) => {
    let pesoNota1 = 4
    let pesoNota2 = 3
    let pesoNota3 = 3
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a, b) => (a < b ? 1 : -1))
    let resultadoMediaPonderada =
        (nota1 * pesoNota1 + nota2 * pesoNota2 + nota3 * pesoNota3) / (pesoNota1 + pesoNota2 + pesoNota3)

    return `
    Código Aluno: ${codigoAluno}.
    Nota 1: ${nota1}.
    Nota 2: ${nota2}.
    Nota 3: ${nota3}.
    Média: ${resultadoMediaPonderada}.
    ${
        resultadoMediaPonderada < 5
            ? `Média: ${resultadoMediaPonderada} REPROVADO.`
            : `Média: ${resultadoMediaPonderada} APROVADO.`
    }`
}

console.log(calculaMediaPonderada(123, 2.8, 6, 3.5))
console.log(calculaMediaPonderada(124, 4.2, 6, 5.5))
