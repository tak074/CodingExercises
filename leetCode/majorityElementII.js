var majorityElement = function(nums) {
  let map = new Map();
  let res = new Set();

  for (let i = 0; i < nums.length; i++) {
    // check from the map
    if (map.has(nums[i])) {
      // increment associated value
      let counter = map.get(nums[i]) + 1;
      // if the value is greater than n/3
      if (counter > (nums.length / 3)) {
        res.add(nums[i]);
      } else {
        map.set(nums[i], counter);
      }
      // add to res;
    } else {
      map.set(nums[i], 1);
        if (1 > nums.length / 3) res.add(nums[i]);
    }
  }

  return [...res];
};

var majorityElement = function(nums) {
  // since the criteria requres a number to show up 'more' than n/3 times, there can be utmost 2 numbers.
  // all values in nums are greater than 1.

  let candidate1 = 0;
  let count1 = 0;
  let candidate2 = -1;
  let count2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === candidate1) {
      count1++;
    } else if (nums[i] === candidate2) {
      count2++;
    } else if (count1 === 0) {
      candidate1 = nums[i];
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = nums[i];
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  let validate = function(num) {
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
      if (nums[i] === num) {
        count++;
        if (count > (nums.length / 3)) return true;
      }
    }

    return false;
  }

  let res = [];
  if (validate(candidate1)) res.push(candidate1);
  if (validate(candidate2)) res.push(candidate2);

  return res;
};