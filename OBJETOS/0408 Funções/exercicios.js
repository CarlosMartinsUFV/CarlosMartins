// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce,

//meu jeito

/*
const paragrafos = document.querySelectorAll('p')
const paragrafosArray = Array.from(paragrafos)

paragrafosArray
  .map(e => {
    return e.innerText.length
  })
  .reduce((acc, cur) => {
    return acc + cur
  }) // 655 */

// jeito professor

/*
const paragrafos = document.querySelectorAll('p')

const totalCaracteres = Array.prototype.reduce.call(
  paragrafos,
  (acc, item) => {
    return acc + item.innerText.length
  },
  0
)

console.log(totalCaracteres)*/

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

/*
function NovosElementos(tag, classe, conteudo) {
  const elemento = document.createElement(tag)

  classe ? elemento.classList.add(classe) : ''
  conteudo ? (elemento.innerHTML = conteudo) : ''

  return elemento
} console.log(NovosElementos('li', 'verde', 'shauisasas'))
 */

// const novosElem = new NovosElementos()
// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

/*
const section = document.querySelector('section')

const p = document.querySelector('p')

function NovosElementos(tag, classe, conteudo) {
  const elemento = document.createElement(tag)

  classe ? elemento.classList.add(classe) : ''
  conteudo ? (elemento.innerHTML = conteudo) : ''

  return elemento
}

const h1Titulo = NovosElementos.bind(null, 'h1', 'titulo')

const novo = h1Titulo('Descrição Lobo')

section.insertBefore(novo, p)*/

/*
const modelo = {
  marca: '',
  ano: '',
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`
  }
}

const honda = {
  marca: 'Honda',
  ano: 2022
}

const acelerarHonda = modelo.acelerar.bind(honda)

acelerarHonda(150, 10)
 */
