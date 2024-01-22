const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('\nBreak\n')

for (x in nums) {
  if (x == 5) {
    break
  }
  console.log(`${x} = ${nums[x]}`)
}

console.log('\nContinue\n')

for (y in nums) {
  if (y == 5) {
    continue // pulou o indice 5
  }
  console.log(`${y} = ${nums[y]}`)
}

// tanto o break quanto o continue, causam desvio de fluxo
// o break interrompe o laço corrente sendo FOR/WHILE ou SWITCH e vai para próximo laço de repetição (outro for, while ou case do switch)
// o continue interrompe a repetição corrente sendo FOR/WHILE e vai para próxima repetição do mesmo bloco