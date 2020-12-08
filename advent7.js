function bagginByColor(rules, bagColor) {
  rules = rules.split('\n');
  var totalColors = [bagColor];
  var checkedColor = [];

  function checkAColor(bagColor) {
    for (var i = 0; i < rules.length; i++) {
      var currRule = rules[i];
      if (currRule.indexOf(bagColor) !== -1) {
        var bagsIndex = currRule.indexOf('bags');
        var color = currRule.slice(0, bagsIndex - 1);
        if (totalColors.indexOf(color) === -1) {
            totalColors.push(color);
        }
      }
    }
  }

  while (totalColors.length !== checkedColor.length) {
    for (var j = 0; j < totalColors.length; j++) {
      var currColor = totalColors[j];
      checkAColor(currColor);
      checkedColor.push(currColor);
    }
  }

  return checkedColor.length - 1
}

function numOfBags(rules){
  // break it into an arr
  // total color list = ['shiny gold'];

  // find element that starts with current color
  // var foundAll = false;
    // find "contain" to find first number
    // find "bags" to find out the end
      // add the color to the total color list
    // if "," could be found after the color
      function getNextColor(str) {
        // find index of next " " to find the number
      }
}