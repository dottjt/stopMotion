var t1 = document.getElementById("t1");
var t11 = document.getElementById("t11");
var t111 = document.getElementById("t111");


h1Array = [1];
h2Array = [0];
h3Array = [0];

function printBoard() { 
	console.log("H1" + h1Array);
	console.log("H2" + h2Array);
	console.log("H3" + h3Array);
}

function exchange() {
	printBoard();

	setTimeout(function() {
		h2Array = h1Array; 
		printBoard();
		setTimeout(function() {
			h3Array = h2Array;
			printBoard();
		}, 1000)

	}, 1000)
}

exchange();