export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
  const ActiveClass = 'ativo'
  if (accordionList.length) {
    accordionList[0].classList.add(ActiveClass)
    accordionList[0].nextElementSibling.classList.add(ActiveClass)

    function activeAccordion(e) {
      this.classList.toggle(ActiveClass)
      this.nextElementSibling.classList.toggle(ActiveClass)
    }

    accordionList.forEach(item => {
      item.addEventListener('click', activeAccordion)
    })
  }
}
