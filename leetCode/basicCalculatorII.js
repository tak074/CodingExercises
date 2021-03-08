var calculate = function(s) {
  let nums = [];
  let mults = [];
  let adds = [];

  let currChar = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') continue;
    if (s[i] === '+' || s[i] === '-') {
      nums.unshift(Number(currChar));
      currChar = '';
      adds.push(s[i]);
    } else if (s[i] === '*' || s[i] === '/') {
      nums.unshift(Number(currChar));
      currChar = '';
      mults.push([s[i], nums.length]);
    } else {
      // numbers
      currChar += s[i];
    }
  }
  nums.unshift(Number(currChar));

  let len = nums.length;
  for (let j = 0; j < mults.length; j++) {
    let index = len - mults[j][1] - 1;
    let secondNum = nums[index];
    let firstNum = nums.splice(index + 1, 1)[0];

    if (mults[j][0] === '*') {
      nums[index] = firstNum * secondNum;
    } else {
      nums[index] = Math.floor(firstNum / secondNum);
    }
  }
  for (let k = 0; k < adds.length; k++) {
    let secondNum = nums[nums.length - 2];
    let firstNum = nums.splice(nums.length - 1, 1)[0];

    if (adds[k] === '+') {
      nums[nums.length - 1] = firstNum + secondNum;
    } else {
      nums[nums.length - 1] = firstNum - secondNum;
    }
  }

  return nums[0];
};

console.log(calculate('1*2/3*4-5/1 0 + 2*7 +4'));