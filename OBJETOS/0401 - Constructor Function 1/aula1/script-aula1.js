/*const carro = {
  marca: 'Marca',
  preço: 0
}

const honda = {
  marca: 'Marca',
  preço: 0
} */

/*function Carro(MarcaAtribuida, precoAtribuido) {
  this.marca = MarcaAtribuida // cria uma nova propriedade ao objeto
  this.preço = precoAtribuido // cria uma nova propriedade ao objeto
}

const honda = new Carro('Honda', 3000)
const fiat = new Carro('Fiat', 4000)*/

function Carro2(marca, precoInicial) {
  const taxa = 1.2
  const precoFinal = precoInicial * taxa
  this.marca = marca // se não tiver this, não entra na propriedade
  this.preço = precoFinal
}
const mazda = new Carro2('Mazda', 5000)
