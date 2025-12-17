const process = require("process");

console.log(process.versions.node);

// Process wordt meestal gebruikt voor omgevingsvariabelen

console.log(process.env.GOOGLE_PASSWORD);
console.log(process.env.MICROSOFT_PASSWORD);

// Oefening: voer een Node.js-applicatie uit
// waarbij je de omgevingsvariabele NAME een waarde geeft van jouw voornaam.
// Log deze variabele in de console.
