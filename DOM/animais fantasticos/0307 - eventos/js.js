//const img = document.querySelector('img')

// elemento.addEventListener(event, callback, options)
/*img.addEventListener('click', function () {
  console.log('Clicou')
})*/

/*function callback() {
  console.log('Clicou')
}

img.addEventListener('click', callback) // 
img.addEventListener('click', callback()) // undefined
img.addEventListener('click', function () {
  console.log('Clicou')
})

img.addEventListener('click', () => {
  console.log('Clicou')
})
*/

/*function callback(event) {
  console.log(event)
}

img.addEventListener('click', callback)*/

/*const animaisLista = document.querySelector('.animais-lista')

function executarCallback(event) {
  const currentTarget = event.currentTarget // this
  const target = event.target // onde o clique ocorreu
  const type = event.type // tipo de evento
  const path = event.path
  console.log(currentTarget, target, type, path)
}

animaisLista.addEventListener('click', executarCallback)*/

/*const linkExterno = document.querySelector('a[href^="http"]')

function clickNoLink(event) {
  event.preventDefault()
  console.log(this.getAttribute('href'))

  console.log(event.currentTarget.href) //this e currentTarget são a msm coisa
}

linkExterno.addEventListener('click', clickNoLink)*/

/*const h1 = document.querySelector('h1')

function callback(event) {
  console.log(event.type, event)
}

 h1.addEventListener('click', callback)
 h1.addEventListener('mouseenter', callback)
 window.addEventListener('scroll', callback)
 window.addEventListener('resize', callback)

window.addEventListener('keydown', callback)*/

// CONFUSAO KKKK

/*function handleKeyboard(event) {
  if (event.key === 'p') document.body.classList.toggle('pink_orange')
  else if (event.key === 'o') document.body.classList.toggle('orange')
  else if (document.body.className === 'pink_orange') {
    document.body.classList.toggle('blue')
  } else if (document.body.className === 'orange')
    document.body.classList.toggle('green')
}

window.addEventListener('keydown', handleKeyboard)*/

//EXERCICIOS

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

/*const links = document.querySelectorAll('a[href^="#"]')

function clicarLinks(e) {
  e.preventDefault()

  links.forEach(links => {
    links.classList.remove('ativo')
  })
  e.currentTarget.classList.add('ativo') // ou this, nesse evento
}

links.forEach(links => {
  links.addEventListener('click', clicarLinks)
})*/

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

/*const allElements = document.querySelectorAll('body *')

function clicarLinks(e) {
  console.log(e.currentTarget)
}

allElements.forEach(allElements => {
  allElements.addEventListener('click', clicarLinks)
})*/

// JEITO QUE EU FIZ

/*const allElements = document.querySelectorAll('body')

function clicarLinks(e) {
  e.preventDefault()

  console.log(e.target)
}

allElements.forEach(allElements => {
  allElements.addEventListener('click', clicarLinks)
})*/

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

/*const allElements = document.querySelectorAll('body')

function clicarLinks(e) {
  e.preventDefault()
  e.target.remove()
}

allElements.forEach(allElements => {
  allElements.addEventListener('click', clicarLinks)
})*/

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

const allElements = document.querySelector('body')

console.log(allElements)

function alterarFonte(e) {
  if (e.key === 't') {
    document.documentElement.classList.toggle('aumentar')
  } else if (e.key === 'd')
    document.documentElement.classList.toggle('diminuir')
}

window.addEventListener('keydown', alterarFonte)

// function alterarFonte(e) {t
//   if (e.key === 't') {
//     allElements.style.fontSize = '45px'
//   } else if (e.key === 'd') allElements.style.fontSize = '5px'
// }
