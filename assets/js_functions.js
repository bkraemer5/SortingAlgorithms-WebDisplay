function drawWord(context, word, posx, posy, color) {
	context.save();
	context.font="20px sans-serif";
	context.beginPath();
	context.fillStyle = color;
	context.fillText(word, posx, posy);
	context.fill();
	context.restore();
}

function printList(context, array, posx, posy, color) {
	for (var i of array) {
		context.save();
		context.font ="20px sans-serrif";
		context.beginPath();
		context.fillStyle = color;
		context.fillText(i.toString(16).toUpperCase(), posx, posy);
		context.fill();
		context.restore();
		posx += 20;
	}
}
