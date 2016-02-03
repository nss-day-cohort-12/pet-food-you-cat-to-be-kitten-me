function executeThisCodeIfXHRFails (xhrEvent) {
	console.log("An error occurred");
}

function executeThisCodeWhenChunksArrive (xhrEvent) {
}

function executeThisCodeAfterFileIsLoaded () {

	// Parse the response text as JSON
	var data = JSON.parse(this.responseText);

	// Get a reference to the DOM element
	var outputEl = document.getElementById("petFoodOutput");

	var petFoodData = "";
	var currentBrand;

  petFoodData += "<div class='row'>";
	for (var i = 0; i < data.dog_brands.length; i++) {  // i is index of array dog_brands
		currBrand = data.dog_brands[i];
		petFoodData += "<div class='col-md-6 outerContainer'>";  // each brand has one outerContainer
		petFoodData += `<div class='col-md-12 brandName'><p>${currBrand.name}</p></div>`; // each brand has one brandName
    for (var j = 0; j < currBrand.types.length; j++) {  // loop through all products (types) within this brand
		  petFoodData += "<div class='col-md-6 inOut'>";  // each product has one inOut
      petFoodData += `<div class='col-md-12 productName'><p>${currBrand.types[j].type}</p></div>`; // each product has one productName
      petFoodData += "<div class='foodInfo'>";  // each product has one foodInfo
      for (var k = 0; k < currBrand.types[j].volumes.length; k++) {  // loop through all volumes within this product
        petFoodData += `<p>Volume: ${currBrand.types[j].volumes[k].name}</p>`;  // each volume has one name
        petFoodData += `<p>Price: ${currBrand.types[j].volumes[k].price}</p>`;  // each volume has one price
      } // after looping through all volumes
      petFoodData += "</div>";  // end class foodInfo
      petFoodData += "</div>" // end class inOut
    } // after looping through all products (types)
    petFoodData += "</div>" // ends class outerContainer
	} // after looping through all brands
  petFoodData += "</div>"; // end class row

  // i is the index of the object within the dog_brands array
  // j is the index of the object within the types array
  // k is the index of the object within the volumes array

  outputEl.innerHTML = petFoodData;

}

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfXHRFails);
myRequest.addEventListener("progress", executeThisCodeWhenChunksArrive);
myRequest.open("GET", "petfood.json"); //Get, post, put, delete are the four verbs used//
myRequest.send();