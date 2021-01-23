var isPalindrome = function(x) {
  if (x < 0) return false;

  let str = x.toString();
  let reverse = str.split('').reverse().join('');

  return str === reverse;
};

var isPalindrome = function(x) {
  if (x < 0) return false;

  let left = 0;
  let right = x.length - 1;
  let res = true;
  while (left < right) {
    if (x[left] !== x[right]) {
      res = false;
      break;
    }
    left++;
    right--;
  }

  return res;
};

// fastest
var isPalindrome = function(x) {
  let num = x;
  let rev = 0;

  while (num > 1) {
    rev = (rev * 10) + num % 10;
    num = Math.floor(num / 10);
  }

  return x === rev;
};