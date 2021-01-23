var isPalindrome = function(x) {
  if (x < 0) return false;

  let str = x.toString();
  let reverse = str.split('').reverse().join('');

  return str === reverse;

  // let left = 0;
  // let right = x.length - 1;
  // let res = true;
  // while (left < right) {
  //   if (x[left] !== x[right]) {
  //     res = false;
  //     break;
  //   }
  //   left++;
  //   right--;
  // }

  // return res;
};