const fraseContainer = document.getElementById('frase');
const btn = document.getElementById('btn');

async function getFrase() {
	try {
		const response = await fetch("https://api.chucknorris.io/jokes/random");
		const resultado = await response.json();
		fraseContainer.textContent = resultado.value;
	} catch (error) {
		console.log(error);
	}
}

btn.addEventListener('click', getFrase);

getFrase();
