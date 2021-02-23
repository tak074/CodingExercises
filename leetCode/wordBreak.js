var wordBreak = function(s, wordDict) {
  if (!wordDict || wordDict.length == 0) return false

  let map = new Set(wordDict);
  var dp = new Array(s.length + 1);
  dp.fill(false)
  dp[0] = true

  for(var i = 1; i <= s.length; i++) {
    for(var j = 0; j < i; j++) {
      if(dp[j] && map.has(s.slice(j, i))) {
        map.add(s.slice(0, i));
        dp[i] = true
        break;
      }
    }
  }
  return dp[s.length];
};