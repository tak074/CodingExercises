// arr1 = [1,2,5]
// arr2 = [2,3,5,0]

// res  = [3,6,0,0]

const returnSumArray = function(arr1, arr2) {
  // reverse arrays
  arr1 = arr1.reverse();
  arr2 = arr2.reverse();

  while (arr1.length !== arr2.length) {
    if (arr1.length > arr2.length) {
      arr2.unshift(0);
    } else {
      arr1.unshift(0);
    }
  }

  let carryOver = 0;
  let res = [];

  // iterate through
  for (let i = 0; i < arr1.length; i++) {
    let firstNum = arr1[i];
    let secondNum = arr2[i];
    let sum = firstNum + secondNum + carryOver;
    if (sum >= 10) {
      sum = sum % 10;
      carryOver = 1;
    }
    res[i] = sum;
  }

  return res.reverse();
}





