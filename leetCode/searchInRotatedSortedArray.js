var search = function(nums, target) {
  // if the target is less than the first number
  // check from the back
  if (target < nums[0]) {
    // but if the num is greater than the last number, it means the target does not exist.
    if (target > nums[nums.length - 1]) {
      return false;
    }
    let index = nums.length - 1;
    let currNum = nums[index];
    while (index >= 0 && currNum > target) {
      index--;
      currNum = nums[index];
    }
    // currNum is either greater or equal to target.
    return currNum === target;
  } else if (target === nums[0]) {
    return true;
  } else {
    // check from the front
    // go up the nums while the target is less than the indexed num
    let index = 1;
    let currNum = nums[1];
    while (index < nums.length && currNum < target) {
      index++;
      currNum = nums[index];
    }
    // currNum is either greater or equal to target.
    return currNum === target;
  }
};