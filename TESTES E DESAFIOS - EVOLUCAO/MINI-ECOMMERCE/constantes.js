export {
  arrayObjetos,
  produtoEscolhido,
  quant,
  botaoSubmeter,
  semValores,
  campoValor,
  campoCEP,
  botaoCalcular,
  frete,
  total,
  secundario,
  camposFrete,
  cepInvalido
}

const arrayObjetos = {
  Notebook: { Peso: 2, valor: 2500 },

  Celular: {
    peso: 0.3,
    valor: 1800
  },
  Bicicleta: {
    peso: 20,
    valor: 1100
  },
  Televisor: {
    peso: 15,
    valor: 1500
  },
  VideoGame: {
    peso: 0.7,
    valor: 4000
  }
}

const produtoEscolhido = document.querySelector('#produtos')
const quant = document.querySelector('#quantidade')
const botaoSubmeter = document.querySelector('.submeter')
const semValores = document.querySelector('#semValorItens')
const campoValor = document.querySelector('.valorParcial')
const campoCEP = document.querySelector('.CampoCEP')
const botaoCalcular = document.querySelector('.calcularValorFinal')
const frete = document.querySelector('.frete')
const total = document.querySelector('.total')
const secundario = document.querySelector('.secundario')
const camposFrete = document.querySelector('.camposFrete')
const cepInvalido = document.querySelector('.cepValido')
