var exist = function(board, word) {

  // loop through each letter to find the first letter.
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j <board[0].length; j++) {
      // if found the match for the first letter
      let checkProximity = function(row, col, index) {
        let currChar = word[index];
        let tile = board[row][col];
        // if it's a match
        if (tile === currChar) {
          // remove from the matrix to avoid revisits
          board[row][col] = null;
          // if it's the last letter
          if (index === word.length - 1) {
            return true;
          } else {
            // move on to the next letter
            let left = board[row][col - 1]? checkProximity(row, col - 1, index + 1) : null;
            let right = board[row][col + 1]? checkProximity(row, col + 1, index + 1) : null;
            let top = board[row - 1]? checkProximity(row - 1, col, index + 1) : null;
            let bottom = board[row + 1]? checkProximity(row + 1, col, index + 1) : null;

            if (left || right || top || bottom) {
              return true;
            }
            board[row][col] = word[index];
          }
        }

        return false;
      }
      // call the function
      // if the function returns true,
      if (checkProximity(i, j, 0)) {
        // return true
        return true;
      }
    }
  }

  // if no complete match was found, return false
  return false;
};