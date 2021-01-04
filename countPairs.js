var countPairs = function(deliciousness) {
  let mealCount = 0;

  // loop through each number
  for (let i = 0; i < deliciousness.length; i++) {
    let oneFood = deliciousness[i];
    // loop through the rest to investigate each
    let section = deliciousness.slice(i + 1);
    for (let j = 0; j < section.length; j++) {
      let currSum = oneFood + section[j];
      if (currSum % 2 === 0) {
        // use log
        let log2 = Math.log(2);
        // if currSum is a power of two
        if (Number.isInteger(Math.log(currSum) / log2)) {
          mealCount++;
        }
      }
    }
  }

  return mealCount;
};


// test that failed
// Input: [149,107,1,63,0,1,6867,1325,5611,2581,39,89,46,18,12,20,22,234]
// Output: 10;
// Expected: 12;