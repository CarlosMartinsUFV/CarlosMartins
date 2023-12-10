const items = document.querySelectorAll('.item')
const campo = document.querySelector('.campo')
// const itensArray = [...items]
let arrayElementos = []
let atributos = []

function adicionarClasseVermelha() {
  items.forEach(item => {
    if (item.id == atributos[0]) {
      item.classList.add('vermelho')
    } else if (item.id == atributos[1]) {
      item.classList.add('vermelho')
    }
  })
}

function adicionarClasse() {
  items.forEach(item => {
    if (item.innerText == arrayElementos[0]) {
      item.classList.add('ativo')
    }
  })
}

function compararElementos() {
  if (arrayElementos[0] === arrayElementos[1]) {
    adicionarClasse()
  } else if (
    arrayElementos.length == 2 &&
    arrayElementos[0] !== arrayElementos[1]
  ) {
    adicionarClasseVermelha()
  }
}

function adicionarElemento(e) {
  atributos.push(e.target.getAttribute('id'))

  if (atributos[0] !== atributos[1]) {
    arrayElementos.push(+e.target.innerText)
    compararElementos()
  } else {
    alert('Mesmo valor')
    location.reload()
  }
}

campo.addEventListener('click', adicionarElemento)
