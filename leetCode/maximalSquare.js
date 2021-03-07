var maximalSquare = function(matrix) {
  let max = 0;
  let res = new Array(matrix[0].length).fill([0,0]);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === '0') {
        max = Math.max(max, (Math.min(...res[j]))**2);
        res[j] = [0,0];
      } else {
        let counter = 0;
        while (matrix[i][j] === '1') {
          counter++;
          j++;
        }
        // counter will represent number of consecutive 1's.
        while (counter > 0) {
          if (res[j - counter][1] !== counter) {
            max = Math.max(max, Math.min(...res[j - counter])**2);
            res[j - counter] = [1, counter];
          } else {
            res[j - counter][0]++;
          }
          if (i === matrix.length - 1) {
            max = Math.max(max, Math.min(...res[j - counter])**2);
          }
          counter--;
        }
        j--;
      }
    }
  }

  return max;
};