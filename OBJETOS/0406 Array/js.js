/*const instrumentos = ['Guitarra', 'Baixo', 'Violão']
const precos = [49, 99, 69, 89]

const dados = [
  new String('Tipo 1'),
  ['Carro', 'Portas', { cor: 'Azul', preco: 2000 }],
  function andar(nome) {
    console.log(nome)
  }
]

dados[2]('Ford')
dados[1][2].cor // azul*/

// CONSTRUÇÃO ARRAY

/*
const instrumentos = ['Guitarra', 'Baixo', 'Violão']
const carros = new Array('Corola', 'Mustang', 'Honda')

carros[1] // Mustang
carros[2] = 'Ferrari'
carros[10] = 'Parati'
carros.length // 11

const teste = '45,89,65,78'

const testeArray = new Array(teste) */

// transformar array

/*
let li = document.querySelectorAll('li') // NodeList
li = Array.from(li) // Array

const carros = {
  0: 'Fiat',
  1: 'Honda',
  2: 'Ford',
  length: 4 // tem que ter a proriedade LENGTH!
}

//ARRAY.ISARRAY()
Verifica se o valor passado é uma array e retorna um valor booleano.

const carrosArray = Array.from(carros)*/

/*let li = document.querySelectorAll('li'); // NodeList
Array.isArray(li); // false

li = Array.from(li); // Array
Array.isArray(li); // true */

// ARRAY.OF(), ARRAY() E NEW ARRAY()
// A palavra chave new não é necessária para utilizar o construtor Array.

/*Array.of(10) // [10] cria um array c um item
Array.of(1, 2, 3, 4) // [1,2,3,4]
new Array(5) // [,,,,] cria um array com 5 campos
Array(5) // [,,,,] cria um array com 5 campos
Array(1, 2, 3, 4) // [1,2,3,4]*/

// PROPRIEDADES E MÉTODOS DO PROTOTYPE
// [].length retorna o tamanho da array.

/*
const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3

frutas[0].length; // 6
frutas[1].length; // 4
frutas[2].length; // 2*/

// MÉTODOS MODIFICADORES [].SORT()
// Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods). Além de retornarem um valor, eles modificam a array original. [].sort() organiza a pelo unicode.

/*
const instrumentos = ['Guitarra', 'Baixo', 'Violão']
instrumentos.sort()
instrumentos // ['Baixo', 'Guitarra', Violão]

const idades = [32, 21, 33, 43, 1, 12, 8] 
// NÃO COLOCA NA ORDEM CRESCENTE quando é numero. O método analisa unicode por unicode
idades.sort()
idades // [1, 12, 21, 32, 33, 43, 8]*/

// .UNSHIFT() E [].PUSH()

// [].unshift() adiciona elementos ao início da array e retorna o length da mesma. [].push() adiciona elementos ao final da array e retorna o length da mesma.

/*
const carros = ['Ford', 'Fiat', 'VW']
carros.unshift('Honda', 'Kia') // 5
carros // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros.push('Ferrari') // 6
carros // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];*/

// [].SHIFT() E [].POP()
// [].shift() remove o primeiro elemento da array e retorna o mesmo. [].pop() remove o último elemento da array e retorna o mesmo.

/* const carros = ['Ford', 'Fiat', 'VW', 'Honda']
const primeiroCarro = carros.shift() // 'Ford'
carros // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros.pop() // 'Honda'
carros // ['Fiat', 'VW'];*/

// [].REVERSE()
// [].reverse() inverte os itens da array e retorna a nova array.

/*
const carros = ['Ford', 'Fiat', 'VW', 'Honda']
carros.reverse() // ['Honda', 'VW', 'Fiat', 'Ford'];*/
