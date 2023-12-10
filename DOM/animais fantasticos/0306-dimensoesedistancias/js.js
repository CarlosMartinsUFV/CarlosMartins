/*

const section = document.querySelector('.animais')

section.clientHeight


// Distância entre o topo do elemento e o topo da página
section.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section.offsetLeft;
*/

/*
const primeiroh2 = document.querySelector('h2')
const h2left = primeiroh2.offsetLeft

console.log(h2left)

const rect = primeiroh2.getBoundingClientRect()
rect.height // height do elemento
rect.width // width do elemento
rect.top // distância entre o topo do elemento e o scroll

console.log(rect)*/

/*window.innerWidth // width do janela
console.log(innerWidth)
window.outerWidth // soma dev tools também
console.log(outerWidth)
window.innerHeight // height do janela
console.log(innerHeight)

window.outerHeight // soma a barra de endereço
console.log(outerHeight)

window.pageYOffset // distância total do scroll vertical
window.pageXOffset // distância total do scroll horizontal

if (window.innerWidth < 200) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 200px')
}*/

// JEITO CORRETO DE MEdIR A TELA matchMedia()

// const small = window.matchMedia('(max-width: 600px)')

/*if (small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('tela maior que 600px')
}*/

//ou

/*small.matches
  ? console.log('Tela menor que 600px')
  : console.log('Tela maior que 600px')*/

//EXERCICIOS

// Verifique a distância da primeira imagem  em relação ao topo da página

// FIZ DE UM MODO QUE PEGA A DISTANCIA DE QQR IMAGEM

/*const section = document.querySelectorAll('.animais-lista img')

console.log(section)

const dist = section[0].offsetTop

console.log(dist)*/

//ou

/*const section = document.querySelectorAll('.animais-lista img')

console.log(section)

// console.log(dist)

section.forEach(section => {
  console.log(section.offsetTop)
})*/

// Retorne a soma da largura de todas as imagens

/*
function somarImagens() {
  const section = document.querySelectorAll('img')
  let sum = 0

  section.forEach(e => {
    sum += e.offsetWidth
    //console.log(e.offsetWidth)
  })
  console.log(sum)
}

window.onload = function () {
  somarImagens()
}*/

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

/*
function verificarLinks() {
  const links = document.querySelectorAll('a')

  links.forEach(e => {
    const linkWidth = e.offsetWidth
    const linkHeight = e.offsetHeight

    console.log(linkWidth)
    console.log(linkHeight)

    if ((linkWidth && linkHeight) >= 48) {
      console.log('Atende')
    } else {
      console.log('Não atende')
    }
  })
}

window.onload = function () {
  verificarLinks()
}*/

function verificarbrowser() {
  const navegador = window.matchMedia('(max-width: 1000px)')
  const menu = document.querySelector('.menu')

  if (navegador.matches) {
    menu.classList.add('menu-mobile')
  } else {
    console.log('Não é menor')
  }
}

window.onload = function () {
  verificarbrowser()
}

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
