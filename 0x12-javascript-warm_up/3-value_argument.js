#!/usr/bin/node
if (process.argv[1] === __filename) {
	if (process.argv[2] === undefined) {
		console.log("No argument");
	} else {
		console.log("Argument found");
		console.log(process.argv[2]);
	}
} else {
	console.log("Arguments found");
}
