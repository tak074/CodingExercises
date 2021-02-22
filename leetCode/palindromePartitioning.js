var partition = function(s) {
  if (s.length === 0) return [];
  if (s.length === 1) return [[s]];
  // every letter by itself is a palindrome.

  let res = [];

  let checkPalindrome = function(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
  }

  let findPalindrome = function(str, currSols) {
    if (!str) {
      res.push(currSols);
      return;
    }

    for (let i = 1; i <= str.length; i++) {
      let first = str.slice(0, i);
      if (checkPalindrome(first)) {
        findPalindrome(str.slice(i), [...currSols, first]);
      }
    }
  }

  findPalindrome(s, []);

  return res;
};