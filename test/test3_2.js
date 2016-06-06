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


function UIchange() {
	for (var i = 0; i < total.length; i++) {
		if ( total[i] === 1) {
			t1Tile[i].innerHTML = "X";
		} else {
			t1Tile[i].innerHTML = "0";
		}
		
	};
}

// So, I need to modularise this down to one function per transition, I think

var tmph1toh2 = [0,0,0,0,0,0,0]
	//     0 1 2 3 4 5,6


function transitionh1toh2(arrayPipeline) {
	// Generate condition. 
	// h1Array[0] = h1Condition();
	arrayPipeline[0] = 1 // total 

	console.log(arrayPipeline);
	console.log(arrayPipeline[0]);

	// h1Array[0] = condition();
	setTimeout(function() {

		arrayPipeline[1] = arrayPipeline[0];

		arrayPipeline[0] = 0; 

		console.log(arrayPipeline);
		console.log(arrayPipeline[1]);

		}, 1000)
}

// many more temporary variables. 

function transitionh2toh3(arrayPipeline) {
	setTimeout(function() {
		arrayPipeline[2] = arrayPipeline[1];
		arrayPipeline[1] = 0; 

		setTimeout(function(){
			arrayPipeline[2] = 0;

		})
	}, 1000)
}


setInterval(transitionh1toh2.bind(this, total), 1000);
setInterval(transitionh2toh3.bind(this, total), 1100);

setInterval(UIchange, 400);




// var gamePlay = setInterval(transition, 1000);

/*

*/