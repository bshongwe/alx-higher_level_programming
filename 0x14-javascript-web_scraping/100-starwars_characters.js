#!/usr/bin/node
// Prints all characters of a Star Wars movie

const request = require('request');
const id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else if (response.statusCode !== 200) {
    console.log(`Error: ${response.statusCode} - ${body}`);
  } else {
    const content = JSON.parse(body);
    const characters = content.characters;
    for (let character of characters) {
      request.get(character, (error, response, body) => {
        if (error) {
          console.log(error);
        } else if (response.statusCode !== 200) {
          console.log(`Error: ${response.statusCode} - ${body}`);
        } else {
          const names = JSON.parse(body);
          console.log(names.name);
        }
      });
    }
  }
});
