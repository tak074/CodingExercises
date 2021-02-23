var wordBreak = function(s, wordDict) {

  let formulate = function(currWord) {
    for (let i = 0; i < wordDict.length; i++) {
      let temp = currWord + wordDict[i];
      if (temp === s.slice(0, temp.length)) {
        if (temp === s) return true;
        if (formulate(temp)) return true;
      }
    }
    return false;
  }

  return formulate('');
};