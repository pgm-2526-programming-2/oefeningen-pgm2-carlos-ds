// Schrijf een functie die een array van gehele getallen als argument accepteert
// en al die getallen bij elkaar optelt
// 1. met een for loop
function sumArray1(array) {
  let sumArray = 0;
  for (let i = 0; i < array.length; i++) {
    sumArray += array[i];
  }
  return sumArray;
}
console.log(sumArray1([1, 2, 3]));

// 2. met een for ... of loop
function forOf(array) {
  let totaal = 0;
  for (const getal of array) {
    totaal += getal;
  }
  return totaal;
}

console.log(forOf([1, 2, 3]));

// 3. met forEach
function forEachArray(array) {
  let total = 0;
  array.forEach((number) => (total += number));
  return total;
}
console.log(forEachArray([1, 2, 3]));
