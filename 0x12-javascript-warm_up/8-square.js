#!/usr/bin/node

const squareSize = process.argv[2];
const mySqaure = parseInt(squareSize);
const x = "x";

if (isNan(mySquare)) {
	console.log("Missing size");
} else {
	for (let i = 0; i < mySquare; i++) {
		console.log(x.repeat(mySquare));
	}
}
