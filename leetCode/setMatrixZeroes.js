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

var setZeroes = function(matrix) {
  let rows = new Set();
  let cols = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!matrix[i][j]) {
        rows.add(i);
        cols.add(j);
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (rows.has(i) || cols.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
};