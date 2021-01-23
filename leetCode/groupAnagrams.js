var groupAnagrams = function(strs) {
  if (strs.length === 0 || strs.length === 1) return [strs];

  let anagrams = {};

  for (let i = 0; i < strs.length; i++) {
    let key = strs[i].split('').sort().join('');

    if (!anagrams[key]) {
      anagrams[key] = [];
    }
    anagrams[key].push(strs[i]);
  }

  return Object.values(anagrams);
};