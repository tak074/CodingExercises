var findSubstring = function(s, words) {
  let res = [];
  let first = words[0];

  // iterate through s
  for (let i = 0 ; i <= s.length - first.length; i++) {
    let loc = s.slice(i, i + words[0].length);
    let storage = words.slice(1);
    while (loc !== -1) {
      // remove that index of word.
      storage.splice(loc, 1);
      loc = storage.indexOf(s.slice(i + first.length, i + first.length + first.length));
    }

    if (storage.length === 0) res.push(i);
  }

  // for each of the incidences, check if any of the word in words is the next word
  // continue while words is not empty or returned false.
  // if successfully ends, add the index to the res

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