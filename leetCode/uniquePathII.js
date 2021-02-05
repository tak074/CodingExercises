var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  if (m === 1 && n === 1) {
    return obstacleGrid[0][0] === 1? 0 : 1;
  }

  let matrix = new Array(n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (obstacleGrid[i][j] === 1) {
        matrix[j] = 0;
        continue;
      } else if (i === m - 1 && j === n - 1) {
        matrix[j] = 1;
        continue;
      }
      let right = matrix[j + 1]? matrix[j + 1] : 0;
      let down = matrix[j]? matrix[j] : 0;
      matrix[j] = right + down;
    }
  }
  return matrix[0];
};