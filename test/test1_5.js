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

function uiLogic(logicArray, tileArray) { 
	for (var i = 0; i < logicArray.length; i++) {

		var g = "________";
		var w = "|";

		if (logicArray[i] === 1) {
			tileArray[i].innerHTML = w;
		} else if (logicArray[i] === 0) {
			tileArray[i].innerHTML = g;
		} 
	};

	logicConditions(logicArray);
}

function trickleh2(logicArray, tileArray) {
	setTimeout( function() {
		h2Logic = logicArray;
		console.log("h2" + h2Logic);
		uiLogic(logicArray, tileArray);
		/*
		setTimeout( function() {
		h3Logic = h2Logic;
		console.log("h3" + h2Logic);

		}, 500);

		*/
	}, 500);
}

function gamePlay(logicArray, tileArray, h2TileArray, h3TileArray) {
	// uiLogic(logicArray, tileArray);
	uiLogic(logicArray, tileArray);
	trickleh2(logicArray, h2Tiles);
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


var h1Logic = [0,0,0];
var h2Logic = [0,0,0];
var h3Logic = [0,0,0];
// 1 is wall
// 0 is ground. 




setInterval(gamePlay.bind(this, h1Logic, h1Tiles, h2Tiles, h2), 500);


// okay, we need 


/*
	setInterval(trickle.bind(this, h2Logic, h2Tiles, h1Logic), 1000);



function trickle(logicArray, tileArray, tileCopy) {
	logicArray = tileCopy;
	uiLogic(logicArray, tileArray);
}





*/