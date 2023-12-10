//PART1 DADOS

//Esse exercicio foi mais chato, pois tive que utilizar diversos arrays e manipulação DOM

// Primeiro, defeni as "letras", salvando na variável dadosLetras. Poderia ter criado letras aleatórias também, porém, achei que seria mais trabalhoso. Apenas queria algo mais simples

const dadosLetras = [
  ' Zu',
  ' Ze ',
  ' Da ',
  ' Za ',
  ' Y6 ',
  ' N7 ',
  ' H1 ',
  ' U6 ',
  ' I5 ',
  ' T3 ',
  ' Y7 ',
  ' O6 ',
  ' F4 ',
  ' G2 ',
  ' A6 ',
  ' Z1 ',
  ' Q7 ',
  ' I9 ',
  ' R3 ',
  ' X6 ',
  ' N4 ',
  ' N1 ',
  ' N2 ',
  ' O1 ',
  ' O3 ',
  ' O7 ',
  ' O9 ',
  ' F8 ',
  ' F1 ',
  ' F3 ',
  ' Z4 ',
  ' Zm '
]

//Após isso, criei váriaveis sem valores específicos, pois, quero que as letras que aparecem na tela sejam de forma aleatória.
let rd1 = dadosLetras[Math.floor(Math.random() * 32)]
let rd2 = dadosLetras[Math.floor(Math.random() * 32)]
let rd3 = dadosLetras[Math.floor(Math.random() * 32)]
let rd4 = dadosLetras[Math.floor(Math.random() * 32)]
let rd5 = dadosLetras[Math.floor(Math.random() * 32)]
let rd6 = dadosLetras[Math.floor(Math.random() * 32)]
let rd7 = dadosLetras[Math.floor(Math.random() * 32)]
let rd8 = dadosLetras[Math.floor(Math.random() * 32)]
let rd9 = dadosLetras[Math.floor(Math.random() * 32)]
let rd10 = dadosLetras[Math.floor(Math.random() * 32)]
let rd11 = dadosLetras[Math.floor(Math.random() * 32)]
let rd12 = dadosLetras[Math.floor(Math.random() * 32)]
let rd13 = dadosLetras[Math.floor(Math.random() * 32)]
let rd14 = dadosLetras[Math.floor(Math.random() * 32)]
let rd15 = dadosLetras[Math.floor(Math.random() * 32)]

// Nas váriaveis abaixo, em forma de array, salvei as variáveis random.
let c1 = [rd1, rd2, rd3, rd4, rd5]
let c2 = [rd6, rd7, rd8, rd9, rd10]
let c3 = [rd11, rd12, rd13, rd14, rd15]

// A const principal é onde está a senha, ou seja, as letras que serão comparadas. No caso, "Ze", "Da", "Za"

const principal = [dadosLetras[1], dadosLetras[2], dadosLetras[3]]

// PARTE 2

// Aqui começou a manipulação do DOM.

// Criei uma variável Array, que armazena todas as seleções dos campos.

const campos = [
  document.querySelector('.campo-1'),
  document.querySelector('.campo-2'),
  document.querySelector('.campo-3')
]

// Essa variável é a DIV que circula os campos. Através dela criei o envento de click para todas as variáveis, utilizando o foreach. O código está no final

let campoGeral = document.querySelectorAll('.js-campogeral')

// Criei essa variável array para armazenar e manipular o DOM. Cada campo corresponde ao conjunto de variáveis. Elas aparecem na tela.

let arrayCampos = [
  (campos[0].innerText = c1),
  (campos[1].innerText = c2),
  (campos[2].innerText = c3)
]

// Aqui está a função principal. Essa função é um callback de outra função, que está no final do código.
//Nessa, comparei através do foreach cada item da const principal com as letras que aparecem na tela. Utilizei o método includes(). Quando for true, será enviado um comando para a criação da classe ativo no HTML, no campo correspondente. Por isso utilizei de muitos arrays no código, pois, cada um está "amarrado" ao outro. Criada a classe, o CSS é ativado, alterando o background

function verificarLetra(i) {
  principal.forEach(e => {
    if (arrayCampos[i].includes(e)) {
      campos[i].classList.add('ativo')
    }
  })
}

// Essa função é para remover as classes ativos e recarregar a página. Em outras palavras, limpar

function retornar() {
  campoGeral.forEach(e => {
    e.classList.remove('ativo')
  })

  window.location.reload()
}

// Esse forEach foi para adicionar os eventos no campo e chamar a função principal
campoGeral.forEach((e, i) => {
  e.addEventListener('click', function () {
    verificarLetra(i)
  })
})

// MÉTODO FEITO ANTERIORMENTE

//PRIMEIRO MÉTODO, que deu certo. Fiz uma função para cada campo. Tentei otimizar de outra forma, saindo o código descrito acima.

// principal.forEach(e => {
//   verificarLetra(e)
// })

/*
function verificarLetra() {
  principal.forEach(e => {
    if (c1.includes(e)) {
      dcampo1.classList.add('ativo')
    }
    // window.location.reload()
  })
}
function verificarLetra2() {
  principal.forEach(e => {
    if (c2.includes(e)) {
      dcampo2.classList.add('ativo')
    }
    // window.location.reload()
  })
}
function verificarLetra3() {
  principal.forEach(e => {
    if (c3.includes(e)) {
      dcampo3.classList.add('ativo')
    }
    // window.location.reload()
  })
}
*/
//
