/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.storage = new Set();
  this.letters = [];
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  // add it into the storage
  this.storage.add(word);
  // add each letters by their indexes.
  for (let i = 0; i < word.length; i++) {
    if (this.letters[i] === undefined) {
      this.letters[i] = new Set();
    }
    this.letters[i].add(word[i]);
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  let str = [];
  let dot = false;
  let dotIndex = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === '.') {
      dot = true;
      dotIndex.push(i);
      str.push('.');
    } else {
      str.push(word[i]);
    }
  }
  if (!dot) {
    return this.storage.has(word);
  } else {
    let fillDots = function(storage, letters, str, index) {
        let res = false;
        if (letters[index] === undefined) return res;
      letters[index].forEach((char) => {
        str[index] = char;
        if (dotIndex.length === 0) {
          if (storage.has(str.join(''))) res = true;
        } else {
          let popped = dotIndex.pop();
          if (fillDots(storage, letters, str, popped)) res = true;
          dotIndex.push(popped);
        }
      })
      return res;
    }
    return fillDots(this.storage, this.letters, str, dotIndex.pop());
  }
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
