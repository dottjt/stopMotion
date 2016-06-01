// let's get a basic field happening. 

function logicConditions(gameLogic) {
	if (gameLogic[2] === 1) {
		gameLogic.push(0);

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


function uiLogic(gameLogic, tileArray) { 
	for (var i = 0; i < gameLogic.length; i++) {

		var g = "________";
		var w = "|";

		if (gameLogic[i] === 1) {
			tileArray[i].innerHTML = w;
		} else if (gameLogic[i] === 0) {
			tileArray[i].innerHTML = g;
		} 
	};
}


function tileChange(gameLogic,tileArray) { 
	uiLogic(gameLogic,tileArray);
	logicConditions(gameLogic);
}




	setInterval(tileChange.bind(this, h1Logic, h1Tiles), 1000);



/*
	setInterval(trickle.bind(this, h2Logic, h2Tiles, h1Logic), 1000);



function trickle(gameLogic, tileArray, tileCopy) {
	gameLogic = tileCopy;
	uiLogic(gameLogic, tileArray);
}





*/