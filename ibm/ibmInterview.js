var Palindrome = function(str) {
  if (str === '') throw 'Error';
  str = str.toLowerCase();
  let reverse = str.slice().split('').reverse().join('');

  // boolean
  return reverse === str;
}

// Palindrome('moM');

module.exports = Palindrome;