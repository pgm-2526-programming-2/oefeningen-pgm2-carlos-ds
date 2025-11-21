// Schrijf een functie die het resultaat weergeeft van de som
// van alle getallen van 1 tot en met n - ZONDER recursie
function sumUp(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// Schrijf een tweede functie die hetzelfde doet maar dan MET recursie
function recursiveSumUp(n) {
  if (n === 1) {
    return 1;
  }

  return n + recursiveSumUp(n - 1);
}
