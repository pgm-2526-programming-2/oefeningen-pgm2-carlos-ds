// https://www.pgm.gent/pgm-2/v2/javascript/arrays/exercise.html#multidimensional-arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

function getMatrixItem(row, column) {
  return matrix[row - 1][column - 1];
}

console.log(getMatrixItem(1, 1));
console.log(getMatrixItem(1, 2));
console.log(getMatrixItem(1, 3));
console.log(getMatrixItem(2, 1));
console.log(getMatrixItem(2, 2));
console.log(getMatrixItem(2, 3));
