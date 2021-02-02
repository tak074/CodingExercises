var permute = function(nums) {
  if (nums.length === 1) return [nums];

  let solutions = [];
  for (let i = 0; i < nums.length; i++) {
    let currNum = [nums[i]];
    let newNum = (nums.slice(0, i)).concat(nums.slice(i + 1));
    let others = permute(newNum);
    others.forEach((comb) => {
      solutions.push(currNum.concat(comb));
    })
  }

  return solutions;
};  