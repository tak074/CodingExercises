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