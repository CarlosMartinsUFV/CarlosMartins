// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

function criarElementos() {
  const lista = document.createElement('ul')

  const itensLista = document.createElement('li')
  itensLista.innerText = 'Item1'
  lista.appendChild(itensLista)

  const itensLista2 = document.createElement('li')
  itensLista2.innerText = 'Item2'
  lista.appendChild(itensLista2)

  const itensLista3 = document.createElement('li')
  itensLista3.innerText = 'Item3'
  lista.appendChild(itensLista3)

  const itensLista4 = document.createElement('li')
  itensLista4.innerText = 'Item4'
  lista.appendChild(itensLista4)

  document.body.appendChild(lista)

  const ItensClass = [...document.querySelectorAll('li')]

  for (const item of ItensClass) {
    item.classList.add('Item-Lista')
  }
}

criarElementos()

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for (const obj in window) {
  console.log(obj, window[obj])
}
