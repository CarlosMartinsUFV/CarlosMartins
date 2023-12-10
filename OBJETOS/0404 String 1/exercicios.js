//EXERCICIOSS

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

/*const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39'
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129'
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99'
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129'
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49'
  }
]

let sumT = 0
let sumR = 0

transacoes.forEach(e => {
  if (e.descricao.includes('Taxa')) {
    const valorTaxa = Number(e.valor.replace('R$ ', ''))
    sumT += valorTaxa
  } else if (e.descricao.includes('Recebimento')) {
    const valorRecebimento = Number(e.valor.replace('R$ ', ''))
    sumR += valorRecebimento
  }
})

console.log('Taxa do Mercado: ' + `${sumT}`)
console.log('Recebimento de Cliente: ' + `${sumR}`)*/

//RESOLUÇÃO PROFESSOR

/*
const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39'
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129'
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99'
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129'
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49'
  }
]
let taxaTotal = 0
let recebimentoTotal = 0

transacoes.forEach(e => {
  const numeroLimpo = +e.valor.replace('R$', '') // passar pra numero
  if (e.descricao.slice(0, 4) === 'Taxa') {
    // se usar o includes, pode ter alguma palavra "Taxa" mais pra frente da string, tipo, Recebimento da Taxa do Cliente
    taxaTotal += numeroLimpo
  } else {
    recebimentoTotal += numeroLimpo
  }
})
console.log(taxaTotal)
console.log(recebimentoTotal) */

// Retorne uma array com a lista abaixo

/*
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta'

const arrayTransportes = transportes.split(';')*/

// Substitua todos os span's por a's
/*const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`

const htmlArray = html.split('span')
const htmlNovo = htmlArray.join('a')*/

//RESOLUÇÃO PROFESSOR

/*const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`

const htmlArray = html.split('span').join('a') // depois do span, já é uma array*/

// Retorne o último caracter da frase

/*const frase = 'Melhor do ano!'

frase.charAt(frase.length - 1)

// PROFSSOR

frase.slice(-1)*/

//Retorne o total de taxas

/* não é o melhor jeito, pois pega as LINHAS que tem taxa
const transacoes = [
  'Taxa do Banco',
  '   TAXA DO PÃO',
  '  taxa do mercado',
  'depósito Bancário',
  'TARIFA especial'
]

let sumt = 0

transacoes.forEach(e => {
  const maiusculo = e.toUpperCase().trim()
  maiusculo.includes('TAXA') ? sumt++ : ''
})

console.log(sumt++)*/

// PROFESSOR

/*const transacoes = [
  'Taxa do Banco',
  '   TAXA DO PÃO',
  '  taxa do mercado',
  'depósito Bancário',
  'TARIFA especial'
]

let total = 0

transacoes.forEach(e => {
  e = e.toLowerCase()
  e = e.trim()
  e = e.slice(0, 4)

  console.log(e)
  if (e === 'taxa') {
    total++
  }
})
console.log(total)*/
