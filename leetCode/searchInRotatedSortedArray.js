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

var search = function(nums, target) {
  if (nums.length === 1) return nums[0] === target;
  let first = nums[0];
  let last = nums[nums.length - 1];

  while (first >= last) {
    let copy = nums.slice();
    let moving = nums.shift();
    nums.push(moving);
    first = nums[0];
    last = nums[nums.length - 1];
    if (JSON.stringify(copy) === JSON.stringify(nums)) break;
  }
  // the array is now sorted.
  // binary search

  let binarySearch = function(arr) {
    let midIndex = Math.floor((arr.length - 1)/ 2);
    let midNum = arr[midIndex];
    if (midNum === target) return true;
    if (arr.length <= 1) return false;

    if (midNum > target) {
      return binarySearch(arr.slice(0, midIndex));
    } else {
      return binarySearch(arr.slice(midIndex + 1));
    }
  }

  return binarySearch(nums);
};

