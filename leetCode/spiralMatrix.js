var spiralOrder = function(matrix) {
  let ans = [];

  if (matrix[0].length === 1) {
    return matrix.flat();
  }
  // loop through in peeling manner
  // m x n matrix. not n x n.
  let len = Math.min(matrix.length, matrix[0].length);
  for (let i = 0; i < len / 2; i++){
    // create each components
    let top = matrix[i].slice(i, matrix[0].length - i);

    // create right and left componenets;
    let right = [];
    let left = [];
    for (let j = i + 1; j < matrix.length - i; j++) {
      right.push(matrix[j][matrix[0].length - 1 - i]);
      if (j !== i + 1) {
        if (matrix[0].length - i - 1 !== i) {
          left.push(matrix[matrix.length - j][i]);
        }
      }
    }
    let bottom = [];
    if (matrix.length - 1 - i !== i) {
      bottom = matrix[matrix.length - 1 - i].slice(i, matrix[0].length - 1 - i).reverse();
    }

    // add the parts together;
    ans = ans.concat(top, right, bottom, left);
  }

  return ans;
};