// https://www.pgm.gent/pgm-2/v2/javascript/arrays/exercise.html#langste-woord-in-array
const woordenArray = ["appel", "peer", "kiwi", "banaan"];
const longestWord = woordenArray.reduce((previousValue, currentValue) => {
  return previousValue.length > currentValue.length
    ? previousValue
    : currentValue;
});
console.log(longestWord);
