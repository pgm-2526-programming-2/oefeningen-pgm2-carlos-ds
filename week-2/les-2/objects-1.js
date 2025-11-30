// https://www.pgm.gent/pgm-2/v2/javascript/objects/exercise.html#oefening-auto
const auto = {
  merk: "Toyota",
  model: "Camry",
  jaar: 2022,
  kleur: "blauw",
};

// Verander de kleur van de auto in de vorige oefening naar “rood”.
auto.kleur = "rood";
console.log(auto);

// Schrijf een script dat de merknaam van de auto in de vorige oefening ophaalt en weergeeft in de console.
console.log(auto.merk);

// Voeg een nieuwe eigenschap toe aan het object auto genaamd brandstof en wijs deze de waarde “benzine” toe.
auto.brandstof = "benzine";
console.log(auto);

// Verwijder de eigenschap jaar uit het object auto.
delete auto.jaar;
console.log(auto);
