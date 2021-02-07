var setZeroes = function(matrix) {
  let zeroCols = {};
  for (let j = 0; j < matrix.length; j++) {
    let flag = false;
    if (matrix[j].indexOf(0) !== -1) flag = true;
    for (let k = 0; k < matrix[j].length; k++) {
      if (matrix[j][k] === 0) {
        zeroCols[k] = true;
        for (let l = 0; l < j; l++) {
          matrix[l][k] = 0;
        }
      }
      if (flag || zeroCols[k]) {
        matrix[j][k] = 0;
      }
    }

  }
  // return the changed matrix
  return matrix;
};