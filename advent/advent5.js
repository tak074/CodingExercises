function binaryBoarding(seats) {
  var highest = 0;
  // turn seats into array
  seats = seats.split('\n');

  // loop through the array of seats
  for (var i = 0; i < seats.length; i++){
    var currSeat = seats[i];
    // divide the code into two parts
    var row = currSeat.slice(0,7);
    var col = currSeat.slice(7);
    // find row
    var rowNum = findSpot(row, 'row');
    // find col
    var colNum = findSpot(col, 'col');
    var seatId = rowNum * 8 + colNum;
    if (seatId> highest) {
      // make it a highest
      highest = seatId;
    }
  }
  return highest;
};

function findSpot(code, type = 'row') {
  if (type === 'row') {
    var rangeBeg = 0;
    var rangeEnd = 127;

    for (var j = 0; j < code.length; j++) {
      var currChar = code[j];
      var currMid = ((rangeEnd + 1 - rangeBeg) / 2) + rangeBeg;

      if (currChar === 'F') {
        rangeEnd = currMid - 1;
      } else {
        rangeBeg = currMid;
      }
    }

    return rangeBeg;
  } else {
    var rangeBeg = 0;
    var rangeEnd = 7;

    for (var j = 0; j < code.length; j++) {
      var currChar = code[j];
      var currMid = ((rangeEnd + 1 - rangeBeg) / 2) + rangeBeg;

      if (currChar === 'L') {
        rangeEnd = currMid - 1;
      } else {
        rangeBeg = currMid;
      }
    }

    return rangeBeg;
  }
}

var testData = binaryBoarding(sample);

function findVacancy(arr) {
  var vacancies = [];
  for (var k = 1; k < arr.length; k++) {
    if (arr[k - 1] + 1 !== arr[k]) {
      vacancies.push(arr[k]);
    }
  }
  return vacancies;
}

var tested = findVacancy(testData);

function cleaning(input) {
    var container = [];
    for (var x = 0; x < input.length; x++) {
        if (input[x] > 100 && input[x] % 10 !== 0) {
           container.push(input[x]);
        }
    }
    return container;
}

cleaning(tested);