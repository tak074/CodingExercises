var numSquares = function(n) {
  let min = Infinity;

  let recurse = function(num, count) {
    if (count >= min) return Infinity;
    let square = Math.floor(num ** (1/2));
    if (square === 1) return num;
    if (square === num ** (1/2)) return 1;

    while (square > 0) {
      let res = numSquares(num - (square ** (1/2)), count + 1) + 1;
      min = Math.min(min, res);
      square--;
    }

    return min;
  }

  return recurse(n, 1);
};

var numSquares = function(n) {
  let isSquare = function(num) {
    let square = Math.floor(num**(1/2));

    return (square ** 2) === num;
  }

  if (isSquare(n)) return 1;

  let tempVal = n;
  while (tempVal % 4 === 0) tempVal /= 4;
  if (tempVal % 8 === 7) return 4;

  for (let i = 0; i < n; i++) {
    if (isSquare(i) && isSquare(n - i)) return 2;
  }

  return 3;
}