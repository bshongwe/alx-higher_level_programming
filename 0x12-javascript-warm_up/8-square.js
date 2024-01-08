#!/usr/bin/node
function printSquare(n) {
	if (isNaN(n)) {
		console.log("Missing size");
		return;
	}
	let i = 0;
	while (i < n) {
		console.log("X".repeat(n));
		i++;
	}
}
