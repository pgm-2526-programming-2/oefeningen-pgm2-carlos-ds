// Schrijf een functie factorial(n) die het resultaat weergeeft van de vermeningvuldiging
// van alle getallen van 1 tot en met n - ZONDER recursie
// n = 3 -> 1 * 2 * 3 = 6
// n = 4 -> 1 * 2 * 3 * 4 = 24
function factorial(n) {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
}

console.log(factorial(3));
console.log(factorial(4));

// Schrijf een tweede functie recursiveFactorial(n)
// die hetzelfde doet maar dan MET recursie
function recursiveFactorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * recursiveFactorial(n - 1);
  }
}

console.log(recursiveFactorial(3));
console.log(recursiveFactorial(4));
