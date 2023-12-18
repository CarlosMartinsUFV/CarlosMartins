export default function initiTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
  const tabContent = document.querySelectorAll('[data-tab="content"] section')

  if (tabMenu.length && tabContent.length) {
    // para evitar erros de quando a classe não existir. Digitar errado, por exemplo, ao selecionar a variável. O if garante que o código não vai "bugar" a página e atrapalhar o restante do trabalho

    //O lenght serve para verificar quantos itens tem. Se não tiver items, a condição se torna falsa..Ai, o IF se torna false
    tabContent[0].classList.add('ativo') // ter  um item  inicial pra começar, se não a pagina fica em branco

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