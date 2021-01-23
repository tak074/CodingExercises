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


var groupAnagrams = function (strs) {
  let anagrams = {};
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];

  strs.forEach((word) => {
    let key = word.split('').reduce((acc, curr) => acc * primes[curr.charCodeAt() - 97], 1);

    if (!anagrams[key]) {
      anagrams[key] = [];
    }
    anagrams[key].push(word);
  })

  return Object.values(anagrams);
};