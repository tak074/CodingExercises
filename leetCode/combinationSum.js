var combinationSum = function(candidates, target) {
  let solutions = [];
  let right = candidates.length - 1;

  while (right >= 0) {
    while ((candidates[right] > target || candidates[right] === candidates[right - 1]) && right >= 0) {
      right--;
      if (right === -1) {
        break;
      }
    }
    if (right === -1) {
      continue;
    }
    let currNum = candidates[right];
    // right is the correct starting point now.
    if (currNum === target) {
      solutions.push([target]);
      right--;
    } else {
      let temp = [currNum];
      let otherOptions = combinationSum(candidates.slice(0, right + 1), target - currNum);
      right--;
      
      if (otherOptions.length !== 0) {
        otherOptions.forEach((comb) => {
          solutions.push(temp.concat(comb));
        })
      }
    }
  }

  return solutions;
};