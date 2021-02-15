var grayCode = function(n) {
  let res = [0];
  let pattern = [];
  let totalPattern = [];
  let counter = 1;

  while (counter <= n) {
    if (counter === 1) {
      pattern = [0,1];
    } else if (counter === 2) {
      pattern = [2, -1];
    } else {
      let copy = pattern.slice();
      copy[0] = 0 - copy[0];
      pattern[0] = 2**(counter - 1);
      pattern[pattern.length / 2] = 0 - pattern[(pattern.length / 2)];
      pattern = pattern.concat(copy);
    }
    totalPattern = totalPattern.concat(pattern);
    counter++;
  }

  for (let i = 0; i < totalPattern.length - 1; i++) {
    res.push(res[i] + totalPattern[i + 1]);
  }

  return res;
};

/*
n = 1 | 0,  1,|
n = 2 | 3,  2,|
n = 3 | 6,  7,  5,  4,|
n = 4 | 12, 13, 15, 14, 10, 11,  9,  8,|
n = 5 | 24, 25, 27, 26, 30, 31, 29, 28, 20, 21, 23, 22, 18, 19, 17, 16|
n = 6 | 48, 49, 51, 50, 54, 55, 53, 52, 60, 61, 63, 62, 58, 59, 57, 56, 40, 41, 43, 42, 46, 47, 45, 44, 36, 37, 39, 38, 34, 35, 33, 32

n = 1 |  +0, +1,
n = 2 |  +2, -1,
n = 3 |  +4, +1, -2, -1,
n = 4 |  +8, +1, +2, -1, -4, +1, -2, -1,
n = 5 | +16, +1, +2, -1, +4, +1, -2, -1, -8, +1, +2, -1, -4, +1, -2, -1
n = 6 | +32, +1, +2, -1, +4, +1, -2, -1, +8, +1, +2, -1, -4, +1, -2, -1, -16, +1, +2, -1, +4, +1, -2, -1, -8, +1, +2, -1, -4, +1, -2, -1

*/