export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]')

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.45

    function animaScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = sectionTop - windowMetade < 0 // TRUE OU FALSE NO IF A SEGUIR

        if (isSectionVisible) section.classList.add('ativo')
        else if (section.classList.contains('ativo'))
          section.classList.remove('ativo')
      })
    }

    animaScroll() // para o site não começar "vazio"

    window.addEventListener('scroll', animaScroll)
  }
}
