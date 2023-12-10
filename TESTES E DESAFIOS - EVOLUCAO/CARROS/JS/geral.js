// const itens = [
//   {
//     Marca: ' Ferrari',
//     Ano: 2023,
//     Valor: 4000000,
//     Velocidade_Máxima: '290km/h',
//     Cor: 'Vermelho'
//   },
//   {
//     Marca: ' BMW',
//     Ano: 2023,
//     Valor: 3500000,
//     Velocidade_Máxima: '240km/h',
//     Cor: 'Branco'
//   },
//   {
//     Marca: ' Ford',
//     Ano: 2023,
//     Valor: 125000,
//     Velocidade_Máxima: '150km/h',
//     Cor: 'Azul'
//   },
//   {
//     Marca: ' Peugeot',
//     Ano: 2023,
//     Valor: 2500000,
//     Velocidade_Máxima: '250km/h',
//     Cor: 'Cinza'
//   },
//   {
//     Marca: ' Honda',
//     Ano: 2023,
//     Valor: 1500000,
//     Velocidade_Máxima: '225 km/h',
//     Cor: 'Azul'
//   }
// ]

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
