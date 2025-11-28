// window.alert("This page has not been constructed yet!");

class Car {
	constructor(brand, model, modelYear) {
		this.brand = brand;
		this.model = model;
		this.modelYear = modelYear;
	}

	displayCar() {
		console.log(this.brand, this.model, this.modelYear);
	}

	get brand() {
		return this._brand;
	}

	get modelYear() {
		return this._modelYear;
	}

	set brand(newBrand) {
		if (typeof newBrand === "string" && newBrand.length > 0) {
			this._brand = newBrand;
		} else {
			console.error("Brand field is empty.");
		}
	}

	set modelYear(newModelYear) {
		if (typeof newModelYear === "number" && newModelYear > 0) {
			this._modelYear = newModelYear;
		} else {
			console.error("Year field is empty.");
		}
	}
}

const car1 = new Car("Subaru", "Sambar", 1990);
const car2 = new Car("Honda", "Civic", 2000);

car1.modelYear = 1999;

setTimeout(() => car1.displayCar(), 2000);
car2.displayCar();

// console.dir(document);
document.title = "Gallery";

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then(response => {

//         if(!response.ok){
//             throw new Error("Could not fetch resource.")
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.name))
//     .catch(error => console.error(error));

fetchData();

async function fetchData() {
	try {
		const pokemonName = document
			.getElementById("pokemonName")
			.value.toLowerCase();
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemonName}`
		);

		if (!response.ok) {
			throw new Error("Could not fetch resource.");
		}
		const data = await response.json();
		const pokemonSprite = data.sprites.front_default;
		const imgElement = document.getElementById("pokemonSprite");

		imgElement.src = pokemonSprite;

		imgElement.style.display = "block";

		console.log(data);
	} catch (errror) {
		console.error(error);
	}
}
