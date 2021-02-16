var numDecodings = function(s) {
  if (s.length < 1) return 0;
  let memo = [];
  var recurse = function (index) {
      let counter = 0
      if (index === s.length) return 1;
      if (memo[index] !== null) return memo[index];
      if (s[index] > 0) {
          counter += recurse(index + 1);
      }

      if (s[index] !== 0 && s[index + 1] !== null && s[index] + s[index + 1] < '27') {
        counter += recurse(index + 2);
      }
      memo[index] = counter;
      return counter;
  }
  return recurse(0);
};