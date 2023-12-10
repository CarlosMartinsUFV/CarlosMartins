const buttons = document.querySelectorAll('.botao')
const text = document.querySelector('.text')

var count = 0

function alterarNumero(i) {
  if (i === 0) {
    count++
    text.innerText = count
  } else if (i === 2) {
    count--
    text.innerText = count
  } else {
    text.innerText = 0
    window.location.reload()
  }

  if (count > 0) text.style.color = 'green'
  else if (count < 0) text.style.color = 'red'
  else text.style.color = 'yellow'
}

buttons.forEach((e, i) => {
  e.addEventListener('click', function () {
    alterarNumero(i)
  })
})
