// // Remova o erro
// const priceNumber = n => console.log(+n.replace('R$', '').replace(',', '.'))
// priceNumber('R$ 99,99')
// Crie uma IIFE e isole o escopo
// de qualquer código JS.

/*
;(() => {
  console.log('a')
})()*/

// Como podemos utilizar
// a função abaixo.

const active = callback => callback()

active(function () {
  console.log('Testando')
})
