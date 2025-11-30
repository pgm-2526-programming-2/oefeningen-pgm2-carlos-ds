// https://www.pgm.gent/pgm-2/v2/javascript/arrays/exercise.html#methods-numbers
const randomNumbers = [23, 7, 45, 12, 87, 3, 56, 19, 34, 91];

// Filter de getallen groter dan 10 uit de array.
const numbersLargerThanTen = randomNumbers.filter((num) => num > 10);
console.log(numbersLargerThanTen);

// Verwijder het laatste element uit de array.
randomNumbers.pop();

// Verwijder het eerste element uit de array.
randomNumbers.shift();

// Voeg het getal 5 toe aan het einde van de array.
randomNumbers.push(5);

// Controleer of alle getallen in de array kleiner zijn dan 20.
const areAllNumbersSmallerThanTwenty = randomNumbers.every((num) => num < 20);
console.log(areAllNumbersSmallerThanTwenty);

// Maak een string door alle elementen in de array te verbinden met een spatie.
console.log(randomNumbers.join(" "));

// Tel alle getallen in de array op
const sum = randomNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum);

// Verdubbel elk getal in de array.
const double = randomNumbers.map((num) => num * 2);
console.log(double);

// Controleer of ten minste één getal in de array groter is dan 30.
const isAtLeastOneNumberGreaterThanThirty = randomNumbers.some(
  (num) => num > 30
);
console.log(isAtLeastOneNumberGreaterThanThirty);
