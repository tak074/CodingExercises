function numOfCollision(str) {
  var arr = str.split('\n');
  var row = 0;
  var col = 0;
  var counter = 0;

  while (row < arr.length) {
    var row2 = row % (arr.length);
    var col2 = col % (arr[0].length);

    if (arr[row2][col2] === '#') {
      counter++;
    }

    row += 1;
    col += 3;
  }

  return counter;
};
