#!/usr/bin/node
const x = parseInt(process.argv[2]);
if (isNaN(x)) {
	console.log("Missing number of occurrences");
} else {
	const arr = new Array(x).fill("C is fun");
	for (const str of arr) console.log(str);
}
