const quadrado = document.querySelector('.quadrado')
const html = document.documentElement

function mudarCor() {
  quadrado.classList.add('ativo')
  html.addEventListener('click', handleOutside)
}

function handleOutside() {
  quadrado.classList.remove('ativo')
}
quadrado.addEventListener('click', mudarCor)
