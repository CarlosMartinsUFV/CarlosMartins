const lista = document.querySelectorAll('li')
const texto = document.querySelector('.texto')
const conteudo = document.querySelectorAll('.js-content')
const campo = document.querySelector('.principal')

function adicionarCampo(index) {
  conteudo.forEach(section => {
    section.classList.remove('ativo')
  })

  conteudo[index].classList.add('ativo')

  campo.classList.add('ativo')
}

lista.forEach((e, index) => {
  e.addEventListener('click', () => adicionarCampo(index))
})

// const lista = document.querySelectorAll('li')
// const main = document.querySelectorAll('[data-section="section"]')
// const campo = document.querySelector('.campo')
// const texto = document.querySelector('.texto')

// function adicionarCampo(index) {
//   texto.classList.add('ativo')

//   // DEPOIS DE UM TEMPO, A CLASSE ATIVO É REMOVIDA DO texto. ASSIM A ANIMAÇÃO PODE OCORRER NOVAMENTE QUANDO CLICAR EM OUTRO ITEM DA LISTA

//   setTimeout(() => texto.classList.remove('ativo'), 3000)

//   texto.innerHTML = main[index].innerHTML
// }

// // EVENTO PARA CADA CLIQUE NO ITEM DA LISTA
// lista.forEach((e, index) => {
//   e.addEventListener('click', () => adicionarCampo(index))
// })
