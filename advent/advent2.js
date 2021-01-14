function validatePassword(str) {
  var arr = str.split('\n');
  var numOfValid = 0;
  // loop through each password to validate
  for (var i = 0; i < arr.length; i++) {
    var currStr = arr[i];
    var repeat = 0;
    // find first number
      // find index of '-' and everything before
    var firstNum = currStr.slice(0, currStr.indexOf('-'));
    // find second number
      // find index of ' ' and everything between there and '-'
    var secondNum = currStr.slice(currStr.indexOf('-') + 1, currStr.indexOf(' '));
    // find the key letter
      // find index of ':' and everything between there and ' '
    var key = currStr.slice(currStr.indexOf(' ') + 1, currStr.indexOf(':'));
    // find the password
      // everything after ':'
    var password = currStr.slice(currStr.indexOf(':') + 1);
    // loop through every character in the password
    for (var j = 0; j < password.length; j++) {
      var currChar = password[j];
      if (currChar === key) {
        repeat++;
      }
    }
    // check if repeat is between first and second number
    // if so, numOfValid++
    if (repeat >= firstNum && repeat <= secondNum) {
      numOfValid++;
    }
  }
  return numOfValid;
};

function realValidate(str) {
  var arr = str.split('\n');
  var numOfValid = 0;
  // loop through each password to validate
  for (var i = 0; i < arr.length; i++) {
    var currStr = arr[i];
    // find first number
      // find index of '-' and everything before
    var firstNum = currStr.slice(0, currStr.indexOf('-'));
    // find second number
      // find index of ' ' and everything between there and '-'
    var secondNum = currStr.slice(currStr.indexOf('-') + 1, currStr.indexOf(' '));
    // find the key letter
      // find index of ':' and everything between there and ' '
    var key = currStr.slice(currStr.indexOf(' ') + 1, currStr.indexOf(':'));
    // find the password
      // everything after ':'
    var password = currStr.slice(currStr.indexOf(':') + 1);
    // check if at least one of the location matches the key
    if (password[firstNum] === key || password[secondNum] === key) {
      // if not both
        // mark it valid.
      if (!(password[firstNum] === key && password[secondNum] === key)) {
        numOfValid++;
      }
    }

  }
  return numOfValid;
}