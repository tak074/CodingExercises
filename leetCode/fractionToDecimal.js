var fractionToDecimal = function(numerator, denominator) {
  if (denominator === 1) return '' + numerator;
  // divide the numbers.
  let res = '';
  // negative number
  if ((numerator / denominator) < 0) res += '-';
  // add whole number to res;
  res += Math.floor(Math.abs(numerator) / Math.abs(denominator));
  res += '.';
  
  let n = Math.abs(numerator);
  let d = Math.abs(denominator);
  n = n % d;
  if (n === 0) return '' + (numerator/denominator);
  
  let map = new Map();
  while (!map.has(n)) {
    if (n === 0) return res;
    map.set(n, res.length);
    res += Math.floor(n * 10 / d);
    n = (n * 10) % d;
  }

  let repeat = res.slice(map.get(n), res.length);

  return res.slice(0, map.get(n))  + '(' + repeat + ')'; 
};