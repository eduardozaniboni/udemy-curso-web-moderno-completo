let dobro = function (a) {
  return 2 * a
}

dobro = (a) => {
  return 2 * a
}

dobro = a => 2 * a // return implícito

console.log(dobro(Math.PI))

let ola = function () {
  return 'Olá'
}

ola = () => {
  return 'Olá'
}

ola = () => 'Olá' // forma padrao
ola = _ => 'Olá' // possuí um param, mas o JS vai ignorar se você não passar
console.log(ola())