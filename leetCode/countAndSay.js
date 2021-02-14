var countAndSay = function(n) {
  let res;
  let counter = 0;

  let transform = function(str) {
    if (str === '1') {
      return '11';
    }

    let ans = '';
    let i = 0;
    while (i <= str.length - 1) {
      let count = 0;
      let currChar = str[i];
      while (currChar === str[i]) {
        count++;
        i++;
      }
      // there are count number of currChars
      ans = ans + count + currChar;
    }

    return ans;
  }

  while (counter < n) {
    // transform
    if (counter === 0) {
      res = '1';
    } else {
      res = transform(res);
    }
    counter++;
  }

  return res;
};