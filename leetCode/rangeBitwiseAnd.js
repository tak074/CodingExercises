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

  let res = new Array(m.length).fill(0);
  for (let i = 0; i < m.length; i++) {
    if (m[i] === n[i]) {
      res[i] = m[i];
    } else {
      break;
    }
  }
  res = res.join('');

  return parseInt(res, 2);
};