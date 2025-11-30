// https://www.pgm.gent/pgm-2/v2/javascript/arrays/exercise.html#methods-subarrays
const willekeurigeNamenArray = [
  ["Alice", "Bob", "Charlie"],
  ["David", "Eva", "Frank"],
  ["Grace", "Hank", "Ivy"],
  ["Jack", "Kelly", "Liam"],
];

// Maak een nieuwe array die alle subarrays flat maakt.
const flattenedArray = willekeurigeNamenArray.flat();
console.log(flattenedArray);

// Verdubbel elk getal en maak een nieuwe array door alle subarrays te flatten.
// -> fout in de opgave want er staan geen getallen in de array
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const flattenedAndDoubledNumbersArray = matrix.flatMap((numArray) => {
  return numArray.map((num) => num * 2);
});
console.log(flattenedAndDoubledNumbersArray);

// Verwijder het eerste element uit elke subarray.
willekeurigeNamenArray.forEach((array) => array.shift());
console.log(willekeurigeNamenArray);

// Verwijder het laatste element uit de array.
willekeurigeNamenArray.pop();
console.log(willekeurigeNamenArray);
