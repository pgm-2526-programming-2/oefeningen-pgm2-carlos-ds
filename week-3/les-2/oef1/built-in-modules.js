// Maak een mapje oef1 en een file built-in-modules.js
// Maak in diezelfde map een folder data en daarin een bestand movies.json
// Plaats daarin in JSON-formaat een array van objecten
// (2 of meer films met titel en jaar)
// Gebruik path.join() en __dirname om het pad naar movies.json te loggen
const path = require("path");
const fs = require("fs");

const pathToMovies = path.join(__dirname, "data", "movies.json");

// Gebruik de fs module om het JSON-bestand in te lezen
const fileContent = fs.readFileSync(pathToMovies, "utf8");
const fileContentAsArray = JSON.parse(fileContent);
fileContentAsArray.push({ title: "The Matrix", year: 1999 });
fileContentAsArray.push({ title: "Cars", year: 2006 });

// Gebruik fs.writeFileSync om de gewijzigde array weg te schrijven
fs.writeFileSync(pathToMovies, JSON.stringify(fileContentAsArray));
