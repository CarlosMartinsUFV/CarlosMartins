const a =
  '46102994000158, 41719689000196, 41142478000133, 74410408000178, 47286734000142, 7912943000130, 47875473000104, 17988054000100, 26828765000108, 30931876000112, 46079074000166, 43575967000104, 34312923000109' // CRIEI UMA VARIÁVEL COM OS CNPJ

const arraya = a.split(', ') // DIVIDI EM ARRAYS, COM O CRITÉRIO , e ""

const arrayCompleted = arraya.map(e => {
  //UTILIZEI O MAP PARA GERAR UM NOVO ARRAY, POIS ALGUNS CNPJ COMEÇAVAM COM "0" E, POR ISSO, A LENGTH ERA 13 E NÃO 14. UTILIZEI O METODO PARA PREENCHER O VAZIO COM 0, ASSIM TODOS OS ITENS ESTARÃO COM 14 CARACTERES

  const itemCompleted = e.padStart(14, '0')

  return itemCompleted
})

// A parte principal, utilizei de mais dois métodos para a resolução. No caso, o slice, que divide o item do array de acordo com o index passado. Por exemplo, no cnpj 25021140000177, quero o numero 25. Pra isso, faço, x.slice(0,2). Utilizei desse método para separar o pedaço de cada item e, depois, substituir pelo método replace. Por exemplo, substitui o 25 por 25., o 021 por 021., até formar o padrão CNPJ.

// A principal dificuldade que tive foi em relação aos retornso dos metodos, que impossibilitava de utilizar um ou mais método diferente.

const amap = arrayCompleted.map((e, i) => {
  const two = arrayCompleted[i].slice(0, 2)
  const three = arrayCompleted[i].slice(3, 5)
  const traco = '/0001-'

  e = e.replace(two, two + '.')
  e = e.replace(three, three + '.')
  e = e.replace('0001', traco)

  return e
})
