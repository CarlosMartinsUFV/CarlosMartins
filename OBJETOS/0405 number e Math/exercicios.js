// Retorne um número aleatório
// entre 1050 e 2000

// console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050)

// Retorne o maior número da lista abaixo
/*const numeros = '4, 5, 20, 8, 9'

const arraynumeros = numeros.split(', ')

Math.max(...arraynumeros) // truque */

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total

// MINHA RESOLUÇÃO

const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200']

/*function limparPreços() {
  let sum = 0
  listaPrecos.forEach(e => {
    let valores = +e
      .toUpperCase()
      .replaceAll('R$', '')
      .trim()
      .replaceAll(',', '.')
    console.log(Number(valores.toFixed(1)))
    sum += valores
  })
  console.log(sum.toFixed(1))
}

limparPreços()*/

// resolução professor

let sum = 0

function limparPreços(preco) {
  preco = +preco.toUpperCase().replaceAll('R$', '').trim().replaceAll(',', '.')
  preco = +preco.toFixed(2)
  return preco
}

listaPrecos.forEach(e => {
  sum += limparPreços(e)
})

console.log(sum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))

limparPreços(listaPrecos[0])
