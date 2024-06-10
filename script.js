class Pessoa {
	#nome;
	#idade;
	#email;

	constructor(nome, idade, email) {
			this.setNome(nome);
			this.setIdade(idade);
			this.setEmail(email);
	}

	getNome() {
			return this.#nome;
	}

	setNome(nome) {
		
			//utiliza RegEx para validar se o nome contem números
			if (/\d/.test(nome)) {
					throw new Error("O nome não pode conter números.");
			}
			this.#nome = nome;
	}

	getIdade() {
			return this.#idade;
	}

	setIdade(idade) {

			//contrario to exemplo acima, aqui basta perguntar se o tipo da variavel é numero ou não além de verificar se é positiva ou não
			if (typeof idade !== 'number' || idade <= 0) {
					throw new Error("Idade deve ser um número positivo.");
			}
			this.#idade = idade;
	}

	getEmail() {
			return this.#email;
	}

	setEmail(email) {

			//RegEx para valdiar a logica do email, se contem o formato correto
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

			if (!emailRegex.test(email)) {
					throw new Error("Email inválido.");
			}
			this.#email = email;
	}
}

try {

	const pessoa = new Pessoa("João Silva", 30, "joao.silva@example.com");
	//o que era antes, acessando via o método get
	console.log(pessoa.getNome());
	console.log(pessoa.getIdade());
	console.log(pessoa.getEmail());

	//alterando o atributo privado via o método set
	pessoa.setNome("Maria Oliveira");
	console.log(pessoa.getNome());

	pessoa.setIdade(25);
	console.log(pessoa.getIdade());

	pessoa.setEmail("maria.oliveira@example.com");
	console.log(pessoa.getEmail());

} catch (error) {

	console.error(error.message);
}
