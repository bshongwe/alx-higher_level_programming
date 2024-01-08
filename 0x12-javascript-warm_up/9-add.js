#!/usr/bin/node
function const add(a, b) {
	const c = a + b;
	console.log(c);
}

add(Number(process.argv[2]), Number(procss.argv[3]));
