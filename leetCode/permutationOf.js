var isPermutation = function(string1, string2) {
  if (string1.length !== string2.length) return false;

  let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < string1.length; i++) {
    sum1 += primes[string1.charCodeAt(i) - 97];
    sum2 += primes[string2.charCodeAt(i) - 97];
  }

  return sum1 === sum2;
}