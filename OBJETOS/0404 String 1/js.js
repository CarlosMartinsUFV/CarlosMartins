/*const comida = 'Pizza'

const agua = new String('Água   ')*/

/*
const linguagem = 'JavaScript'

linguagem.charAt(0)
linguagem.charAt(2)
linguagem.charAt(linguagem.length - 1)*/

// CCONCATENAR
/*
const frase = 'A melhor linguagem é '
const linguagem = 'JavaScript'

const fraseCompleta = frase.concat(linguagem, '!!')

const fraseCompleta2 = ` ${frase} ${linguagem}`*/

// includes
/*const fruta = 'Banana'
const listaFrutas = 'Melancia,Banana, Abacate, Pera, Laranja'

listaFrutas.includes(fruta) // true
fruta.includes(listaFrutas) // false
listaFrutas.includes(fruta, 1) // procurar a partir do index DA LETRA*/

// Procura pela string exata dentro de outra string. A procura é case sensitive.

/*const fruta = 'Banana'

fruta.endsWith('nana') // true
fruta.startsWith('Ba') // true
fruta.startsWith('na') // false*/

//Corta a string de acordo com os valores de start e end.

/*const transacao1 = 'Depósito de cliente'
const transacao2 = 'Depósito de fornecedor'
const transacao3 = 'Taxa de camisas'

transacao1.slice(0, 3) // Dep
transacao2.slice(0, 3) // Dep
transacao3.slice(0, 3) // Tax

transacao1.slice(12)
// cliente
transacao1.slice(-4) // ente
transacao1.slice(3, 6) // ósi*/

/* STR.SUBSTRING(START, END)
 // MSM COISA QUE O SLICE
Corta a string de acordo com os valores de start e end. Não funcionar com valores negativos como o slice.



const linguagem = 'JavaScript';
linguagem.substring(3,5); // aS
linguagem.substring(0,4); // Java
linguagem.substring(4); // Script
linguagem.substring(-3); // JavaScript*/

/*STR.INDEXOF(SEARCH) E STR.LASTINDEXOF(SEARCH)
Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.*/

/*const instrumento = 'Guitarra '

const instrumento2 = 'Violão '

instrumento.indexOf('r') // 5
instrumento.lastIndexOf('r') // 6
instrumento.indexOf('ta') // 3*/

/*STR.PADSTART(N, STR) E STR.PADEND(N, STR)
Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.*/

/*const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000']

listaPrecos.forEach(preco => {
  console.log(preco.padStart(1000, '#'))
})

listaPrecos[0].padStart(10, '.') // .....R$ 99
listaPrecos[0].padEnd(10, '.') // R$ 99.....*/

//brincando

/*const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000']

listaPrecos.forEach(preco => {
  if (preco.endsWith('9')) console.log(preco + ',99')
  else console.log(preco + ',00')
})*/

/*STR.REPEAT(N)
Repete a string (n) vezes 

const frase = 'Ta'

frase.repeat(5) // TaTaTaTaTa */

/*STR.REPLACE(REGEXP|SUBSTR, NEWSTR|FUNCTION)
Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.*/

/*let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias'
listaItens = listaItens.replace(/[ ]+/g, ',')

let preco = 'R$ 1200,43 '
preco = preco.replace(',', '.') // 'R$ 1200.43'*/

// STR.SPLIT(PADRAO)
// Divide a string de acordo com o padrão passado e retorna uma array.

/*let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias'

listaItens = listaItens.replace(/[ ]+/g, ', ')

const arrayItens = listaItens.split(', ')

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>'
const htmlArray = htmlText.split('div')
const htmlNovo = htmlArray.join('section')*/

// STR.TOLOWERCASE() E STR.TOUPPERCASE()
// Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários

/*const sexo1 = 'Feminino'
const sexo2 = 'feminino' 
const sexo3 = 'FEMININO'

sexo1.toLowerCase() === 'feminino' // true
sexo2.toLowerCase() === 'feminino' // true
sexo3.toLowerCase() === 'feminino' // true */

// STR.TRIM(), STR.TRIMSTART(), STR.TRIMEND()
// Remove espaço em branco do início ou final de uma string.

/*const valor = '  R$ 23.00   '
valor.trim() // 'R$ 23.00'
valor.trimStart() // 'R$ 23.00   '
valor.trimEnd() // '  R$ 23.00' */

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

// Retorne uma array com a lista abaixo

/*
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta'

const arrayTransportes = transportes.split(';')*/
/*
// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`

const htmlArray = html.split('span')
const htmlNovo = htmlArray.join('a')*/

// Retorne o último caracter da frase

/*const frase = 'Melhor do ano!'

frase.charAt(frase.length - 1)*/

//Retorne o total de taxas

/*
const transacoes = [
  'Taxa do Banco',
  '   TAXA DO PÃO',
  '  taxa do mercado',
  'depósito Bancário',
  'TARIFA especial'
]

let sumt = 0

transacoes.forEach(e => {
  const maiusculo = e.toUpperCase()
  maiusculo.includes('TAXA') ? sumt++ : console.log('não')
})

console.log(sumt++)*/
