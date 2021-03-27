var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  let pre = '';
  let match = true;

  for (let i = 0; i < strs[0].length; i++) {
    let currLet = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== currLet) {
        match = false;
        break;
      }
    }
    if (!match) break;
    pre += currLet;
  }

  return pre;
};

var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  let pre = '';
  let index = 0;

  while (strs[0][index] && strs.every((word) => word[index] === strs[0][index])) {
    pre += strs[0][index];
    index++;
  }

  return pre;
};