// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const cep = document.querySelector('.CEP')
const botao = document.querySelector('.botao')
const campo = document.querySelector('.retorno')
/*
botao.addEventListener('click', () => {
  fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    .then(response => response.json())
    .then(cep => {
      campo.innerText =
        cep.logradouro +
        ', ' +
        cep.bairro +
        ', ' +
        cep.localidade +
        ' - ' +
        cep.uf
      console.log(cep)
    })
})*/

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// function ativarValores() {
//   fetch('https://blockchain.info/ticker')
//     .then(r => r.json())
//     .then(r2 => {
//       console.log(r2.BRL)
//       campo.innerText = `O valor de compra é ${r2.BRL.buy}`
//     })
// }

// setInterval(ativarValores, 10000)

// botao.addEventListener('click', ativarValores)

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

botao.addEventListener('click', () => {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(piada => {
      campo.innerText = piada.value
    })
})
