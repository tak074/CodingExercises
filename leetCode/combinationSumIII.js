var combinationSum3 = function(k, n) {
  if (n > 45 || n === 1 || n === 2) return [];

  let findComb = function(len, val, start) {
    if (len === 0) return [];
    if (start > val) return [];
    let comb = [];
    for (let i = start; i < 10; i++) {
      if (len === 1 && i === val) return [[i]];
      let rest = findComb(len - 1, val - i, i + 1);
      if (rest.length !== 0) {
        rest.forEach((arr) => {
          arr.push(i);
          comb.push(arr);
        })
      }
    }
    return comb;
  }

  return findComb(k, n, 1);
};