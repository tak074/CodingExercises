var nextPermutation = function(nums) {
  if (nums.length === 1) return nums;
  if (nums.length === 2) return nums.reverse();

  // just switch two right most if tens digit is less than ones digit.

  // if not, move over to one more digit
      // let currDigit  = one under inspection
      // sort them in ascending order
      // find index of currDigit
      // if index === length - 1
        // expand one more digit to test it out.
      // let nextSmallest = number right after.

  let switchDigits = function(arr, n) {
    if (n === arr.length - 1) {
      return nums.reverse();
    } else {
      let changes = arr.slice(arr.length - 1 - n);
      let rest = arr.slice(0, arr.length - 1 - n);
      let lastDigit = changes[changes.length - 1];
      let secondLast = changes[changes.length - 2];
      if (lastDigit > secondLast) {
        let temp = [];
        temp.push(lastDigit);
        temp.push()
      }
    }
  }
  switchDigits(nums, 1)
};
