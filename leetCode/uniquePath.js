var uniquePaths = function(m, n) {
  if (m === 1 && n === 1) {
    return 1;
  }

  let matrix = new Array(n).fill(1);

  console.log(matrix);
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      matrix[j] = matrix[j] + matrix[j + 1];
    }
  }

  return matrix[0];
};