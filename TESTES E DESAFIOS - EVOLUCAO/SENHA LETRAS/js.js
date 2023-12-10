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

const carros = ['Ford', 'Fiat', 'Honda']
const newCarros = carros.map((item, index, array) => {
  return item, array
})
carros // ['Ford', 'Fiat', 'Honda']
newCarros // ['Carro Ford', 'Carro Fiat', 'Carro Honda'];

const array = '25, 46, 75'
const novoarray = array.split(', ')

const arrayNumber = novoarray.map(e => +e)

const nomes =
  'carlos, livia, elisa, lucas, arthur, david, carlos, hudson, livia, lucas, graci, grazi'

const nomesarray = nomes.split(', ')

const novaarrayNomes = nomesarray.map(e => {
  let ind = nomesarray.indexOf('carlos')
  if (ind) {
    e.splice(ind, 1)
  }
})
