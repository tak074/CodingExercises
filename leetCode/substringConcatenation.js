var findSubstring = function(s, words) {
  let res = [];
  let wordLen = words[0].length;
  let strLen = wordLen*words.length;
  let storage = {};
  words.forEach((word) => {
    storage[word] = storage[word] + 1 || 1;
  })

  const isConcatenated = function(str) {
    let map = {};

    for (let i = 0; i < str.length; i += wordLen) {
      map[str.slice(i, i + wordLen)] = map[str.slice(i, i + wordLen)] + 1|| 1;
    }

    for (let key in storage) {
      if (storage[key] !== map[key]) return false;
    }

    return true;
  }

  for (let i = 0 ; i <= s.length - strLen; i++) {
    let subStr = s.slice(i, i + strLen);
    if (isConcatenated(subStr)) res.push(i);
  }

  return res;
};

// another attempt.
// go through s to find starting indexes of each elements in words.
// save it as array.

// these arrayed values will be in numerical order as it was iterated from the head.
// check the first element of each array to see if they are consecutives.
  // their indexes are words[0].length apart.
// if they are in consecutive orders
  // add the starting value to res.

// after, remove the smallest index amongst them.

var findSubstring = function(s, words) {
  let storage = [];

  for (let i = 0; i <= s.length - words[0].length; i++) {
    let currStr = s.slice(i, i + words[0].length);
    let currIndx = words.indexOf(currStr);

    if (currIndx !== -1) {
      if (!storage[currIndx]) {
        storage[currIndx] = [];
      }
      storage[currIndx].push(i);
    }
  }

  console.log(storage);
};