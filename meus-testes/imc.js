// Calculo IMC
//Para calcular é preciso dividir o seu peso, em quilogramas, pelo quadrado da sua altura, em metros. Por exemplo, se você pesa 56 kg e mede 1,64 m, o cálculo será:56/(1,64 x 2) = 20.8

const calcularImc = (peso, altura) => {
  let imc = (peso / (altura * 2)).toFixed(2)
  console.log(`IMC = ${imc}`)
}

// Para a maioria dos adultos, o IMC saudável está na faixa de 18,5 a 24,9. Abaixo de 18,5, considera-se que o adulto está abaixo do peso adequado para a altura. E acima disso, com sobrepeso ou obesidade.

// Teste
calcularImc(75, 1.74)