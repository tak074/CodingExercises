var longestValidParentheses = function(s) {
  let stack = [-1];
  let longest = 0;

  //iterate through s
  for (let i = 0; i < s.length; i++) {
    // if s[i] === (
    if (s[i] === '(') {
      stack.push(i);
      continue;
    } else { // else
      const removed = stack.pop();
      // update longest
      if (stack.length === 0) stack.push(i);
      longest = Math.max(longest, i - removed);
    }
  }
  return longest;
};
