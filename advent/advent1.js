function multiplyComp(arr) {
  // string to array
  arr = arr.split('\n');

  // loop through each to check the value
  for (var i = 0; i < arr.length; i++ ) {
    var firstNum = Number(arr[i]);

    for (var j = i + 1; j< arr.length; j++) {
      var secondNum = Number(arr[j]);

      // check their addition
      if (firstNum + secondNum === 2020) {
        return firstNum * secondNum;
      }
    }
  }
};


function threeEntries(arr) {
  // string to array
  arr = arr.split('\n');

  // loop through each to check the value
  // get first number
  for (var i = 0; i < arr.length; i++ ) {
    var firstNum = Number(arr[i]);

    // get second number
    for (var j = i + 1; j < arr.length; j++) {
      var secondNum = Number(arr[j]);

      // get third number
      for (var k = j + 1; k < arr.length; k++) {
        var thirdNum = Number(arr[k]);

        // check their addition
        if (firstNum + secondNum + thirdNum === 2020) {
          // return their product
          return firstNum * secondNum * thirdNum;
        }
      }
    }
  }
}