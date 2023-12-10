// const cliente = {
//   nome: 'Carlos',
//   compras: {
//     digitais: {
//       livros: ['Livro 1', 'Livro 2'],
//       videos: ['Video JS', 'Video HTML']
//     },
//     fisicas: {
//       cadernos: ['Caderno 1']
//     }
//   }
// }
// const { livros, videos } = cliente.compras.digitais

// NESTING
// É possível aninhar uma desestruturação dentro de outra
// const {
//   digitais,
//   fisicas,
//   digitais: { livros, videos }
// } = cliente.compras

// console.log(livros)

// NOME DAS VARIÁVEIS
// É necessário indicar o nome da propriedade que você deseja desestruturar de um objeto. É possível mudar o nome da variável final com:

// const cliente = {
//   nome: 'Carlos',
//   compras: 10,
//   email: 'carlosmartinsufv15@gmail.com'
// }

// const { nome: NomeCarlos, email = 'carlosmartinsufv15' } = cliente

// console.log(email);

// const frutas = ['Banana', 'Uva', 'Morango']

// const [f1, f2, f3] = frutas

// console.log(f1)

// DECLARAÇÃO DE VARIÁVEIS
// A desestruturação pode servir para declararmos uma sequência de variáveis.

// const primeiro = 'Item 1'
// const segundo = 'Item 2'
// const terceiro = 'Item 3'

// const [p1, p2, p3] = ['Item 1', 'Item 2', 'Item 3']

// console.log(p2)

// ARGUMENTO DESESTRUTURADO
// Se uma função espera receber como argumento um objeto, podemos desestruturar ele no momento da declaração.

function handleKeyboard(event) {
  // console.log(event.key);
}

// Com Destructuring

function handleKeyboard({ key }) {
  console.log(key)
}

document.addEventListener('keyup', handleKeyboard)

const cliente = {
  nome: 'Carlos',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML']
    },
    fisicas: {
      cadernos: ['Caderno 1']
    }
  }
}

const { livros } = cliente.compras.digitais

function acharNome() {
  console.log(livros)
}

document.addEventListener('click', acharNome)
