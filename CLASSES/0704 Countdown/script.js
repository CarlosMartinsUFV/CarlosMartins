import Countdown from './countdown.js'

const tempoParaONatal = new Countdown('25 December 2023 23:59:59 GMT-0300')
const tempoParaAniversario = new Countdown('26 Mar 2024 23:59:59 GMT-0300')

setInterval(() => console.log(tempoParaAniversario.total), 1000)
// console.log(tempoParaONatal.total)
