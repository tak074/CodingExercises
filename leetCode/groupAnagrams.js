var groupAnagrams = function(strs) {
  if (strs.length === 0 || strs.length === 1) return [strs];

  let anagrams = {};

  for (let i = 0; i < strs.length; i++) {
    let currWord = strs[i];
    let key = currWord.sort();

    if (!anagrams[key]) {
      anagrams[key] = [];
    }
    anagrams[key].push(currWord);
  }

  return Object.values(anagrams);
};