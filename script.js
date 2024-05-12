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
	"/src/imagem1.png",
  true,
  5,
  ["15 polegadas", "android 5.3"],
	["celular", "xiaomi"],
  2
)

let produto2 = new Produto(
	"sansumg",
	976.50,
	"cel 16 polegadas",
	"/src/imagem2.png",
	true,
	4.5,
	["16 polegadas", "android 5.0"],
	["celular", "xiamoi"],
	5
)

let produto3 = new Produto(
	"nokia",
	800,
	"cel 14 polegadas",
	"/src/imagem3.png",
	false,
	3,
	["14 polegadas", "android 4.8"],
	["celular", "nokia"],
	15
)

let produto4 = new Produto(
	"motorolla",
	1200,
	"cel 16 polegadas",
	"/src/imagem4.png",
	true,
	4,
	["16 polegadas", "android 5.3"],
	["celular", "motorolla"],
	7
)

const produtos = [produto1, produto2, produto3, produto4];

const botoes = document.createElement('div');
botoes.classList.add('botoes');
produtos.forEach(produto => {
	const botao = document.createElement('button');
	botao.textContent = produto.nome;
	botao.classList.add('botaoProduto');
	botao.onclick = () => mostrarProduto(produto.nome);
	botoes.appendChild(botao);
})

function criaCard(produto){
	var fundoPai = document.createElement('div');
	fundoPai.classList.add('fundoPai');
	fundoPai.innerHTML =`
		<div class="tituloProduto">
			<h1>${produto.nome}</h1>
		</div>

		<div class="descricaoProduto">
			<h2>${produto.nome}</h2>
		</div>

		<div class="disponibilidadeProduto">
			<h2>${produto.disponivel ? 'disponivel':'indisponivel'}</h2>
		</div>

		<div class="imagemProduto">
			<img src="${produto.imagem}" alt="Imagem do Produto" class="imagemProduto">
		</div>

		<div class="tagProduto">
			<h3>tags: ${produto.tags.join(', ')}</h3>
		</div>

		<div class="caracteristicasProduto">
			<h3>caracteristicas: ${produto.caracteristicas.join(', ')}</h3>
		</div>

		<div class="fundoPrecoDesconto">
			<div class="PrecoProduto">
				<h3>preço: R$ ${produto.preco}</h3>
			</div>
			${
				produto.porcentagemDesconto > 0 ? `
				<div class="descontoProduto">
					<h3>${produto.porcentagemDesconto}% de desconto!!</h3>
				</div>
				`:''
			}
		</div>
	`;
	document.getElementById('fundoPagina').appendChild(fundoPai);
}

document.getElementById('fundoPagina').appendChild(botoes);