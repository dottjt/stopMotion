var t1 = document.getElementById("t1");
var t11 = document.getElementById("t11");
var t111 = document.getElementById("t111");


var h1Array = [1];
var h2Array = [0];
var h3Array = [0];
var h32Array = [0]

var t1Tile = [t1,t11,t111]

var total = [0,0,0]



function UIchange() {
	for (var i = 0; i < total.length; i++) {
		if ( total[i] === 1) {
			t1Tile[i].innerHTML = "X";
		} else {
			t1Tile[i].innerHTML = "0";
		}
		
	};
}

function printBoard() { 
	console.log("H1" + h1Array);
	console.log("H2" + h2Array);
	console.log("H3" + h3Array);
}

function oneOrZero() { 
	var rand = Math.random();
	if (rand > 0.1) {
		return 1; 
	} else {
		return 0;
	}
}

function h1Condition() {
	if (h1Array[0] === 1) {
		return 0
	} else {
		return oneOrZero();
	}

}
/*
// attempt to create UI 
function UIConnector(array, tile) {
	if (total[0] === 1) {
		tile[i].innerHTML = "X";
		} else {
			tile[i].innerHTML = "O";
		}
}
*/



function trickle() {
	// Generate condition. 
	// h1Array[0] = h1Condition();


	total[0] = h1Array[0] // total 
	UIchange();

	console.log(total);
	console.log(h1Array[0]);

	// h1Array[0] = condition();
	setTimeout(function() {

		h2Array[0] = h1Array[0]; 
		
		total[1] = h2Array[0];
		UIchange();


		h1Array[0] = 0;

		total[0] = h1Array[0];

		
		console.log(total);
		console.log(h2Array[0]);

		setTimeout(function() {

			h3Array[0] = h2Array[0];
			
			total[2] = h3Array[0]
			UIchange();

			h2Array[0] = 0;

			total[1] = h2Array[0];

			console.log(total);
			console.log(h2Array[0]);


		}, 1200)

	}, 1100)

	
}




var gamePlay = setInterval(trickle, 1000);

/*

*/