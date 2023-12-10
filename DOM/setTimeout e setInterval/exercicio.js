// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// function mudarClasse() {
//   document.body.classList.toggle('ativar')
// }

// setInterval(mudarClasse, 2000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const num = document.querySelector('p')

let i = 1

let tempo

iniciar.addEventListener('click', () => {
  tempo = setInterval(() => {
    console.log((num.innerText = i++))
  }, 500)
  iniciar.setAttribute('disabled', '')
})

pausar.addEventListener('click', () => {
  clearInterval(tempo)

  iniciar.removeAttribute('disabled', '')
})
pausar.addEventListener('dblclick', () => {
  num.innerText = 0
  i = 1
})
