//Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

/*
const cursos = document.querySelectorAll('.curso')
const Arraycursos = Array.from(cursos)

const objetosCursos = Arraycursos.map(e => {
  return {
    titulo: e.querySelector('h1').innerText,
    descrição: e.querySelector('p').innerText,
    aulas: e.querySelector('.aulas').innerText,
    horas: e.querySelector('.horas').innerText
  }
})*/

// Retorne uma lista com os
// números maiores que 100

/*
const numeros = [3, 44, 333, 23, 122, 322, 33]

const numerosMaiores = numeros.filter(e => {
  return e > 100 ? e : ''
}) */

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true

/*
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const temInstrumento = instrumentos.some(e => {
  return e === 'Baixo'
}) */

// Retorne o valor total das compras

const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

/*
const valores = compras.map(e => {
  return e.preco.replace('R$', '').replace(',', '.')
})

const valorCompras = valores.reduce((acc, cur) => {
  return +acc + +cur
}) */

// JEITO PROFESSOR

const valorCompras = compras.reduce((acc, e) => {
  const precoLimpo = +e.preco.replace('R$', '').replace(',', '.')

  return acc + precoLimpo
}, 0)
