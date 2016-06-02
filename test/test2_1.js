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

/*
function condition() {
	if (h1Array[0] === 1) {
		return h1Array[0] = 0;
	} else {
		return h1Array[0] = 1;
	}

}
*/

function h1condition() {


}

function trickle() {
	// Generate condition. 
	total[0] = h1Array[0]
	console.log(total);

	// h1Array[0] = condition();
	setTimeout(function() {
		h2Array = h1Array; 
		total[1] = h1Array[0];
		console.log(total);

		setTimeout(function() {
			h3Array = h2Array;
			total[2] = h1Array[0]
			console.log(total);


		}, 1000)

	}, 1000)
}


var h = setInterval(trickle, 3000);


/*

*/