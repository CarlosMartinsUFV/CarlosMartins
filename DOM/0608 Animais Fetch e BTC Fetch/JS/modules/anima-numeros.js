export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll('[data-numero]')

  function animaNumeros() {
    numeros.forEach(e => {
      const total = +e.innerText
      const incremento = Math.floor(total / 100)
      let start = 0

      const timer = setInterval(() => {
        start = start + incremento
        e.innerText = start
        if (start > total) {
          e.innerText = total
          clearInterval(timer)
        }
      }, 25 * Math.random())
    })
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect()
      animaNumeros()
    }
  }

  const observeTarget = document.querySelector('.numeros')

  const observer = new MutationObserver(handleMutation)

  observer.observe(observeTarget, { attributes: true })
}
