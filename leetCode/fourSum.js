var fourSum = function(nums, target) {
  if (nums.length < 4) return [];

  //sort nums.
  nums = nums.sort((a, b) => a - b);
  let combinations = [];

  // loop through nums
  for (let i = 0; i < nums.length; i++) {
    // choose the first number.
    let first = nums[i];
    // loop through the rest
    for (let j = i + 1; j < nums.length; j++) {
      // choose the second number.
      let second = nums[j];
      let left = j + 1;
      let right = nums.length - 1;
      // get the next availalbe number as the third number
      // get the last number as the fourth number

      // while left < right
      while (left < right) {
        let third = nums[left];
        let fourth = nums[right];
        let sum = first + second + third + fourth;
        // if their sum is greater than target
        if (sum > target) {
          right--;
        } else if (sum < target) {
          // else if sum is less than target
          left++;
        } else {
          // else
          combinations.push([first, second, third, fourth]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        }
      }
      while (nums[j] === nums[j + 1]) j++;
    }
    while (nums[i] === nums[i + 1]) i++;
  }

  return combinations;
};