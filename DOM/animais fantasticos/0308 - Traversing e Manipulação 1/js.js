//OUTERHTML, INNERHTML E INNERTEXT

/*const menu = document.querySelector('.menu')

menu.outerHTML // todo o html do elemento
menu.innerHTML // html interno
menu.innerText // texto, sem tags

console.log(menu.innerText)

menu.innerText = '<p>Texto</p>' // a tag vai como texto
menu.innerHTML = '<p>Texto</p>' // a tag é renderizada*/

//TRASVERSING

/*const lista = document.querySelector('.animais-lista')

lista.parentElement // pai
lista.parentElement.parentElement // pai do pai
lista.previousElementSibling // elemento acima
lista.nextElementSibling // elemento abaixo

lista.children // HTMLCollection com os filhos
lista.children[0] // primeiro filho
lista.children[--lista.children.length] // último filho

lista.querySelectorAll('li') // todas as LI's
lista.querySelector('li:last-child') // último filho

console.log(lista.children[1])*/

//ELEMENT VS NODE

/*const lista = document.querySelector('.animais-lista')

lista.previousElementSibling // elemento acima
lista.previousSibling // node acima

lista.firstChild // primeiro node child
lista.childNodes // todos os node child

console.log(lista.previousSibling)*/

//MANIPULANDO ELEMENTOS

/*const lista = document.querySelector('.animais-lista')
const contato = document.querySelector('.contato')
const titulo = contato.querySelector('.titulo')

//contato.appendChild(lista) // move lista para o final de contato
//contato.insertBefore(lista, titulo) // insere a lista antes de titulo
//contato.removeChild(titulo) // remove titulo de contato
//contato.replaceChild(lista, titulo) // substitui titulo por lista*/

//NOVOS ELEMENTOS

/*
const animais = document.querySelector('.animais')

const novoH1 = document.createElement('h1')
novoH1.innerText = 'Novo Título'
novoH1.classList.add('titulo')

animais.appendChild(novoH1)

//CLONAR ELEMENTOS

const titulo = document.querySelector('h1')
const titulo2 = document.querySelector('h1')
const novoTitulo = titulo
// titulo, titulo2 e novoTitulo são iguais

const cloneTitulo = titulo.cloneNode(true)
const contato = document.querySelector('.contato')
contato.appendChild(cloneTitulo) */

// EXERCICIO

// Duplique o menu e adicione ele em copy

/*const menu = document.querySelector('.menu')

const cloneMenu = menu.cloneNode(true)

const copy = document.querySelector('.copy')

copy.appendChild(cloneMenu)*/

// Selecione o primeiro DT da dl de Faq

//RESOLUÇÃO QUE FIZ

/*const faqLista = document.querySelector('.faq-lista')

const faqListaChild = faqLista.children[0]

console.log(faqListaChild.innerHTML)*/

//RESOLUÇÃO CORRETA
/*
const faq = document.querySelector('.faq')
const primeiroDt = faq.querySelector('dt')

// Selecione o DD referente ao primeiro DT

const dd = primeiroDt.nextElementSibling

console.log(dd.innerText)*/

// Substitua o conteúdo html de .faq pelo de .animais

const faq = document.querySelector('.faq')
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML
//errado

/*const faq = document.querySelector('.faq')
const animais = document.querySelector('.animais')
const faqLista = faq.querySelector('.faq-lista')

faq.replaceChild(animais, faqLista)*/
