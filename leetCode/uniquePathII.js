var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  if (obstacleGrid[m - 1][n - 1] === 1) {
    return 0;
  }

  let matrix = [];
  for (let x = 0; x < m; x++) {
      matrix.push([]);
      for (let y = 0; y < n; y++) {
          matrix[x][y] = 1;
      }
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (obstacleGrid[i][j] === 1) {
        matrix[i][j] = 0;
        continue;
      }
      if (i === m - 1 || j === n - 1) {
        if (matrix[i + 1][j] === 0 || matrix[i][j + 1] === 0) {
          matrix[i][j] = 0;
        } else {
          matrix[i][j] = 1;
        }
      } else {
        matrix[i][j] = matrix[i + 1][j] + matrix[i][j + 1];
      }
    }
  }

  return matrix[0][0];
};