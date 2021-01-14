var threeSum = function(nums) {
  if (nums.length < 3) return [];
  let combinations = [];
  let check = {};

  for (let i = 0; i < nums.length; i++) {
    let firstNum = nums[i];
    let rest = nums.slice(i + 1);
    // loop through rest
    for (let j = 0; j < rest.length; j++) {
      // find a number
      let secondNum = rest[j];
      let target = 0 - firstNum - secondNum;
      // see if the target number exist.
      let index = rest.indexOf(target);
      // if the target location is same as current number
      if (index === j) {
        // find the lastIndex of the value
        let lastIndex = rest.lastIndexOf(target);
        // if the lastIndex is not the same
        if (lastIndex !== index) {
          // add it to combinations
            let combination = [firstNum, secondNum, target];
            combination = combination.sort(function(a, b) { return a - b; });
            let key = combination.toString();

            if (!check[key]) {
                combinations.push(combination);
                check[key] = true;
            }
        }
      } else {
        if (index !== -1) {
            let combination = [firstNum, secondNum, target];
            combination = combination.sort(function(a, b) { return a - b; });
            let key = combination.toString();

            if (!check[key]) {
                combinations.push(combination);
                check[key] = true;
            }
        }
      }
    }
  }

  return combinations;
};