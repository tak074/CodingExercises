var removeDuplicates = function(nums) {
  // loop through each num
  for (let i = 0; i < nums.length - 1; i++) {
    let currNum = nums[i];
    let nextNum = nums[i + 1];
    let loc = i;
    let counter = 0;

    while (currNum === nextNum) {
      counter++;
      i++;
      nextNum = nums[i + 1];
    }

    // at this point, i + 1 should be a different number.
    // and counter equals the num of duplicates.
    // if counter === 1, it's fine, since we should allow a num to show up to twice
    // but if counter > 1
    if (counter > 1) {
      // remove through splice. counter - 1 times.
      nums.splice(loc, counter - 1);
      i -= counter - 1;
    }
  }

  return nums.length;
};


var removeDuplicates = function(nums) {
  let index = 0;
  while (nums[index + 1] || nums[index+ 1] === 0) {
    let currVal = nums[index];

    while (nums[index + 1] === nums[index]) {
      nums.splice(index,1);
    }

    index++;
  }
};