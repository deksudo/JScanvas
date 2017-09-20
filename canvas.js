$(main);


var initialSize = 24;
var $canvas;
var mouseDown = false;

function main() {
	$canvas = $("#canvas");
	initialize();
	trackMouseDown();
	trackSizeSlider();
	$canvas.on("mouseenter", ".canvas-square", function() {
		if (mouseDown){
			$(this).addClass("marked"); 
		}
	});
}

function trackSizeSlider(){
	$("input[type='range']").on("change", function(){
		console.log(parseInt($(this).val(),10));
		updateCanvas(parseInt($(this).val(),10),parseInt($(this).val(),10));
	});

}

function trackMouseDown(){
	$canvas.on("mousedown", function(event) {
		event.preventDefault();
		mouseDown = true;
		if ($(event.target).hasClass("canvas-square"))
		{
			$(event.target).addClass("marked");
		}
	});
	$(document).on("mouseup", function(){
		mouseDown = false;
	});
}

function initialize() {
	updateCanvas(initialSize, initialSize);
	console.log(initialSize);
}


function updateCanvas(width, height) {
	$canvas.html("");
	var canvasWidth = parseInt($canvas.css("width"), 10);
	var canvasheight = parseInt($canvas.css("height"), 10);

	var squareWidth = canvasWidth / width;
	var squareHeight = canvasheight / height;
	
	console.log(squareHeight, squareWidth);

	for(var i =0; i<height; i++) {
		for (var j=0; j<width; j++) {
			$canvas.append($("<div class='canvas-square' style='width:" + squareWidth + "px; height:" + squareHeight + "px;'></div>"));
		}
	}

	
}