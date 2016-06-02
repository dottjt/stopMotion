var t1 = document.getElementById("t1");
var t11 = document.getElementById("t11");
var t111 = document.getElementById("t111");


var h1Array = [1];
var h2Array = [0];
var h3Array = [0];

var total = [0,0,0]

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




function trickle() {
	// Generate condition. 
	h1Array[0] = h1Condition();
	total[0] = h1Array[0]
	console.log(total);
	console.log(h1Array[0]);

	// h1Array[0] = condition();
	setTimeout(function() {
		h2Array[0] = h1Array[0]; 
		total[1] = h1Array[0];
		console.log(total);
		console.log(h2Array[0]);


		setTimeout(function() {
			h3Array[0] = h2Array[0];
			total[2] = h1Array[0]
			console.log(total);
		console.log(h2Array[0]);


		}, 1000)

	}, 1000)
}


var h = setInterval(trickle, 2000);


/*

*/