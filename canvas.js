document.addEventListener("DOMContentLoaded", main);

function main(event) {
	let container = document.getElementById("mainContainer");
	let canvas = document.getElementById("canvas");

	let squareCount = 64;

	let canvasWidth = parseFloat(window.getComputedStyle(canvas).getPropertyValue("width"));
	let canvasHeight = parseFloat(window.getComputedStyle(canvas).getPropertyValue("height"));
	let canvasArea = canvasWidth * canvasHeight;
	let squareArea = canvasArea / squareCount;
	let squareSideLength = Math.sqrt(squareArea);
	console.log(squareSideLength); //75

	for (let i =0; i < squareCount; i++) {
		let square = document.createElement("div");
		square.classList.add("square");
		square.style.width = squareSideLength + "px";
		square.style.height = squareSideLength + "px";
		canvas.appendChild(square);
	}


	canvas.addEventListener("mousedown", function(event) {mouseDown = true; event.preventDefault(); color(event);});
	canvas.addEventListener("mouseover", color);
	document.addEventListener("mouseup", function() {mouseDown = false;});

	document.getElementById("size").addEventListener("change", sliderChange);
	
	
}

let mouseDown = false;
function color(event) {
	if (!mouseDown) return;
	event.preventDefault();
	event.target.classList.toggle("selected");
}


let validValues = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144];
function sliderChange(event) {
	let value = event.target.value;
	let valueToStick = 0;
	for (let i =0; i < validValues.length; i++) {
		if (validValues[i] <= value) {
			valueToStick = validValues[i];
		}
	}

	event.target.value = valueToStick;
	console.log(event.target.value);
}