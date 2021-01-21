var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }
  let ans = [];
  let carryOver = 0;
  for (let j = num1.length - 1; j >= 0; j--) {
      let digit1 = num1[j];

      for (let i = num2.length - 1; i >= 0; i--) {
          let digit2 = num2[i];
          let res = (digit1 * digit2);
          if (!ans[i]) {
            ans[i] = 0;
          }

          res += ans[i] + carryOver;
          ans[i] = res % 10;

          carryOver = 0;

          if (res >= 10) {
              carryOver = Math.floor(res / 10);
          }
      }
      ans.unshift(0);

      if (carryOver !== 0) {
          ans[0] = carryOver;
          carryOver = 0;
      }
  }

  if (carryOver !== 0) {
      ans.unshift(carryOver);
  }

  if (ans[0] === 0) {
      ans.shift();
  }
  return ans.join('');
};