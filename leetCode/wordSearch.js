var exist = function(board, word) {

  // loop through each letter to find the first letter.
  for (let i = 0; i < board.length; i++) {
    let firstLet = word[0];
    if (board[i].indexOf(firstLet) === -1) continue;
    for (let j = 0; j <board[0].length; j++) {
      // if found the match for the first letter

      let checkProximity = function(row, col, index, matrix) {
        let currChar = word[index];
        let tile = matrix[row][col];
        // if it's a match
        if (tile === currChar) {
          let newMatrix = matrix.map(arr => arr.slice());
          // remove from the matrix to avoid revisits
          newMatrix[row][col] = null;
          // if it's the last letter
          if (index === word.length - 1) {
            return true;
          } else {
            // move on to the next letter
            let left = newMatrix[row][col - 1]? checkProximity(row, col - 1, index + 1, newMatrix) : null;
            let right = newMatrix[row][col + 1]? checkProximity(row, col + 1, index + 1, newMatrix) : null;
            let top = newMatrix[row - 1]? checkProximity(row - 1, col, index + 1, newMatrix) : null;
            let bottom = newMatrix[row + 1]? checkProximity(row + 1, col, index + 1, newMatrix) : null;

            return left || right || top || bottom;
          }
        }

        return false;
      }
      // call the function
      // if the function returns true,
      if (checkProximity(i, j, 0, board)) {
        // return true
        return true;
      }
    }
  }

  // if no complete match was found, return false
  return false;
};