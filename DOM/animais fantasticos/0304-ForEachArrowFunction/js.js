/* const imgs = document.querySelectorAll('img')

imgs.forEach(function (item, index, array) {
  //console.log(item, index, array)
})*/

const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos) //transformar em array

/*titulosArray.forEach(function (item) {
  console.log(item)
})*/

// titulosArray.forEach(item => {
//   console.log(item)
// })

/* titulosArray.forEach((item, index) => {
  const i = item.innerHTML
  const z = index

  if (z === 1) {
    console.log(`O Z é ${z} e o i é ${i}`)
    return
  }
  console.log(i, z)
})*/

// Mostre no console cada parágrado do site

// const paragrafos = document.querySelectorAll('p')

// paragrafos.forEach(item => console.log(item))

// // Mostre o texto dos parágrafos no console

// const paragrafosArray = Array.from(paragrafos)

// paragrafosArray.forEach(item => console.log(item.innerText))

// Como corrigir os erros abaixo:

const imgs = document.querySelectorAll('img')

// imgs.forEach((item, index) => {
//   console.log(item, index)
// })

let i = 0
imgs.forEach(() => {
  console.log(i++)
})

imgs.forEach(() => console.log(i++))
