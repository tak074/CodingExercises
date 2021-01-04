// if consecutive rain on same lake, return empty array.
// if no lake is rained on twice, it's fine
// if there's n number of lakes that will flood, there must be at least n number of 0 to prevent it.


// test more for [1,0,2,0,2,1]
// current model prioritizes filling in from last zero
// keep track of number of zeros between each of flooding number
// start drying from the flooding lakes with smallest number of zeros

var avoidFlood = function(rains) {
  let floodCount = {};
  let dryDays = 0;
  let lastRainedOn = -1;

  // loop through rains
  for (let i = 0; i < rains.length; i++) {
    let currentLake = rains[i];
    if (lastRainedOn === currentLake) {
      if (lastRainedOn !== 0) {
        return [];
      }
    }
    lastRainedOn = currentLake;
    // if dry day, increment dryDays
    if (currentLake === 0) {
      dryDays++;
    } else {
      // check if currentLake exists in floodCount
      if (floodCount[currentLake] === 0 || floodCount[currentLake]) {
        // if exists, increment by one.
        floodCount[currentLake]++;
      } else {
        // if not, make one, set it equal to 0.
        floodCount[currentLake] = 0;
      }
    }
  }

  // after the loop
  let reducer = (acc, memo) => acc + memo;
  let totalFlood = (Object.values(floodCount)).reduce(reducer);
  // compare if flooding is manageable
  if (totalFlood > dryDays) {
    // if unmanageable, return empty array.
    return [];
  } else {
    // if no flooding has happened, no need to dry so return default
    if (totalFlood === 0 ) {
      return randomFill(rains);
    } else {
      // if manageable, come up with strategy.
      let strategy = manageFlood(floodCount, rains);
      // fill up any dry days left
      for (let u = 0; u < rains.length; u++) {
          if (rains[u] === 0) {
              strategy[u] = 1;
          }
      }
      return strategy;
    }
  }
};

var manageFlood = function(floodCount, rains) {
  let solution = Array(rains.length).fill(-1);
  let fixes = [];
  // loop through floodCount to find pair with value greater than 0
  for (var key in floodCount) {
    let count = floodCount[key];
    if (count > 0) {
      // temp = array of [index, lakeNum];
      temp = (findSolution(Number(key), count, rains));
      for (let p = 0; p < temp.length; p++) {
          fixes.push(temp[p]);
      }
    }
  }

  for (var k = 0; k < fixes.length; k++) {
    let currFix = fixes[k];
    // change specified index into specified lakeNum
    solution[currFix[0]] = currFix[1];
  }

  return solution;
}

var randomFill = function(rains) {
  let defaultLake = 1;
  let solution = Array(rains.length).fill(-1);

  // to apply defaultLake
  // loop through each rain
  for (let o = 0; o < rains.length; o++) {
    // if 0 change corresponding index of solution to defaultLake
    if (rains[o] === 0) {
      solution[o] = defaultLake;
    }
  }

  return solution;
};

var findSolution = function(lakeNum, count, rains) {
  // instruction = arrays of tuples. [index, lakeNum];
  let instructions = [];
  // find first index of rain from rains
  let firstIndx = rains.indexOf(lakeNum);
  // find second index of rain from rains
  let secondIndx = (rains.slice(firstIndx + 1)).indexOf(lakeNum) + firstIndx + 1;
  // find location of last zero before the second rain
  // from the reversed slice of the two rain indices
  let lastZeroIndx = secondIndx - ((rains.slice(firstIndx, secondIndx + 1)).reverse()).indexOf(0);
  // if rain exists
  if (lastZeroIndx !== secondIndx + 1) {
    instructions.push([lastZeroIndx, lakeNum])
    // eliminate that dry day from other options
    rains[lastZeroIndx] = null;
    // decrement count
    count--;
    // if count is still greater than 0, repeat.
    if (count > 0) {
      let otherInstructions = findSolution(lakeNum, count, rains.slice(secondIndx));
      // loop through each instructions, and add it into instruction
      for (let j = 0; j < otherInstructions.length; j++) {
        let currInstruction = otherInstructions[j];
        // adjust the index
        currInstruction[0] += secondIndx;
        // eliminate that dry day from other options
        rains[currInstruction[0]] = null;
        // add it to the overall instructions
        instructions.push(currInstruction);
      }
    }
  }

  return instructions;
}