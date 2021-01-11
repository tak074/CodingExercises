// Q1
var allUnique = function (str) {
  let unique = true;
  let counter = 0;

  while (unique && counter < str.length) {
    if (str.slice(counter + 1).indexOf(str[counter]) !== -1) unique = false;
    counter++;
  }

  return unique;
}

// Q2
var checkPermutation = function(str1, str2) {
  str1 = str1.sort();
  str2 = str2.sort();
  return str1 === str2;
}

// Q3
var substitute = function(str, part) {
  return str = str.split(' ').join('%20');
}

// Q4
var palindromePermutation = function(str) {
  let palindrome = true;
  let counter = 0;

  while (counter < str.length && palindrome) {
    let substring = str.slice(i + 1);
    if (substring.indexOf(str[i]) === -1) {
      if (palindrome === true) {
        palindrome = 1;
      } else {
        palindrome = false;
      }
    }
    counter++;
  }
}

// Q5
var oneEdit = function(str1, str2) {
  let lenDiff = Math.abs(str1.length - str2.length);
  if (lenDiff > 1) return false;
  else if (lenDiff === 1) {
    let longer = str1.length > str2.length? str1 : str2;
    let shorter = str1.length < str2.length? str1 : str2;;
    longer = longer.sort();
    shorter = shorter.sort();

    for (let i = 0; i < shorter.length; i++) {
      if (longer[i] !== shorter[i]) {
        return longer.slice(i + 2) === shorter.slice(i + 1);
      }
    }
  } else {
    str1 = str1.sort();
    str2 = str2.sort();

    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        return str1.slice(i + 1) === str2.slice(i + 1);
      }
    }
  }
  return true;
}

// Q6
var compress = function(string) {
  let compressed = '';
  let compressor = function(str) {
    let firstChar = str[0];
    let counter = 1;
    while (str[counter] === firstChar) {
      counter++;
    }

    let remainder = str.slice(counter);
    if (remainder.length !== 0) {
      compressor(remainder);
    }
    compressed = firstChar + counter + compressed;
  }

  compressor(string);

  return compressed.length < string.length? compressed : string;
}

// Q7
