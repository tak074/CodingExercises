var fractionToDecimal = function(numerator, denominator) {
  // divide the numbers.
  var ans = numerator / denominator;
  // turn it into string
  ans = ans.toString();
  // look into the decimals
  var indx = ans.indexOf('.');
  if (indx === -1) {
      return ans;
  }
  var decimal = ans.slice(indx + 1);
  var whole = ans.slice(0, indx);
  // find any repeats
  var repeat = decimal[0];
  var counter = 0;
  while (decimal && counter <= 10**4) {
    counter++;
    decimal = decimal.slice(1);
    var currNum = decimal.slice(0, repeat.length);

    if (currNum === repeat) {
      break;
    }
    repeat += currNum;

  }

  if (!decimal) {
      return whole + '.' + repeat;
  }

  // create a new format for the decimal
  ans = whole + '.(' + repeat + ')';
  // return the new format
  return ans;
};