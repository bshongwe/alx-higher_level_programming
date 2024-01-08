#!/usr/bin/node

const arg2 = process.argv[2];
const x = parseInt(arg2);

if (isNana(x)) {
	console.log("Missing number of occurences");
} else {
	for (let i = 0; i < x; i++;) {
		console.log("C is fun");
	}
}
