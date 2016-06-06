var t1 = document.getElementById("t1");
var t11 = document.getElementById("t11");
var t111 = document.getElementById("t111");


var t1Tile = [t1,t11,t111]

var total = [1,0,0]



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
	if (total[0] === 1) {
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

	var temptotal0 = total[0];

	console.log(total);
	UIchange();

	setTimeout(function() {

		total[1] = temptotal0;

		var temptotal1 = total[1];
		total[0] = 0; // maybe change to something else? 

		console.log(total);
		UIchange();

		setTimeout(function() {
			var temptotal2 = total[1];
			total[2] = temptotal1
			total[1] = 0;

			console.log(total);
			UIchange();

		}, 1000);

	}, 1000);
	
}

trickle()

var updateUI = setInterval(UIchange, 1000);






/*

*/