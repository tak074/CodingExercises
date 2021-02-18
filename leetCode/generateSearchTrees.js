var numTrees = function(n) {
  let memo = new Map();

  let buildTree = function(start, end) {
    if (end - start=== 0) return 1;
    if (memo.has(end - start)) return memo.get(end - start);
    let counter = 0;

    for (let i = 0; i < end - start; i++) {
      let left = buildTree(0, i);
      let right = buildTree(i + 1, end - start);

      counter += left * right;
    }
    memo.set(end - start, counter);
    return counter;
  }

  return buildTree(0, n);
};

// catalan number solution
var numTrees = function(n) {
  return factorial(2 * n) / (factorial(n + 1) * factorial(n));
};

function factorial(num){
  if (num <= 0) return 1;

  return num * factorial(num - 1);
}