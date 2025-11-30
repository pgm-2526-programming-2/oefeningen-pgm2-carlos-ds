// https://www.pgm.gent/pgm-2/v2/javascript/objects/exercise.html#oefening-persoon
const person = {
  naam: "Anna",
  leeftijd: 25,
  adres: {
    straat: "Hoofdstraat",
    nummer: 123,
    stad: "Stadsville",
  },
};

// Schrijf een script dat het straatnummer van het adres-object in de vorige oefening ophaalt en weergeeft in de console.
console.log(person.adres.straat);

// Breid het object persoon uit door de eigenschap telefoon toe te voegen met een willekeurig telefoonnummer.
person.telefoon = "0476123456";
console.log(person);

// Maak een nieuw object genaamd extraInfo met willekeurige extra informatie (bijvoorbeeld hobby, favorieteKleur, enz.).
// Voeg deze informatie toe aan het object persoon.
const extraInfo = {
  hobbies: ["Schaken", "Breien", "Gamen"],
  favorieteKleur: "paars",
};
person.extraInfo = extraInfo;
console.log(person);
