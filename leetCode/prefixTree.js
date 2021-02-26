var Trie = function() {
  this.dict = new Set();
  this.pre = new Set();
};

/**
* Inserts a word into the trie.
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  this.dict.add(word);
  for (let i = 1; i <= word.length; i++) {
      this.pre.add(word.slice(0, i));
  }
};

/**
* Returns if the word is in the trie.
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  return this.dict.has(word);
};

/**
* Returns if there is any word in the trie that starts with the given prefix.
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  return this.pre.has(prefix);
};