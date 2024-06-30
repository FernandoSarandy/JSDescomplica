document.addEventListener('DOMContentLoaded', () => {
	const personForm = document.getElementById('personForm');
	const personList = document.getElementById('personList');

	personForm.addEventListener('submit', async (event) => {
		event.preventDefault();
		const id = document.getElementById('personId').value;
		const name = document.getElementById('personName').value;
		const dob = document.getElementById('personDob').value;
		const cpf = document.getElementById('personCpf').value;

		const personData = {
			Id: id ? parseInt(id) : Date.now(),
			Nome: name,
			DataNascimento: dob,
			CPF: cpf
		};

		await createOrUpdatePerson(personData);

		personForm.reset();

		await loadPersonList();
	});

	personList.addEventListener('click', async (event) => {
		if (event.target.classList.contains('delete-icon')) {
			const personId = event.target.dataset.id;
			await deletePersonById(personId);
			await loadPersonList();
		} else if (event.target.classList.contains('edit-icon')) {
			const personId = event.target.dataset.id;
			const person = await getPersonById(personId);
			populateForm(person);
		}
	});

	async function loadPersonList() {
		const response = await fetch('https://personal-tp6a9zfc.outsystemscloud.com/Pessoas/rest/Pessoas/Pessoas');
		const persons = await response.json();
		loadList(persons);
	}

	async function createOrUpdatePerson(personData) {
		await fetch('https://personal-tp6a9zfc.outsystemscloud.com/Pessoas/rest/Pessoas/CreateOrUpdatePessoa', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(personData)
		});
	}

	async function deletePersonById(personId) {
		await fetch(`https://personal-tp6a9zfc.outsystemscloud.com/Pessoas/rest/Pessoas/DeletePessoaById?PessoaId=${personId}`, {
			method: 'DELETE'
		});
	}

	async function getPersonById(personId) {
		const response = await fetch(`https://personal-tp6a9zfc.outsystemscloud.com/Pessoas/rest/Pessoas/Pessoas`);
		const persons = await response.json();
		return persons.find(person => person.Id == personId);
	}

	function populateForm(person) {
		document.getElementById('personId').value = person.Id;
		document.getElementById('personName').value = person.Nome;
		document.getElementById('personDob').value = person.DataNascimento;
		document.getElementById('personCpf').value = person.CPF;
	}

	function loadList(persons) {
		personList.innerHTML = '';
		persons.forEach(person => {
			const li = document.createElement('li');
			li.className = 'person-item';
			li.innerHTML = `
								<img src="src/edit-button.png" class="edit-icon" data-id="${person.Id}" alt="Editar">
                <img src="src/delete.png" class="delete-icon" data-id="${person.Id}" alt="Deletar">
								${person.Nome} (Nascimento: ${person.DataNascimento}, CPF: ${person.CPF})
							`;
			personList.appendChild(li);
		});
	}
	
	loadPersonList();
});