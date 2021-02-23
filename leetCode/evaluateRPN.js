var evalRPN = function(tokens) {
  if (!tokens) return null;
  if (tokens.length === 1) return Number(tokens[0]);

  let addition = function(a, b) {return a + b};
  let subtraction = function(a, b) {return a - b};
  let multiplication = function(a, b) {return a * b};
  let division = function(a, b) {return Math.trunc(a / b)};

  let operation = function(str, a, b) {
    if (str === '+') {
      return addition(a, b);
    } else if (str === '-') {
      return subtraction(a, b);
    } else if (str === '*') {
      return multiplication(a, b);
    } else if (str === '/') {
      return division(a, b);
    }
  }
  let nums = [];
  tokens.forEach((token) => {
    if (Number(token) || token === '0') {
      nums.push(Number(token));
    } else {
      let b = nums.pop();
      let a = nums.pop();
      nums.push(operation(token, a, b));
    }
  })

  return nums[0];
};