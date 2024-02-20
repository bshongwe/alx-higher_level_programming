#!/usr/bin/node
// Prints all characters of a Star Wars movie (uses API)

const request = require('request');
const id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

async function getCharacterData(characterUrl) {
    return new Promise((resolve, reject) => {
        request.get(characterUrl, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                resolve(JSON.parse(body).name);
            }
        });
    });
}

async function printCharacters() {
    try {
        const filmData = await new Promise((resolve, reject) => {
            request.get(url, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(JSON.parse(body));
                }
            });
        });

        console.log(`Characters in ${filmData.title}:`);
        for (const character of filmData.characters) {
            const characterName = await getCharacterData(character);
            console.log(characterName);
        }
    } catch (error) {
        console.error(error);
    }
}

printCharacters();
