let icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


const containerCardsDom = document.getElementById("containerCards");
const inputDom = document.getElementById("input");
let type = [];

icons.forEach((oggetto) => {
   oggetto.color = generaColoreRandom();
   creaCarta(containerCardsDom,oggetto);
   if (!type.includes(oggetto.type)){
      type.push(oggetto.type);
   }
});


type.forEach(element => {
   let options = `<option value="${element}">${element}</option>`;
   inputDom.innerHTML += options;
});


inputDom.addEventListener("change", () => {
   containerCardsDom.innerHTML="";
   icons.map((carta) => {
      if (inputDom.value == carta.type || inputDom.value == "all") {
         return creaCarta(containerCardsDom, carta);
      }
   });
});





function generaColoreRandom() {
   let characters = "0123456789abcdef"
   let str = "#"
   for(let i = 0; i < 6; i++){
      str += characters[Math.floor(Math.random() * 16)]
   }
   return str;
}

function creaCarta(destinazione,oggetto) {
   destinazione.innerHTML += `<div class="card shadow-sm" style="width: 18rem;">
											<div class="card-body p-4 text-center">
												<h2 class="card-title"><i class="fa-solid ${oggetto.prefix}${oggetto.name}" style="color: ${oggetto.color};"></i></h2>
												<h3 class="card-text">${oggetto.name}</h3>
											</div>
										</div>` 
}