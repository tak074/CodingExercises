var canCompleteCircuit = function(gas, cost) {
  let res = -1;

  // a function that calculates traveling.
  let moreGasThanCost = function(index, gas, cost) {
    let counter = 0;
    let path = gas.length;
    let fuel = gas[index];
    let burn = cost[index];

    // use mode since circular path
    while (counter < path) {
      // if breaks, return false;
      if (fuel < burn) return false;
      counter++;
      index++;
      fuel += gas[index % path];
      burn += cost[index % path];
    }
    return true;
  }

  // iterate through to find possible start point.
  for (let i = 0; i < gas.length; i++) {
    if (gas[i] >= cost[i]) {
      // function to check
      if (moreGasThanCost(i, gas, cost)) {
        res = i;
        return res;
      }
    }
  }

  return res;
};