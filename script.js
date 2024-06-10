class Carro{
	marca;
	modelo;
	ano;
	cor;
	ligado;
	constructor(marca, modelo, ano, cor, ligado){
		this.marca = marca;
		this.modelo = modelo;
		this.ano = ano;
		this.cor = cor;
		this.ligado = ligado;
	}

	ligaCarro(){
		if (this.ligado != true){
			this.ligado = true;
		}
		console.log(`O carro está ligado`);
	}

	desligaCarro(){
		if(this.ligado != false){
			this.ligado = false;
		}
		console.log(`O carro está desligado`)
	}

	pintar(cor){
		this.cor = cor;
	}

	info(){
		console.log(`${this.marca} ${this.modelo} ${this.ano}. O carro está ${this.ligado? 'ligado':'desligado'}`);
	}
}

let meuCarro = new Carro("Honda", "Civic", 1990, "prata", false);