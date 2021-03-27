var romanToInt = function(s) {
  let roms = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000,
  }

  let nums = [];
  let lastNum = Infinity;

  for (let i = 0; i < s.length; i++) {
    let currNum = roms[s[i]];
    if (currNum > lastNum) {
      nums.push(Math.abs(nums.pop() - currNum));
    } else {
      nums.push(currNum);
    }
    lastNum = currNum;
  }

  return nums.reduce((acc, curr) => acc + curr);
};

var romanToInt = function(s) {
  let roms = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000,
  }

  let total = 0;
  let lastNum = Infinity;

  for (let i = 0; i < s.length; i++) {
    let currNum = roms[s[i]];
    if (currNum > lastNum) {
      total += currNum - (2 * lastNum);
    } else {
      total += currNum;
    }
    lastNum = currNum;
  }

  return total;
};