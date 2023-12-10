//classList

/*const menu = document.querySelector('.menu')

 menu.className // string
 menu.classList; // lista de classes
menu.classList.add('ativo')
menu.classList.remove('azul')
menu.classList.toggle('azul')

// if (menu.classList.contains('azul')) menu.classList.add('possui-azul')

menu.classList += ' vermelho'

 menu.classList.add('ativo', 'mobile'); // duas classes

 menu.classList.toggle('ativo'); // adiciona/remove a classe
 menu.classList.contains('ativo'); // true ou false
 menu.classList.replace('ativo', 'inativo');*/

// ATRIBUTOS

/*const animais = document.querySelector('.animais')

console.log(animais.attributes['data-texto']) // quando o atributo tem HÍFEN, usar dessa forma (como string)
console.log(animais.attributes)

// animais.attributes // retorna todos os atributos
// animais.attributes[0] // retorna o primeiro atributo*/

/*

get/set atribute

const img = document.querySelector('img');

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo*/

/* const animais = document.querySelector('.animais');

animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read-only */

//exercicios

// Adicione a classe ativo a todos os itens do menu

const ItensMenu = document.querySelectorAll('.menu a')

ItensMenu.forEach(item => {
  item.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

ItensMenu.forEach((item, index) => {
  if (index != 0) {
    item.classList.remove('ativo')
  }
})

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img')

imgs.forEach(imgs => {
  // se colocar items, deve colocar items.hasAttributes('alt')
  const possui = imgs.hasAttributes('alt')
  console.log(possui)
})

// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]')

link.setAttribute('href', 'https://www.google.com/')

console.log(link.href)
