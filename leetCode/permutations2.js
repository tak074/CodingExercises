var permuteUnique = function(nums) {
  if (nums.length === 1) return [nums];

  let check = {};
  let solutions = [];

  for (let i = 0; i < nums.length; i++) {
    let currNum = [nums[i]];
    let newNum = (nums.slice(0, i)).concat(nums.slice(i + 1));
    let others = permuteUnique(newNum);
    others.forEach((comb) => {
      let newComb = currNum.concat(comb);
      let key = newComb.join('');
      if (!check[key]) {
        solutions.push(newComb);
      }
      check[key] = true;
    })
  }

  return solutions;
};