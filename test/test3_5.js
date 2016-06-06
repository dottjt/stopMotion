/*	Condition and UIchange */

function UIchange() {					
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 4; j++) {
			console.log(totalh[i][j])
			if (totalh[i][j] === 1) {
				tiles[i][j].innerHTML = "X";
			} else if (totalh[i][j] === 0) {
				tiles[i][j].innerHTML = "0";
			} else if (totalh[i][j] === 2) {
				tiles[i][j].innerHTML = "2";
			} else {
				return;
			}
		}
	}
};

function oneOrZero() { 
	var rand = Math.random();
	if (rand > 0.1) {
		return 1; 
	} else {
		return 0;
	}
}

function h1Condition() {
	if (logicArray[0] === 1) {
		return 0
	} else {
		return oneOrZero();
	}
}

var t1 = document.getElementById("t1");
var t11 = document.getElementById("t11");
var t111 = document.getElementById("t111");
var t1111 = document.getElementById("t1111");


var t2 = document.getElementById("t2");
var t22 = document.getElementById("t22");
var t222 = document.getElementById("t222");
var t2222 = document.getElementById("t2222");

var t3 = document.getElementById("t3");
var t33 = document.getElementById("t33");
var t333 = document.getElementById("t333");
var t3333 = document.getElementById("t3333");

var t1Tile = [t1,t11,t111,t1111];
var t2Tile = [t2,t22,t222,t2222];
var t3Tile = [t3,t33,t333,t3333];

var tiles = [t1Tile, t2Tile, t3Tile];

var totalh1 = [1,0,0,2];
var totalh2 = [1,0,0,0];
var totalh3 = [1,0,0,0];

var totalh = [totalh1, totalh2, totalh3];

var s1 = totalh1[3];
var s2 = totalh2[3];
var s3 = totalh3[3]; 

var sTotal = [s1,s2,s3];	// this array doesn't work. 
// do manual testing to see if equal statements are in fact true. 


function characterMovement(event) {
	console.log(event.keyCode);
		if (event.keyCode === 115) {
			characterMoveRight();
		} else if (event.keyCode === 97){
			characterMoveLeft();
		} else {
			return;
	}
}

function characterMoveRight() {
	for (var i = 0; i < 3; i++) { // find character position
		if (sTotal[i] === 2) {	// 2 is symbol for character
			if (i !== 2) {	// changes depending on array size. 
				sTotal[i] = 0;
				sTotal[i + 1].innerHTML = "2";
			}
		}
	};

}


function trickle(logicArray, tile) {

	var templogicArray0 = logicArray[0];

	// UIchange();

	setTimeout(function() {
		logicArray[1] = templogicArray0;

		var templogicArray1 = logicArray[1];
		logicArray[0] = 0; // maybe change to something else? 

		// console.log(logicArray);
		// UIchange();

		setTimeout(function() {
			logicArray[2] = templogicArray1;

			var templogicArray2 = logicArray[1];
			logicArray[1] = 0;

			// console.log(logicArray);
			//UIchange();

			setTimeout(function() {
				logicArray[3] = templogicArray2;

				var templogicArray3 = logicArray[2]
				logicArray[2] = 0;

				// console.log(logicArray);
				//UIchange();

				setTimeout(function() {
					if (logicArray[3] === 2) {
					//UIchange();
					} else {
						logicArray[3] = 0;
					}

				}, 1000);

			}, 1000);

		}, 1000);

	}, 1000);

}

// consider wrap in setInterval?? dunno
addEventListener('keypress', characterMovement, false);

var trickleh1 = setInterval(trickle.bind(this, totalh1, t1Tile), 1000);
var trickleh2 = setInterval(trickle.bind(this, totalh2, t2Tile), 1000);
var trickleh3 = setInterval(trickle.bind(this, totalh3, t3Tile), 1000);
var change = setInterval(UIchange, 1000)
