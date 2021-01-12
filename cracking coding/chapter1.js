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
var rotatePic = function(nestedArr) {
  let solution = [];
  // loop through each col
  for (let j = 0; j < nestedArr[0].length; j++) {
    // loop from the last row
    let container = [];
    for (let i = nestedArr - 1; i >= 0; i--) {
      // get the jth index from the i row. and add it to temp container
      container.push(nestedArr[i][j]);
    }
    solution.push(container);
  }
  return solution;
}

// Q8
var xBomb = function(nestedArr) {
  let cols = {};
  let ans = [];

  // loop through each rows
  for (let i = 0; i < nestedArr.length; i++) {
    // find index of a bomb
    let currRow = nestedArr[i];
    let indx = currRow.indexOf(0);
    if (indx === -1) {
      // push the entire row to ans;
      ans.push(currRow);
    } else {
      // add its index to cols if it doesn't exist
      if (!cols[indx]) cols[indx] = true;
      let checkNextBomb = function(arr) {
        // find next bomb
        let nextBomb = arr.indexOf(0);
        if (nextBomb !== -1) {
          // add the index to cols if it doesn't exist.
          if (!cols[indx]) cols[indx] = true;
          let subArr = arr.slice(nextBomb + 1);
          checkNextBomb(subArr);
        }
      }
      checkNextBomb(currRow);
      ans.push(new Array(nestedArr[0].length).fill(0));
    }
  }

  let bombIndx = Object.keys(cols);
  bombIndex.forEach((loc) => {
    for (let k = 0; k < ans.length; k++) {
      ans[k][loc] = 0;
    }
  })
  return ans;
}

// Q9
var isSubstring = function(str1, str2) {
  if (str1.length !== str2.length) return false;

  let firstLetter = str1[0];

  let tryLotations = function(str) {
    let str2First = str.indexOf(firstLetter);
    if (str2First === -1) return false;
    let shifted = str.slice(str2First) + str.slice(0, str2First);
    if (shifted === str1) {
      return true;
    } else {
      return tryLotations(shifted.slice(1) + shifted(0));
    }
  }

  return tryLotations(str2);
}
