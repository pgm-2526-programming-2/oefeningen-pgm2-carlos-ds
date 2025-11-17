// Schrijf een functie die een array van getallen als argument accepteert
// en de som van die getallen returned
function sum(array) {
    return array.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4]));