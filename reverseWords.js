var reverseWords = function(s) {
  s = s.split(' ');
  s = s.reverse();
  rev = [];

  for (var i = 0; i < s.length; i++) {
    if (s[i].length === 0) {
        continue;
    } else {
        rev.push(s[i]);
    }
  }

  return rev.join(' ');
};

// (/\s+/g)
  // \s+ means "one or more spaces"
  //  /g means all occurrences
var reverseWords = function(s) {
  return str.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ');
}