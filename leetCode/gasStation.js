var canCompleteCircuit = function(gas, cost) {
  let res = 0;
  let totalGas = 0;
  let currGas = 0;
  // iterate through to find possible start point.
  for (let i = 0; i < gas.length; i++) {
    currGas += gas[i] - cost[i];
    totalGas += gas[i] - cost[i];
    if (currGas < 0) {
      currGas = 0;
      res = i + 1;
    }
  }
  return totalGas < 0? -1 : res;
};