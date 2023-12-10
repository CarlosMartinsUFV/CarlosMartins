// [].FOREACH()
// [].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original).

/*
const carros = ['Ford', 'Fiat', 'Honda']
carros.forEach(function (item, index, array) {
  console.log(item.toUpperCase())
})

// com Arrow Function
carros.forEach((item, index, array) => {
  console.log(item.toUpperCase())
} */

/*const li = document.querySelectorAll('li')

li.forEach(function (item) {
  item.classList.remove('ativa')
})

li.forEach(i => i.classList.add('ativa'))

MODIFICAR A ARRAY ORIGINAL
O terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original.


const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach((item, index, array) => {
  array[index] = 'Carro ' + item;
});

carros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']*/

/*[].MAP()
[].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.*/

/*
const carros = ['Ford', 'Fiat', 'Honda']
const newCarros = carros.map((item, index, array) => {
  return item, array
})
carros // ['Ford', 'Fiat', 'Honda']
newCarros // ['Carro Ford', 'Carro Fiat', 'Carro Honda'];

const array = '25, 46, 75'
const novoarray = array.split(', ')*/

// [].MAP() VS [].FOREACH()
// Se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores.

// [].MAP() COM OBJETOS
// Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.

/*

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min);
// [15, 10, 20, 25];

const puxarNomes = aula => aula.nome;
const nomesAulas = aulas.map(puxarNomes);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1'] */

// [].REDUCE()

// [].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.

/*
const aulas = [10, 25, 30];
const total1 = aulas.reduce((acumulador, atual) => {
  return acumulador + atual;
});
total1; // 65

const total2 = aulas.reduce((acc, cur) => acc + cur, 100);
total2; // 165
*/

//MAIOR VALOR COM [].REDUCE()

/*
const numeros = [10, 25, 60, 5, 35, 10]

const maiorValor = numeros.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior
})

maiorValor // 60 */

// PODEMOS RETORNAR OUTROS VALORES

/*
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]


const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {})


// 1
aulas.reduce(({}, {nome: 'HTML 1', min: 15}, 0) => {
  {}[0] = 'HTML 1';
  return {0: 'HTML 1'};
}, {})

// 2
aulas.reduce(({0: 'HTML 1'}, {nome: 'HTML 2', min: 10}, 1) => {
  {0: 'HTML 1'}[1] = 'HTML 2';
  return {0: 'HTML 1', 1: 'HTML 2'};
}, {})

// 3
aulas.reduce(({0: 'HTML 1', 1: 'HTML 2'}, {nome: 'CSS 1', min: 20}, 2) => {
  {0: 'HTML 1', 1: 'HTML 2'}[2] = 'CSS 1';
  return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'};
}, {})

// 4
aulas.reduce(({0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}, {nome: 'JS 1', min: 25}, 3) => {
  {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}[3] = 'JS 1';
  return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'};
}, {})

*/

// [].REDUCERIGHT()
// Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direit

/*const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva */

// [].SOME()
// [].some(), se pelo menos um return da iteração for truthy, ele retorna true.

/*const frutas = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas.some((fruta) => {
  return fruta === 'Uva';
}); // true

function maiorQue100(numero) {
  return numero > 100;
}
const numeros = [0, 43, 22, 88, 101, 2];
const temMaior = numeros.some(maiorQue100); // true
*/

/*
const numeros = [1000, 124, 1544, 322, 545]

const existeNumero = numeros.some(e => {
  return e > 6000
}) */

// [].EVERY()
// [].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.

/*
const frutas = ['Banana', 'Pêra', 'Uva', '']
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas.every(fruta => {
  return fruta // false
})

const numeros = [6, 43, 22, 88, 101, 29]
const maiorQue3 = numeros.every(x => x > 3) // true*/

// [].FIND() E [].FINDINDEX()
// [].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array

/*
const frutas = ['Banana', 'Pêra', 'Uva', 'Maçã']
const buscaUva = frutas.findIndex(fruta => {
  return fruta === 'Uva'
}) // 2

const numeros = [6, 43, 22, 88, 101, 29]
const buscaMaior45 = numeros.find(x => x > 45) // 88*/

// [].FILTER()
// [].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.

/*
const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã']
const arrayLimpa = frutas.filter(fruta => {
  return fruta
}) // ['Banana', 'Uva', 'Maçã']


const numeros = [6, 43, 22, 88, 101, 29]
const buscaMaior45 = numeros.filter(x => x > 45) // [88, 101] */

/*
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  }
]

const aulasMaiores = aulas.filter(aula => {
  return aula.min > 15
})

//BRINCANDO.. O foreach pode retornar um array, novo, se colocarmos o terceiro argumento, "array"..mas é melhor fazer com o MAP
// [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]

// aulas.forEach((e, i, array) => {
//   array[i] = 'JS-' + e.nome
// })

// console.log(aulas)

// aulas.map(e => {
//   e.nome = 'JS-' + e.nome
//   return
// })

const numeros = [10, 25, 60, 5, 35, 10]

const numerosPar = numeros.filter(e => {
  if (e % 2 === 0) return e
}) */
