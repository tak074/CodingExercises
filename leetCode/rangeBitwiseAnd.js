var rangeBitwiseAnd = function(m, n) {
  m = m.toString(2);
  n = n.toString(2);

  while (m.length !== n.length) {
    if (m.length < n.length) {
      m = '0' + m;
    } else {
      n = '0' + n;
    }
  }

  let res = '';
  let fail = false;
  for (let i = 0; i < m.length; i++) {
    if (!fail && m[i] === n[i]) {
      res += m[i];
    } else {
      res += '0';
      fail = true;
    }
  }

  return parseInt(res, 2);
};

5 = 0101
6 = 0110
7 = 0111
8 = 1000
9 = 1001