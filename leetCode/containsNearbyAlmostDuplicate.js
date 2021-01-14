var containsNearbyAlmostDuplicate = function(nums, k, t) {
  //loop throught the nums,
  for (var i = 0; i < nums.length; i++) {
    // while counter is less than or equal to t
    var counter = 0;

    // loop through the rest of the nums to see if there are numbers that are t or less away
    var newNums = nums.slice(i + 1);
    for (var j = 0; j < newNums.length; j++) {
      if (counter === k) {
        break;
      }
      // increase counter
      counter++;
      // check the value
      if (Math.abs(nums[i] - newNums[j]) <= t) {
        return true;
      }

    }

  }
  return false;
};