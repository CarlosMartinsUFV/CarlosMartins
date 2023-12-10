// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = 'blue', color = 'white') {
  const buttonElement = document.createElement('button')
  buttonElement.style.background = background
  buttonElement.style.color = color
  buttonElement.innerText = 'Testando'

  document.body.appendChild(buttonElement)

  return buttonElement
}

const redButton = createButton('black', 'grey')

// Utilize o método push para inserir as frutas ao final de comidas.

const frutas = ['Banana', 'Uva', 'Morango']
const comidas = ['Pizza', 'Batata']

comidas.push(...frutas)

console.log(comidas)
