// function perimetroForma(lado, totallados = 4) {
//   const argArray = Array.from(arguments)
//   console.log(argArray)
//   return lado * totallados
// }

// perimetroForma(4, 2)

/*PARÂMETRO REST
É possível declararmos uma parâmetro utilizando ... na frente do mesmo. Assim todos os argumentos que passarmos na ativação da função, ficarão dentro do parâmetro.*/

// function anunciarGanhadores(premio, ...ganhadores) {
//   ganhadores.forEach(ganhador => {
//     console.log(ganhador + ' ganhou um ' + premio)
//   });
// }

// anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');

// function anunciarGanhadores(premio, ...ganhadores) {
//   console.log(ganhadores)
//   console.log(arguments)
// }

// anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria')

//ou

// const ganhadores = ['Carro', 'Pedro', 'Marta', 'Maria']
// const ganhadores2 = ganhadores.push('João')

// function anunciarGanhadores(premio, ...ganhadores) {
//   ganhadores.forEach(ganhador => {
//     console.log(ganhador + ' ganhou um ' + premio)
//   })
// }

// anunciarGanhadores('Carro', ...ganhadores)

// BRINCANDO - fazendo de outra forema

/*
const primeiroLugarVelho = ['Carlos', 'Lucas', 'Mateus', 'Nicolas']
const primeiroLugarNovo = primeiroLugarVelho.push('João')

function anunciarGanhadores(premio, ...ganhadores) {
  console.log(...ganhadores)
  primeiroLugar.forEach(ganhador => {
    console.log(ganhador + ' ganhou um ' + premio)
  })
}

anunciarGanhadores('carro', primeiroLugarVelho) */

// const frutass = ['Banana', 'Uva', 'Morango']
// const legumes = ['Cenoura', 'Batata']

// const comidass = [...frutass, 'Pizza', ...legumes]

// console.log(comidass)

// const todosOsNumeros = [3, 4, 5, 12, 3, 3, 24, 2, 3, 4]
// const numeroMaximo = Math.max(...todosOsNumeros)

// console.log(numeroMaximo)

// const btns = [...document.querySelectorAll('button')] // VOLTA ARRAY DIRETO

// console.log(btns)
// //ou
// const btnsArray = [...btns]

// console.log(btnsArray)
