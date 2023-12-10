/*const Dom = {
  selector: 'li',
  element() {
    return document.querySelector(this.selector)
  },
  ativar() {
    this.element().classList.add('ativar')
  }
} 

Dom.ativar()

Dom.selector = 'ul'
Dom.ativar()

*/

/*function Dom(selector) {
  this.element = function () {
    return document.querySelector(selector)
  }
  this.ativar = function (classe) {
    this.element().classList.add(classe)
  }
}

const li = new Dom('li')
const ul = new Dom('ul')
const lastLi = new Dom('li:last-child')

lastLi.ativar('ativar')*/

//EXERCICIOS

// Transforme o objeto abaixo em uma Constructor Function
/*const pessoa =  {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}*/

/*function Pessoa(nomeAtribuido, idadeAtribuida) {
  ;(this.nome = nomeAtribuido),
    (this.idade = idadeAtribuida),
    (this.andar = function () {
      return this.nome + ', ' + this.idade + ' anos, ' + 'andou 5km'
    })
}
const pessoa1 = new Pessoa('Carlos', 26)*/

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

/*function Pessoa(nomeAtribuido, idadeAtribuida) {
  ;(this.nome = nomeAtribuido),
    (this.idade = idadeAtribuida),
    (this.andar = function () {
      return this.nome + ', ' + this.idade + ' anos, ' + 'andou 5km'
    })
}
const pessoa1 = new Pessoa('João', 20)
const pessoa2 = new Pessoa('Maria', 25)
const pessoa3 = new Pessoa('Bruno', 15)*/

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(selector) {
  const selecao = document.querySelectorAll(selector)

  ;(this.element = selecao),
    (this.ativar = function (classe) {
      selecao.forEach(e => {
        e.classList.add(classe)
      })
    }),
    (this.remover = function (classe) {
      selecao.forEach(e => {
        e.classList.remove(classe)
      })
    })

  // this.ativar = function (classe) {
  //   this.element().classList.add(classe)
  // }
}

const li = new Dom('li')

// const ul = new Dom('ul')
//const lastLi = new Dom('li:last-child')
