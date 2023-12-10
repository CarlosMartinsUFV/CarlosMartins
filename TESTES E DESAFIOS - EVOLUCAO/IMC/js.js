const botao = document.querySelector('.calculo')
const resultado = document.querySelector('.resultado')

let peso = ''
let altura = ''

function calcularIMC() {
  peso = document.querySelector('.peso-atribuido').value
  altura = document.querySelector('.altura-atribuida').value

  let result = (resultado.innerText = (peso / altura ** 2).toFixed(2))

  resultado.className = 'resultado'

  if (result < 18.5) {
    resultado.classList.add('baixo-peso')
  } else if (result >= 18.5 && result <= 24.9) {
    resultado.classList.add('normal-peso')
  } else if (result >= 25 && result <= 29.9) {
    resultado.classList.add('sobre-peso')
  } else if (result >= 30 && result <= 34.9) {
    resultado.classList.add('obesidade')
  } else {
    resultado.classList.add('morbida')
  }
}
// console.log(+peso / +(altura ** 2))
