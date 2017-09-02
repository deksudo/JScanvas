$(main);


var initialSize = 24;
var $canvas;
var mouseDown = false;

function main() {
	$canvas = $("#canvas");
	initialize();
	trackMouseDown();
	$canvas.on("mouseenter", ".canvas-square", function() {
		if (mouseDown){
			$(this).addClass("marked"); 
		}
	});
}

function trackMouseDown(){
	$(document).on("mousedown", function(event) {
		event.preventDefault();
		mouseDown = true;
	});
	$(document).on("mouseup", function(){
		mouseDown = false;
	});
}

function initialize() {
	updateCanvas(initialSize, initialSize);
}


function updateCanvas(width, height) {
	$canvas.html("");
	var canvasWidth = parseInt($canvas.css("width"), 10);
	var canvasHeigth = parseInt($canvas.css("height"), 10);

	var squareWidth = canvasWidth / width;
	var squareHeight = canvasHeigth / height;
	
	for(var i =0; i<height; i++) {
		for (var j=0; j<width; j++) {
			$canvas.append($("<div class='canvas-square' style='width:" + squareWidth + "px; height:" + squareHeight + "px;'></div>"));
		}
	}

	
}