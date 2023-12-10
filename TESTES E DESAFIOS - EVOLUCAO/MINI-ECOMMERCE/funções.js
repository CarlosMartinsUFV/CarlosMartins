import {
  arrayObjetos,
  produtoEscolhido,
  quant,
  botaoSubmeter,
  semValores,
  campoValor,
  botaoCalcular,
  campoCEP,
  frete,
  total,
  secundario,
  camposFrete,
  cepInvalido
} from './constantes.js'

export default function comprarItens() {
  const valorRetornado = async function calcularValores() {
    if (produtoEscolhido.value && quant.value) {
      const aguardarSelecao = await acharValores()
      const valorSelecionado = aguardarSelecao
      const valorxPreco = arrayObjetos[valorSelecionado].valor * quant.value
      campoValor.innerText = valorxPreco
      semValores.innerText = ''
      secundario.classList.add('ativo')
      camposFrete.classList.add('ativo')

      return valorxPreco
    } else semValores.innerText = 'Escolha o produto e a quantidade de itens!'
  }

  function acharValores() {
    let valorProd = produtoEscolhido.value
    if (valorProd.length > 0) {
      return valorProd
    }
  }

  function valorFrete() {
    const recorteCEP = campoCEP.value.slice(0, 2)

    if (!produtoEscolhido.value || !quant.value) {
      total.innerText = '0'
      campoValor.innerText = ''
      cepInvalido.innerText = ''
    } else if (campoCEP.value.length === 8) {
      if (recorteCEP >= '01' && recorteCEP <= '39') {
        frete.innerText = 10

        total.innerText = +campoValor.textContent + 10
        cepInvalido.innerText = ''
      } else if (recorteCEP >= '80' && recorteCEP <= '99') {
        frete.innerText = 20
        cepInvalido.innerText = ''

        total.innerText = +campoValor.textContent + 20
      } else if (recorteCEP >= '66' && recorteCEP <= '77') {
        frete.innerText = 30
        cepInvalido.innerText = ''

        total.innerText = +campoValor.textContent + 30
      } else if (recorteCEP >= '70' && recorteCEP <= '79') {
        frete.innerText = 40
        cepInvalido.innerText = ''

        total.innerText = +campoValor.textContent + 25
      } else if (recorteCEP >= '40' && recorteCEP <= '65') {
        frete.innerText = 30
        cepInvalido.innerText = ''

        total.innerText = +campoValor.textContent + 30
      }
    } else {
      cepInvalido.innerText = 'Coloque um valor de CEP válido!'
      frete.innerText = '!'
      total.innerText = '!'
    }
  }

  produtoEscolhido.addEventListener('change', acharValores)
  botaoSubmeter.addEventListener('click', valorRetornado)
  botaoCalcular.addEventListener('click', valorFrete)
}
