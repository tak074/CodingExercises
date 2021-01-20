var combinationSum2 = function(candidates, target) {
  candidates = candidates.sort((a,b) => a - b);

  let solve = function(candidates, target) {
    let right = candidates.length - 1;
    let solutions = [];

    while (right >= 0) {
      while (candidates[right] > target) {
        right--;
      }
      if (right === -1) {
        break;
      }

      //right is now less than or equal to target;
      if (candidates[right] === target) {
        solutions.push([target]);
      } else {
        let endings = solve(candidates.slice(0, right), target - candidates[right]);
        if (endings.length !== 0) {
          endings.forEach((combo) => {
            solutions.push([candidates[right]].concat(combo));
          })
        }
      }

      // prevent duplicates
      while ((candidates[right] === candidates[right - 1]) && right >= 0) {
        right --;
      }

      right--;
    }

    return solutions;
  }

  return solve(candidates, target);
};