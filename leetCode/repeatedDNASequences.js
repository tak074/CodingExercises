var findRepeatedDnaSequences = function(s) {
  let map = new Set;
  let repeats = new Set();

  for (let i = 0; i < s.length - 9; i++) {
    const currStr = s.slice(i, i + 10);
    if (map.has(currStr)) {
      repeats.add(currStr);
    } else {
      map.add(currStr);
    }
  }

  return Array.from(repeats);
};