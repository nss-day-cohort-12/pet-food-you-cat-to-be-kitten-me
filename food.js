console.log("First line in JavaScript file");
console.log(Date.now());

function executeThisCodeIfXHRFails (xhrEvent) {
	console.log("An error occurred");
}

function executeThisCodeWhenChunksArrive (xhrEvent) {
}

function executeThisCodeAfterFileIsLoaded () {
	console.log("executeThisCodeAfterFileIsLoaded");
	console.log(Date.now());

	// Parse the response text as JSON
	console.log("this.responseText", this.responseText);
	var data = JSON.parse(this.responseText);
	console.log(data);

	// Get a reference to the DOM element
	var outputEl = document.getElementById("petFoodOutput");
	console.log("outputEl", outputEl);

	var petFoodData = "";
	var currentFood;

	for (var i = 0; i < data.dog_brands.length; i++) {
		currentSong = data.dog_brands[i];
		petFoodData = `<h1>${"output"}</h1>`;
	}
	console.log(petFoodData);
	outputEl.innerHTML = petFoodData;
}



var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfXHRFails);
myRequest.addEventListener("progress", executeThisCodeWhenChunksArrive);
myRequest.open("GET", "petfood.json"); //Get, post, put, delete are the four verbs used//
myRequest.send();

console.log("Last line in JavaScript file");
console.log(Date.now());
