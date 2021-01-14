var threeSumClosest = function(nums, target) {
  let ans = Infinity;
    // subtact target with first num
    for (let i = 0; i < nums.length - 2; i++) {
      let oneDiff = target - nums[i];
      let subSection = nums.slice(i + 1);
      // subtract with second num
      for (let j = 0; j < subSection.length - 1; j++) {
        let twoDiff = oneDiff - subSection[j];
        let subSubSection = subSection.slice(j + 1);
        // subtract with third num.
        for (let k = 0; k < subSubSection.length; k++) {
          let threeDiff = twoDiff -subSubSection[k];
          if (Math.abs(ans) > Math.abs(threeDiff)) {
            // make it the ans;
            ans = threeDiff;
          }
        }
      }
    }
  return target - ans;
};

/*
best case:
target - (num1 + num2 + num3) = 0;

*/