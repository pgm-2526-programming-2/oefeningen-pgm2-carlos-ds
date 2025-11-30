// https://www.pgm.gent/pgm-2/v2/javascript/arrays/exercise.html#for-of-foreach

// Gebruik for…of om elk element in de array numbers te loggen.
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}

// Gebruik for…of om elk karakter in de string “Hello” te loggen.
for (const char of "Hello") {
  console.log(char);
}

// Gebruik forEach om elk element in de array colors te loggen, samen met het bijbehorende indexnummer.
const colors = ["red", "blue", "green", "yellow"];

colors.forEach((item, index) => {
  console.log(`${item} ${index}`);
});
