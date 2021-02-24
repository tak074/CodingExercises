var fractionToDecimal = function(numerator, denominator) {
  // divide the numbers.
  var ans = numerator / denominator;
  // turn it into string
  ans = ans.toString();
  // look into the decimal
  var indx = ans.indexOf('.');
  if (indx === -1) {
    return ans;
  }
  var decimal = ans.slice(indx + 1);
  var whole = ans.slice(0, indx);

  let map = new Map();
  let i = 0;
  while(i < decimal.length && !map.has(decimal[i])) {
    if (Number(decimal[i]) > 0) {
      map.set(decimal[i], true);
    }
    i++;
  }
  if (i >= decimal.length) {
    return whole + '.' + decimal;
  }

  let startIndex = decimal.indexOf(decimal[i]);
  decimal = decimal.slice(0, startIndex) + '(' + decimal.slice(startIndex, i) + ')';

  return whole + '.' + decimal;
};