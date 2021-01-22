var permuteUnique = function(nums) {
  if (nums.length === 1) return [nums];

  // let check = {};
  let solutions = [];
  let numsUsed = {};

  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    if (numsUsed[currNum]) continue;
    numsUsed[currNum] = true;
    currNum = [currNum];
    let newNum = (nums.slice(0, i)).concat(nums.slice(i + 1));
    let others = permuteUnique(newNum);
    others.forEach((comb) => {
      let newComb = currNum.concat(comb);
      let key = newComb.join('');
      solutions.push(newComb);

    })
  }

  return solutions;
};