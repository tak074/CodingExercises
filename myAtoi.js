/*
String to Integer (atoi)

Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.
*/


var myAtoi = function(s) {
  s = s.trim();
  s = s.split(' ');

  var strNum = s[0];

  for (var i = 0; i < s[0].length; i++) {

      if (!Number(s[0][i])) {
          if (s[0][i] === '-' || s[0][i] === '+') {
              if (i === 0) {
                  continue;
              } else {
                  strNum = s[0].slice(0, i);
                  break;
              }
          } else if (s[0][i] === '0'){
              continue;
          }else {
              strNum = s[0].slice(0, i);
              break;
          }

      }
  }

  var num = Number(strNum);

  if (!num) {
      return 0;
  }
  if (num > (2**31) - 1) {
      return (2**31) - 1;
  } else if (num < -(2**31)){
      return -(2**31);
  } else {
      return num;
  }
};