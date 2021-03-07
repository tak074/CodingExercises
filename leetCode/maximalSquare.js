var maximalSquare = function(matrix) {
  let max = 0;
  let dp = new Array(matrix.length + 1).fill(0).map(() => row = new Array(matrix[0].length + 1).fill(0));

  for (let i = 1; i < matrix.length + 1; i++) {
    for (let j = 1; j < matrix[0].length + 1; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j],dp[i - 1][j - 1], dp[i][j - 1]) + 1;
        max = Math.max(max, dp[i][j]);
      }
    }
  }

  return max**2;
};