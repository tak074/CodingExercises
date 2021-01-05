var reverse = function(x) {

  let checkOverflow = function(num) {
    return (num > (2**31) - 1 || num < -1 * (2**31));
  }

  x = x.toString().split('').reverse();

  if (x[x.length - 1] === '-') {
    x = Number('-' + x.slice(0, x.length - 1).join(''));
    return checkOverflow(x)? 0 : x;
  } else {
    x = Number(x.join(''));
    return checkOverflow(x)? 0 : x;
  }
};