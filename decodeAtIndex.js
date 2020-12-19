// smaller number version

// var decodeAtIndex = function(S, K) {
//   let tape = '';
//   for (let i = 0; i < S.length; i++) {
//     // if tape is long enough, break the loop
//     if (tape.length >= K) {
//       break;
//     }
//     let currChar = S[i];
//     let repeatNum = Number(currChar);
//     // is currChar a number?
//     if (!!repeatNum) {
//       // if it is a number
//       let currTape = tape;
//       for (let j = 1; j < repeatNum; j++) {
//         tape += currTape;
//       }
//     } else {
//       // if it is NOT a number
//       // add it to the tape
//       tape += currChar;
//     }
//   }

//   return tape[K - 1];
// }


// larger number version

var decodeAtIndex = function(S, K) {
  var tapeLen = 0;
  
  // loop through S
  for (var i = 0; i < S.length; i++) {
    // currentChar
    var currChar = S[i];

    // if Number
    if (!!Number(currChar)) {
      // potential new tape length
      var newLength = tapeLen * Number(currChar);
      if (newLength >= K) {
        var newIndex = K % tapeLen;
        decodeAtIndex(S, newIndex);
      } else {
        tapeLen = newLength;
      }
    } else {
      // increment tapeLen
      tapeLen++
      // if tapeLen === K
      if (tapeLen === K) {
        return currChar
      }
    }
  }
};