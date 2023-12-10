// Crie uma função que verifique
// corretamente o tipo de dado

const frutas = ['Banana', 'Uva']

function verificarTypeof(elemento) {
  return Object.prototype.toString.call(elemento)
}

verificarTypeof(frutas)

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {}

Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    configurable: false,
    writable: false
  }
})

// quadrado.lados = 5 Não mudou, pois adicionamos "false"

// Object.freeze(quadrado) tbm dá

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao)

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(Array))

Object.getOwnPropertyNames(String)
