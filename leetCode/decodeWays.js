var numDecodings = function(s) {
  if (s[0] === '0') return 0;
  if (s.length <= 1) return 1;
  let counter = 0;

  counter += numDecodings(s.slice(1));

  if ((s[0] === '1' && s[1] !== null) || (s[0] === '2' && Number(s[1]) <= 6)) {
    counter += numDecodings(s.slice(2));
  }

  return counter;
};