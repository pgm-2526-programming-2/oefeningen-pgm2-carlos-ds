// https://www.pgm.gent/pgm-2/v2/javascript/arrays/exercise.html#sorteren-op-object-eigenschap
function sorterenOpEigenschap(objecten, eigenschap) {
  return objecten.toSorted((objectA, objectB) => {
    return objectA[eigenschap] > objectB[eigenschap] ? 1 : -1;
  });
}
const objectenArray = [
  { naam: "Bob", leeftijd: 25 },
  { naam: "Charlie", leeftijd: 35 },
  { naam: "Anna", leeftijd: 30 },
];
const gesorteerdOpNaam = sorterenOpEigenschap(objectenArray, "naam");
console.log(gesorteerdOpNaam);

const gesorteerdOpLeeftijd = sorterenOpEigenschap(objectenArray, "leeftijd");
console.log(gesorteerdOpLeeftijd);
