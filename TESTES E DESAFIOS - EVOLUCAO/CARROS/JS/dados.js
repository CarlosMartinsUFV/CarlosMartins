import { itens } from './carros.js'

export default function abrirDescricao() {
  const Marca = document.querySelector('#marca')
  const ano = document.querySelector('#ano')
  const valor = document.querySelector('#valor')
  const veloc = document.querySelector('#velocidade')
  const cor = document.querySelector('#cor')

  function DadosCarros(index) {
    Marca.innerText = itens[index].Marca
    ano.innerText = itens[index].Ano
    valor.innerText = itens[index].Valor
    veloc.innerText = itens[index].Velocidade_Máxima
    cor.innerText = itens[index].Cor
  }

  const imagens = document.querySelectorAll('img')
  const lista = document.querySelector('.lista-principal')
  const secaoPrincipal = document.querySelector('.principal-items')
  function removerClasse() {
    setTimeout(() => {
      lista.classList.remove('ativo')
    }, 2000)
  }

  imagens.forEach((imagem, index) => {
    imagem.addEventListener('click', () => {
      DadosCarros(index)
      lista.classList.add('ativo')
      removerClasse()
      secaoPrincipal.classList.add('ativo')
    })
  })
}
