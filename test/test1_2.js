// let's get a basic field happening. 

var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var t3 = document.getElementById("t3");
var t4 = document.getElementById("t4");
var t5 = document.getElementById("t5");

var w = "|";
var tiles = [t1,t2,t3,t4,t5];


var gameLogic = [0,0,0,1,0];
// 1 is wall
// 0 is ground. 
 
function moveField(element) {
	for (var i = 0; i < gameLogic.length; i++) {

		var g = "________";
		var w = "|"

		if (gameLogic[i] === 1) {
			tiles[i].innerHTML = w;
		} else if (gameLogic[i] === 0) {
			tiles[i].innerHTML = g;
		} 
	};

	// manipulate gameLogic[i];
	if (gameLogic[4] === 1) {
		gameLogic.push(0);

	} else if (gameLogic[1] === 0) {
		gameLogic.push(1);
	} else {
		gameLogic.push(oneOrZero());
	}
	gameLogic.shift();

	console.log(gameLogic);

} 

function oneOrZero() { 
	var rand = Math.random();
	if (rand > 0.5) {
		return 1; 
	} else {
		return 0;
	}
}

setInterval(moveField.bind(this,gameLogic), 1000)

