function Produto(nome, preco,
	descricao, imagem,
	disponivel, avaliacao,
	caracteristicas, tags, porcentagemDesconto
) {
	this.nome = nome;
	this.preco = preco;
	this.descricao = descricao
	this.imagem = imagem;
	this.disponivel = disponivel;
	this.avaliacao = avaliacao
	this.caracteristicas = caracteristicas
	this.tags = tags;
	this.porcentagemDesconto = porcentagemDesconto;

	this.imprimeTags = function() {
		this.tags.forEach((currentTag) => {
			console.log(currentTag);
		})
	};

	this.imprimeCaracteristicas = function() {
		console.log(this.caracteristicas.join(", "));
	};

	this.getPrecoDesconto = function() {
		return this.preco * (this.porcentagemDesconto == 0 ? 1 : this.porcentagemDesconto / 100)
	}

	this.getPrecoFinal = function() {
		return this.preco - this.getPrecoDesconto()
	};

	this.imprimePrecoComDesconto = function() {
		console.log(`R$ ${this.getPrecoFinal()} ${this.porcentagemDesconto==0?"":"(Desconto de " + this.porcentagemDesconto + "%)"}`)
	};
}

let produto1 = new Produto(
  "xiamomi",
  1000,
  "cel 15 polegadas",
	"/caminho/imagem,",
  true,
  5,
  ["15 polegadas", "android 5.3"], ["celular", "xiaomi"],
  2
)

function generateProductCard(produto) {

}