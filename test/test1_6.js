// let's get a basic field happening. 

function logicConditions(logicArray) {
	if (logicArray[2] === 1) {
		logicArray.push(0);

	} else {
		logicArray.push(oneOrZero());
	}
	logicArray.shift();

	console.log(logicArray);

	// maybe insert trickle? 
}

function oneOrZero() { 
	var rand = Math.random();
	if (rand > 0.5) {
		return 1; 
	} else {
		return 0;
	}
}


//h1 
var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var t3 = document.getElementById("t3");

//h2
var t11 = document.getElementById("t11");
var t22 = document.getElementById("t22");
var t33 = document.getElementById("t33");

//h3
var t111 = document.getElementById("t111");
var t222 = document.getElementById("t222");
var t333 = document.getElementById("t333");

var h1Tiles = [t1,t2,t3];
var h2Tiles = [t11,t22,t33];
var h3Tiles = [t111,t222,t333];


var gameArrayh1 = [0,0,0]
var gameArrayh2 = [0,0,0]
var gameArrayh3 = [0,0,0]




function uiLogic(gameArray, tileArray) { 
	for (var i = 0; i < 4; i++) {
			tileArray[i].innerHTML = gameArrayh1[i];
			console.log(gameArrayh1)
	};
	



}


uiLogic(gameArrayh1, h1Tiles);

/*

setTimeout(function() {
		for (var j = 0; j < 4; j++) {
			h2Tiles[i].innerHTML = gameArrayh2[i];
			console.log(gameArrayh2)

	};
}, 500);

*/
