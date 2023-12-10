/*function Pessoa(nomeAtribuido, idadeAtribuida) {
  this.nome = nomeAtribuido
  this.idade = idadeAtribuida
}

Pessoa.prototype.andar = function () {
  return this.nome + '  andou'
}

// não tem relação com a constante andre, pois foi adicionada diretamente na função

const carlos = new Pessoa('Carlos', 26)
*/

// const pais = 'Brasil'
// const cidade = new String('Rio')

// const lista = document.querySelectorAll('li')
// const listaArray = Array.from(lista)

/*const Carro = {
  marca: 'ford',
  preço: 2100.54,
  andar() {
    return true
  }
}*/

/// EXERCÍCIOS

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade

function Pessoa(nomeAtribuido, idadeAtribuida, sobrenomeAtribuido) {
  this.nome = nomeAtribuido
  this.sobrenome = sobrenomeAtribuido
  this.idade = idadeAtribuida
}

// Crie um método no protótipo que retorne
// o nome completo da pessoa

Pessoa.prototype.completo = function () {
  return this.nome + ' ' + this.sobrenome
}

const identidade = new Pessoa('Carlos', 26, 'Martins')

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

// Liste os construtores dos dados abaixo

const li = document.querySelector('li')

li
li.click
li.innerText
li.value
li.hidden
li.offsetLeft
li.click()

// Qual o construtor do dado abaixo:
li.hidden.constructor.name
