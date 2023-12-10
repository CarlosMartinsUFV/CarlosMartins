export default function initScrollSuave() {
  const LinksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  )

  function scrollToSection(e) {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href') // pode usar o this tbm

    const section = document.querySelector(href)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })

    // forma alternativa
    // const topo = section.offsetTo p

    //  window.scrollTo({ top: topo, behavior: 'smooth' })
  }

  LinksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection)
  })
}

initScrollSuave()
