/**
 * Initialize your data structure here.
 */

var Trie = function() {
  this.children = new Map();
  this.endVal = false;
}

var WordDictionary = function() {
  this.root = new Trie();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let currNode = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!currNode.children.has(word[i])) {
      currNode.children.set(word[i], new Trie());
    }
    currNode = currNode.children.get(word[i]);
    if (i === word.length - 1) {
      currNode.endVal = true;
    }
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */

WordDictionary.prototype.search = function(word) {
  let checkLetters = function(node, str) {
    if (str) {
      if (str[0] === '.') {
        let res = false;
        node.children.forEach((child) => {
          console.log('child', child);
          res = res || checkLetters(child, str.slice(1));
        })
        return res;
      } else {
        if (node.children.has(str[0])) {
          return checkLetters(node.children.get(str[0]), str.slice(1));
        } else {
          return false;
        }
      }
    } else {
      return node.endVal;
    }
  }

  return checkLetters(this.root, word);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
