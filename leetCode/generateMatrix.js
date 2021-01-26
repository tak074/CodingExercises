var generateMatrix = function(n) {
  if (n === 1) return [[1]];
  if (n === 2) return [[1,2], [4,3]];

  // if n is odd, spiral up to left first
  // if n is even, spiral up to the right first.

  let currDirection = n % 2 === 1? 'left': 'right';

  // create n x n matrix;
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push([]);
  };

  let currNum = (n * n) - 1;
  let currRowIndex = Math.floor(n / 2);
  res[currRowIndex].push(currNum + 1);

  let repNum = 0;
  let repeated = 0;

  while (currNum > 0) {
    if (repeated % 2 === 0) repNum ++;
    let count = 0;
    //right or up
    if (currDirection === 'right' || currDirection === 'up') {
      // push
      if (currDirection === 'right') {
        while (count < repNum) {
          res[currRowIndex].push(currNum);
          currNum--;
          count++;
        }
        currDirection = 'up';
      } else {
        while (count < repNum) {
          currRowIndex--;
          res[currRowIndex].push(currNum);
          currNum--;
          count++;
        }
        currDirection = 'left';
      }
    } else { // right or down
      // unshift
      if (currDirection === 'left') {
        while (count < repNum) {
          if (currNum === 0) break;
          res[currRowIndex].unshift(currNum);
          currNum--;
          count++;
        }
        currDirection = 'down'
      } else {
        while (count < repNum) {
          currRowIndex++;
          res[currRowIndex].unshift(currNum);
          currNum--;
          count++;
        }
        currDirection = 'right';
      }
    }
    repeated++;
  }
  return res;
};

  /*
  1  2  3  4
  12 13 14 5
  11 16 15 6
  10 9  8  7

  1 ~ n
  4n - 4 ~ 4n - 2, n + 1
  3n - 1, 4n , 4n - 1, n + 2
  4n - 2 ~ n + 3


  1  2  3  4  5
  16 17 18 19 6
  15 24 25 20 7
  14 23 22 21 8
  13 12 11 10 9

 1 ~ n
 4n - 4, n + 1
 4n - 5
 3n - 2 ~ 2n - 1
  */
