export default function initFetchBTC() {
  fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(btc => {
      const btcPrice = document.querySelector('.btc-preco')
      btcPrice.innerText = (1000 / btc.BRL.sell).toFixed(4)
    })
    .catch(erro => {
      console.log(erro)
    })
}
