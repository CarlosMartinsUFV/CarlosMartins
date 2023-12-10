// retorne no console todoas as imagens do site

const todasimagens = document.querySelectorAll('img')
console.log(todasimagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const palavraImagem = document.querySelectorAll('img[src^="./img/imagem"]')

console.log(palavraImagem)
// Selecione todos os links internos (onde o href começa com #)

const linkInterno = document.querySelectorAll('[href^="#"]')
console.log(linkInterno)

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroh2 = document.querySelector('.animais-descricao h2')
console.log(primeiroh2.innerHTML)

/* ou
const primeiroh2 = document.querySelectorAll('.animais-descricao h2')
 console.log(primeiroh2[0].innerHTML)*/

// Selecione o último p do site
const ultimop = document.querySelectorAll('p')
console.log(ultimop[ultimop.length - 1].innerText)

/* ou 
const ultimop = document.querySelectorAll('p')
console.log(ultimop[24])*/
