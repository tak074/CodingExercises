var longestPalindrome = function(s) {
  if (s.length === 0) return "";
  let reversed = s.split('').reverse().join('');
  let currLongest = s[0];

  for (let i = 0; i < s.length; i++) {
      let currChar = s[i];
      let lastIndx = reversed.indexOf(currChar);
      let backStartPoint = 0;

      // when two indexes are not the same
      while (i !== s.length - 1 - backStartPoint - lastIndx) {
          // check if it's a palindrome;
          let slice = s.slice(i, s.length - backStartPoint - lastIndx);
          if (slice === slice.split('').reverse().join('') && slice.length > currLongest.length) {
              currLongest = slice;
              break;
          } else {
              let newStr = reversed.slice(lastIndx + 1);
              backStartPoint = lastIndx + 1;
              lastIndx = newStr.indexOf(currChar);
          }
      }
  }

  return currLongest;

};