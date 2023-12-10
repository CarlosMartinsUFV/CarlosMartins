// Variáveis Globais
let a = ''
let b = ''
let c = ''

const botao = document.querySelector('.calculo')

const resultado = document.querySelector('.resultado')

// Função Cálculo Bhaskara
function calcularBhaskara() {
  a = document.querySelector('.a-atribuido').value
  b = document.querySelector('.b-atribuido').value
  c = document.querySelector('.c-atribuido').value

  let delta = Math.sqrt(b ** 2 - 4 * a * c)

  let x1 = ((-b + delta) / 2) * a
  let x2 = ((-b - delta) / 2) * a

  // Números não inteiros
  let x1F = x1.toFixed(2)
  let x2F = x2.toFixed(2)

  // Condicional retorno quadro Cálculo
  if (a == '' || b == '' || c == '') {
    resultado.innerText = 'Um ou mais campos estão vázios.'
  } else if (!delta) {
    resultado.innerText = 'Não possui solução real '
  } else if (!Number.isInteger(x1) || !Number.isInteger(x2)) {
    resultado.innerText = 'x1: ' + `${x1F}` + ', x2: ' + `${x2F}`
  } else {
    resultado.innerText = 'x1: ' + `${x1}` + ', x2: ' + `${x2}`
  }
}

// Submeter
function submeterBhaskara() {
  a = document.querySelector('.a-atribuido').value
  b = document.querySelector('.b-atribuido').value
  c = document.querySelector('.c-atribuido').value

  // Condicional retorno quadro Equação
  if (b > 0) {
    resultado.innerText = `${a}` + 'x² ' + '+' + `${b}` + 'x ' + `${c}`

    if (c > 0) {
      resultado.innerText = `${a}` + 'x² ' + '+' + `${b}` + 'x ' + '+' + `${c}`
    }
  } else if (b < 0 && c > 0) {
    resultado.innerText = `${a}` + 'x² ' + `${b}` + 'x ' + '+' + `${c}`
  } else if (b < 0 && c < 0) {
    resultado.innerText = `${a}` + 'x² ' + `${b}` + 'x ' + +`${c}`
  } else resultado.innerText = 'Um ou mais campos estão vázios.'
}

window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    botao.click()
  }
})
