let pessoa = {
  nome: "Ricardo",
  idade: "28",
  profissão:"Bilheteiro"
}

console.log(pessoa.nome);

pessoa.nome = "Julia";

console.log(pessoa.nome);

pessoa.cidade = "Foz do Iguaçu";

console.log (pessoa.cidade);

console.log(pessoa);

delete pessoa.profissão;

console.log(pessoa);

let xaiomi ={
  nome:"Xaiomi poco x6 pro",
  preco:"$350",
  descricao:"Smartphone da xaiomi",
  imagem:"src/imagem1.png",
  disponivel:"true",
  avaliacao:"4.5",
  caracteristicas:[
    "tela", 
    "camera", 
    "wi-fi"
  ],
  tags:[
    "telefonia",
    "xaiomi",
    "eletronicos"
  ],
  imprimeTag: function(){
    console.log(this.tags);
  },
  imprimeCaracteristica: function(){
    console.log(this.caracteristicas);
  }
}

let samsung ={
  nome:"samsung Galaxy Note 20k",
  preco:"$400",
  descricao:"Smartphone da samsung",
  imagem:"src/imagem2.png",
  disponivel:"false",
  avaliacao:"4.0",
  caracteristicas:[
    "tela", 
    "camera", 
    "wi-fi"
  ],
  tags:[
    "telefonia",
    "samsung",
    "eletronicos"
  ],
  imprimeTag: function(){
    console.log(this.tags);
  },
  imprimeCaracteristica: function(){
    console.log(this.caracteristicas);
  }
}

let nintendoSwitch ={
  nome:"Nintendo Switch ed. especial, Zelda 30th anniversary",
  preco:"$375",
  descricao:"Console da nintendo, edição especial que inclui jogo",
  imagem:"src/imagem3.png",
  disponivel:"false",
  avaliacao:"4.5",
  caracteristicas:[
    "portatil", 
    "armazenamento de 500gbs", 
    "jogo incluso"
  ],
  tags:[
    "console",
    "nintendo",
    "eletronicos"
  ],
  imprimeTag: function(){
    console.log(this.tags);
  },
  imprimeCaracteristica: function(){
    console.log(this.caracteristicas);
  }
}

let LG ={
  nome:"TV LG 40 polegadas",
  preco:"$250",
  descricao:"Smart TV da LG",
  imagem:"src/imagem4.png",
  disponivel:"true",
  avaliacao:"3.0",
  caracteristicas:[
    "tela", 
    "40polegadas", 
    "wi-fi",
    "smart"
  ],
  tags:[
    "eletronicos",
    "lg"
  ],
  imprimeTag: function(){
    console.log(this.tags);
  },
  imprimeCaracteristica: function(){
    console.log(this.caracteristicas);
  }
}

nintendoSwitch.imprimeCaracteristica();

let listaDeProdutos = [xaiomi, nintendoSwitch, LG, samsung];

console.log(listaDeProdutos);