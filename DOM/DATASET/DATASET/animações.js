function initiTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
  const tabContent = document.querySelectorAll('[data-tab="content"] section')

  if (tabMenu.length && tabContent.length) {
    // para evitar erros de quando a classe não existir. Digitar errado, por exemplo, ao selecionar a variável. O if garante que o código não vai "bugar" a página e atrapalhar o restante do trabalho

    //O lenght serve para verificar quantos itens tem. Se não tiver items, a condição se torna falsa..Ai, o IF se torna false
    tabContent[0].classList.add('ativo') // ter um item  inicial pra começar, se não a pagina fica em branco

    function activeTab(index) {
      tabContent.forEach(section => {
        section.classList.remove('ativo')
      })

      const direcao = tabContent[index].dataset.anime

      tabContent[index].classList.add('ativo', direcao)
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', function () {
        activeTab(index)
      }) // nesse caso deve-se passar o  index na função, pois o index está de fora do addEventListener
    })
  }
}

initiTabNav()

function initAccordion() {
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

initAccordion()

function initScrollSuave() {
  const LinksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  )

  function scrollToSection(e) {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href') // pode usar o this tbm

    const section = document.querySelector(href)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })

    // forma alternativa
    // const topo = section.offsetTop

    //  window.scrollTo({ top: topo, behavior: 'smooth' })
  }

  LinksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection)
  })
}

initScrollSuave()

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]')

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.45

    function animaScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = sectionTop - windowMetade < 0 // TRUE OU FALSE NO IF A SEGUIR

        isSectionVisible
          ? section.classList.add('ativo')
          : section.classList.remove('ativo')
      })
    }

    animaScroll() // para o site não começar "vazio"

    window.addEventListener('scroll', animaScroll)
  }
}
initAnimacaoScroll()
