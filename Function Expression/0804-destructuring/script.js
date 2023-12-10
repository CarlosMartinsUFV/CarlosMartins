// // Extraia o backgroundColor, color e margin do btn

const btn = document.querySelector('button')
const btnStyles = getComputedStyle(btn)

const { backgroundColor, color, margin } = btnStyles

// // Troque os valores das variáveis abaixo

let cursoAtivo = 'JavaScript'
let cursoInativo = 'HTML'

// ---

;[cursoAtivo, cursoInativo] = ['sasa', '232']

// cursoAtivo = 'asasa'
// cursoInativo = 'sasasasasa'

// // Corrija o erro abaixo

const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const { cor: Bobcor } = cachorro
