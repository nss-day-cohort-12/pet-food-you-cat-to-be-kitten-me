function executeThisCodeIfXHRFails (xhrEvent) {
	console.log("An error occurred");
}

function executeThisCodeWhenChunksArrive (xhrEvent) {
}

function executeThisCodeAfterFileIsLoaded () {

	// Parse the response text as JSON
	console.log("this.responseText", this.responseText);
	var data = JSON.parse(this.responseText);
	console.log(data);

	// Get a reference to the DOM element
	var outputEl = document.getElementById("petFoodOutput");
	console.log("outputEl", outputEl);

	var petFoodData = "";
	var currentBrand;

  petFoodData += "<div class='row'>";
	for (var i = 0; i < data.dog_brands.length; i++) {
		currBrand = data.dog_brands[i];
		// data.dog_brands is array of objects {name:N, types:T}
    // T is array of objects {type:Ty, volumes:V}
    // V is array of objects {name: Na, price: P}

		petFoodData += `<div class='col-md-6 outerContainer'>`
		petFoodData += `<div class='col-md-12 brandName'><p>${currBrand.name}</p></div>`
		petFoodData += `<div class='col-md-3 inOut'>` 
    for (var j = 0; j < currBrand.types.length; j++) {
      petFoodData += `<div class='col-md-12 productName'><p>${currBrand.types[j].type}</p></div>`
      for (var k = 0; k < currBrand.types[j].volumes.length; k++) {
        petFoodData += `<p>Volume: ${currBrand.types[j].volumes[k].name}</p>`
        petFoodData += `<p>Price: ${currBrand.types[j].volumes[k].price}</p>`
      } // end for k
    } // end for j
	} // end for i
  petFoodData += "</div>";

  // i is the index of the object within the dog_brands array
  // j is the index of the object within the types array
  // k is the index of the object within the volumes array

	// this is going to break after first couple b/c DOM references are sequentially
	// numbered (0, 1, 2, 3, ...)
	// but our loops reset the index to zero with each new level


}

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfXHRFails);
myRequest.addEventListener("progress", executeThisCodeWhenChunksArrive);
myRequest.open("GET", "petfood.json"); //Get, post, put, delete are the four verbs used//
myRequest.send();
