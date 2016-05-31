// let's get a basic field happening. 

var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var t3 = document.getElementById("t3");
var t4 = document.getElementById("t4");
var t5 = document.getElementById("t5");

var w = "|";
var tiles = [t1,t2,t3,t4,t5];


var gameLogic = [1,0,1,1,1];

 
function moveField() {
	for (var i = 0; i < gameLogic.length; i++) {

		var g = "________";
		var w = "|"

		if (gameLogic[i] === 1) {
			tiles[i].innerHTML = g;
		} else if (gameLogic[i] === 0) {
			tiles[i].innerHTML = w;
		} 
	};






} 



setInterval(moveField, 1000)

