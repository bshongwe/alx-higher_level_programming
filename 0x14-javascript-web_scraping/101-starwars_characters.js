#!/usr/bin/node
// Prints all characters of a Star Wars movie (uses API)

const request = require('request');
const id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

request.get(url, (error1, response1, body1) => {
  if (error1) {
    console.log(error1);
  } else {
    const content = JSON.parse(body1);
    const characters = content.characters;
    for (const character of characters) {
      request.get(character, (error2, response2, body2) => {
        if (error2) {
          console.log(error2);
        } else {
          const names = JSON.parse(body2);
          console.log(names.name);
        }
      });
    }
  }
});
