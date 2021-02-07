var setZeroes = function(matrix) {
  // keep track of cols with zero.
  let zeroCols = {};
  let zeroRows = {};

  // loop through each row to find zeros.
  for (let i = 0; i < matrix.length; i++) {
    let zero = false;
    // if there is a zero
    let section = matrix[i];
    let refPoint = 0;
    let zeroIndex = section.indexOf(0);
    while (zeroIndex !== -1) {
      zero = true;
      if (!zeroCols[refPoint + zeroIndex]) {
        zeroCols[refPoint + zeroIndex] = true;
      }
      refPoint = refPoint + zeroIndex + 1;
      zeroIndex = section.slice(refPoint).indexOf(0);
    }

    if (zero) {
      zeroRows[i] = true;
    };
  }

  // all the cols and rows are added.
  // loop through the matrix to make edits.
  for (let j = 0; j < matrix.length; j++) {
    let flag = false;
    if (zeroRows[j]) flag = true;
    for (let k = 0; k < matrix[j].length; k++) {
      if (flag || zeroCols[k]) {
        matrix[j][k] = 0;
      }
    }
  }

  // return the changed matrix
  return matrix;
};