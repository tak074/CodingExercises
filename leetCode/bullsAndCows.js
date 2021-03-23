var getHint = function(secret, guess) {
  let bulls = 0;
  let cows = 0;

  let map = new Map();

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    }
    if (!map.has(secret[i])) map.set(secret[i], 0);
    map.set(secret[i], map.get(secret[i]) + 1);
  }

  for (let j = 0; j < guess.length; j++) {
    if (map.get(guess[j])) {
      cows++;
      map.set(guess[j], map.get(guess[j]) - 1);
    }
  }

  cows -= bulls;
  return '' + bulls + 'A' + cows + 'B';
};