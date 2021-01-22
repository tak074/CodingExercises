// rotate image in place
var rotate = function(matrix) {
  for (let i = 0; i < (matrix.length / 2); i++) {
    // looping through each row upto half way
    let currRow = matrix[i];
    let lastIndex = currRow.length - 1;
    let end = lastIndex - i;

    // for each of unchanged squares, rotate to the right.
    for (let j = i; j < end; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[lastIndex - j][i];
      matrix[lastIndex - j][i] = matrix[lastIndex - i][lastIndex - j];
      matrix[lastIndex - i][lastIndex - j] = matrix[j][lastIndex - i];
      matrix[j][lastIndex - i] = temp;
    }
  }

  return matrix;
};

// i - len - 1 - i

// 0 | 0 1 2 3 4 5   0 - 5
// 1 | 0 1 2 3 4 5   1 - 4
// 2 | 0 1 2 3 4 5   2 - 3
// 3 | 0 1 2 3 4 5
// 4 | 0 1 2 3 4 5
// 5 | 0 1 2 3 4 5


// 0 | 0 1 2 3 4   0 - 4
// 1 | 0 1 2 3 4   1 - 3
// 2 | 0 1 2 3 4   2 - 3
// 3 | 0 1 2 3 4
// 4 | 0 1 2 3 4


// 0 | 0 1 2 3 4 5 6
// 1 | 0 1 2 3 4 5 6
// 2 | 0 1 2 3 4 5 6
// 3 | 0 1 2 3 4 5 6
// 4 | 0 1 2 3 4 5 6
// 5 | 0 1 2 3 4 5 6
// 6 | 0 1 2 3 4 5 6