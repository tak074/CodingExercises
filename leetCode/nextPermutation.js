var nextPermutation = function(nums) {
  if (nums.length === 1) return nums;
  if (nums.length === 2) return nums.reverse();
  
  let switchDigits = function(n) {
    if (n > nums.length - 1) {
      return nums.reverse();
    } else {
      let currDigit = nums[nums.length - 1 - n];
      let sorted = nums.slice(nums.length - 1 - n);
      let unchanged = nums.slice(0, nums.length - 1 - n);

      sorted.sort((a,b) => a - b);
      let index = sorted.lastIndexOf(currDigit);
      
      if (index === sorted.length - 1) {
        return switchDigits(n + 1);
      }
      let newHead = sorted[index + 1];
      sorted.splice(index + 1, 1);

      unchanged.push(newHead);
      sorted.forEach((num) => {
        unchanged.push(num);
      })
      unchanged.forEach((val, index) => {
          nums[index] = val;
      })
      return nums;
    }
  }
  return switchDigits(1);
};
