# stopMotion

So here is my concept for stopMotion. It is about ascii art. A basic 2D platformer, where from right to left, the text moves along a chain. You control a character and you must jump over the incoming obstacles. You press different buttons depending on the height of the obstacle 

Initial commit - 31-05-16

# Tests

Three different single arrays. Will learn how to transfer from one array to another. 

test2.js - h2Array changes after 1 second, then h3Array. Works 02-06-16. Liking the direction of this :)  

test2_1.js - devise function to print all arrays at once :). Trickle works now. 03-06-16

SO FAR test2_1.js contains 3 single arrays for each row AND can trickle down from value in 1st array to arrays 2 and 3. 

test2_2.js - Add condition statetment to determine h1Array value. Works 03-06-16

test2_3.js - Problem is that while it trickles, it doesn't change previous values to 0. Changing this behaviour. Works 03-06-16 Finally got to trickle perfectly :)))))

## Create basic UI

test3.js - Create basic UI responding to the logic. Gonna be hard. Might take a break for today.  


















# FAILED TESTS

// let's get a basic field happening.  
test1.js - gameLogic prints the array into the tiles - Works 01-06-16
		   Now broken due to change in HTML/CSS

test1_2.js - Cycle through and manipulate gameLogic with shift/pop - Works 01-06-16
		   Now broken due to change in HTML/CSS


test1_3.js - Change of direction. Now it will be facing DOWN, coming towards the player. 
			 Simplified with new html/css files
			 Works 01-06-16

test1_4.js - Modularise into different functions. 

BROKEN test1_5.js - going to get state in first row to trickle down to state in other rows. 
			// rename function names // remove all UI logic. JUST state logic.   
		

Okay, so test1_5.js is a bit of a mess. It won't trickle. So, next time I approach this, I need to dramatically simplify everything. Nested way too much information into function hell. Start from the beginning. 

------------------------------

test1_6.js - dramatic simplification. Now, ONE array. That way, state does not change as much. NO NO NO .

Okay, let's try again. 

------------------------------




