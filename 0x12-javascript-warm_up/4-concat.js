#!/usr/bin/node
if (process.argv[1] === __filename) {
	if (process.argv[2] === undefined) {
		console.log("No argument");
	} else if (process.argv[3] === undefined) {
		console.log("Only one argument found");
	} else {
		console.log(process.argv[2] + " is " + process.argv[3]);
	}
} else {
	console.log("Arguments found");
}
