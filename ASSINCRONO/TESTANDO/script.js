let arrayValores = []

function somarValores(valorEmDolar) {
  const valorPorVenda = (valorEmDolar / 1000).toFixed(2)

  arrayValores.push(valorPorVenda)

  let somaTotal = arrayValores.reduce((ac, at) => {
    return +ac + +at
  }, 0)
  console.log(somaTotal)
}

async function retornarValores() {
  const soma = await fetch('https://blockchain.info/ticker')
  const valores = await soma.json()

  let valorEmDolar = valores.USD.last

  console.log(valorEmDolar)

  valorEmDolar > 41700 ? somarValores(valorEmDolar) : ''
}

setInterval(retornarValores, 15000)
