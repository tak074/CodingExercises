var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  let letters = {
      2 : ['a', 'b', 'c'],
      3 : ['d', 'e', 'f'],
      4 : ['g', 'h', 'i'],
      5 : ['j', 'k', 'l'],
      6 : ['m', 'n', 'o'],
      7 : ['p', 'q', 'r', 's'],
      8 : ['t', 'u', 'v'],
      9 : ['w', 'x', 'y', 'z']
  };


  let findLetter = function(str) {
      let ans = [];
      let key = str[0];
      let combination = '';

      letters[key].forEach((char) => {
          combination = char;
          if (!!str.slice(1)) {
              let next = findLetter(str.slice(1));
              next.forEach((newChar) => {
                  ans.push(combination + newChar);
              })
          } else {
              ans.push(combination);
          }
      })

      return ans;
  };

  return findLetter(digits);
};