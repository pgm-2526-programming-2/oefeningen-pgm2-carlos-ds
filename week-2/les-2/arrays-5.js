// https://www.pgm.gent/pgm-2/v2/javascript/arrays/exercise.html#methods-strings
const woorden = [
  "mal",
  "snurkduif",
  "bromvlieg",
  "snottebel",
  "knotsgek",
  "pindakaas",
  "fluitketel",
  "smurfenmuts",
];

// Maak een string door alle elementen in de array te verbinden met een koppelteken.
const join = woorden.join("-");
console.log(join);

// Controleer of ten minste één woord in de array begint met de letter “B”.
const isAtLeastOneWordStartingWithB = woorden.some((word) =>
  word.startsWith("B")
);

// Voeg het woord “Hello” toe aan het begin van de array.
woorden.unshift("Hello");
console.log(woorden[0]);

// Controleer of alle woorden in de array meer dan twee letters hebben.
const areAllWordsLongerThanTwoLetters = woorden.every(
  (word) => word.length > 2
);
console.log(areAllWordsLongerThanTwoLetters);

// Sorteer de array in oplopende volgorde.
woorden.sort();

// Haal het element op de derde positie in de array op.
console.log(woorden[2]);

// Filter de woorden die langer zijn dan vier letters uit de array.
const wordsLongerThanFourLetters = woorden.filter((word) => word.length > 4);
console.log(wordsLongerThanFourLetters);
