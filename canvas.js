document.addEventListener("DOMContentLoaded", main);


let container;
let canvas;
let squareCount;

function main(event) {
	container = document.getElementById("mainContainer");
	canvas = document.getElementById("canvas");
	squareCount = 16;

	document.getElementById("size").value = squareCount;
	updateCanvas(squareCount);

	canvas.addEventListener("mousedown", function(event) {mouseDown = true; coloring = !(event.target.classList.contains("selected")); event.preventDefault(); color(event);});
	canvas.addEventListener("mouseover", color);
	document.addEventListener("mouseup", function() {mouseDown = false;});

	document.getElementById("size").addEventListener("change", sliderChange);
	document.getElementById("reset").addEventListener("click", function() {updateCanvas(document.getElementById("size").value);});
}


let mouseDown = false;
let coloring = true;
function color(event) {
	if (!mouseDown) return;
	event.preventDefault();
	if (coloring) {
		event.target.classList.add("selected");	
	}
	else {
		event.target.classList.remove("selected");	
	}
	
}


function sliderChange(event) {
	updateCanvas(event.target.value);
	console.log(event.target.value);
}

function updateCanvas(sideLength) {
	//canvas is assumed to be square in terms of width and height
	let canvasWidth = parseFloat(window.getComputedStyle(canvas).getPropertyValue("width"));

	let squareSide = canvasWidth / sideLength;
	squareSide -= squareSide % 0.1; //round down

	console.log(squareSide);

	canvas.innerHTML = "";

	for (let i = 0; i < sideLength; i++) {
		for (let j = 0; j < sideLength; j++) {
			let square = document.createElement("div");
			square.classList.add("square");
			square.style.width = squareSide + "px";
			square.style.height = squareSide + "px";
			canvas.appendChild(square);
		}
	}
}