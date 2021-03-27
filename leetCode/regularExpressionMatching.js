var isMatch = function(s, p) {
  if (!p) return !s;

  const firstChar = p[0];
  const flag = p[1] === '*';

  if (!s) {
    if (flag) return isMatch(s, p.slice(2));
    else return false;
  }
  // if p[0] === '.'
  if (p[0] === '.') {
    if (flag) return isMatch(s, p.slice(2)) || isMatch(s.slice(1), p);
    return isMatch(s.slice(1), p.slice(1));
  } else if (p[0] !== '*') {   // if p[0] is a letter
    if (p[0] === s[0]) {
      if (flag) return isMatch(s, p.slice(2)) || (isMatch(s.slice(1), p));

      // if next value is not '*'
      // move on to the next letter
      return isMatch(s.slice(1), p.slice(1));
    }
    if (flag) return isMatch(s, p.slice(2));

    return false;
  }
};