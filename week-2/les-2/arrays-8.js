// https://www.pgm.gent/pgm-2/v2/javascript/arrays/exercise.html#optellen-arrays
function addArrays(arr1, arr2) {
  return arr1.map((value, index) => {
    return value + arr2[index];
  });
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const result = addArrays(array1, array2);
console.log(result);
