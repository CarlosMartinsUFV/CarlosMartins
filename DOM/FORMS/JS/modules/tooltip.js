export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]')

  tooltips.forEach(e => {
    e.addEventListener('mouseover', onMouseOver)
  })

  function onMouseOver(e) {
    const tooltipBox = criarTooltipBox(this)

    onMouseMove.tooltipBox = tooltipBox
    this.addEventListener('mousemove', onMouseMove)

    onMouseLeave.tooltipBox = tooltipBox
    onMouseLeave.element = this

    this.addEventListener('mouseleave', onMouseLeave)
  }

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text
    document.body.appendChild(tooltipBox)
    return tooltipBox
  }
}

// OBJETOS

const onMouseLeave = {
  handleEvent() {
    this.tooltipBox.remove()
    this.removeEventListener('mouseleave', onMouseLeave)
    this.removeEventListener('mousemove', onMouseMove)
  }
}

const onMouseMove = {
  handleEvent(e) {
    this.tooltipBox.style.top = e.pageY + 20 + 'px'
    this.tooltipBox.style.left = e.pageX + 20 + 'px'
  }
}
