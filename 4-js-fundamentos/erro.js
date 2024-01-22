function tratarErroELancar(erro) {
  // throw new Error('...')
  // throw 10
  // throw true
  // throw 'mensagem'
  throw { name: erro.nome, msg: erro.mensagem, date: new Date }
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!')
  } catch (e) {
    tratarErroELancar(e)
  } finally {
    // faz a chamada mesmo que tenha ocorrido erro
    console.log('final')
  }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)