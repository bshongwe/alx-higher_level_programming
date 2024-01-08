#!/usr/bin/node

const arg 2 = process.argv[2];
const parsedNumber = parseInt(arg2);

if (isNan(parsedNumber)) {
	console.log("Not a number");
} else {
	console.log(`My number: ${parsedNumber}`);
}
