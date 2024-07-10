// Step 1: identify element by id
const header = document.getElementById("header");
const button = document.getElementById("colorButton");

// Step 2: def an arr of colors
const colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

let index =  0

// Step 3: def a function that will run when the button is clicked
function changeColour() {
	header.style.backgroundColor = colours[index];
	index++;
	if (index >= colours.length) {
		index = 0;
	}
}

// Step 4: add event listener to the button
button.addEventListener("click", changeColour);

// Add mouseover and mouseout effects
button.addEventListener("mouseover", function () {
	button.style.backgroundColor = "teal";
	button.style.color = "orange";
	button.textContent = "Change Colour";
});