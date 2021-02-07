var generateParenthesis = function(n) {
  // very first needs to be an open paranthesis
  // if closeCount === openCount, must add openCount.
  // maximum number of open parenthesis === n.
  
  if (n === 0) return null;

  let open_count = 0;
  let close_count = 0;

  let nextParenthesis = function(openCount, closeCount) {
      let combinations = [];
      // if all opens are used
      if (openCount === n) {
        // can only add close
        let currChar = ')';
        closeCount++;
        if (closeCount < n) {
          let nextChars = nextParenthesis(openCount, closeCount);
          nextChars.forEach((char) => {
            combinations.push(currChar + char);
          })
        } else {
          combinations.push(currChar);
        }
      } else {
        if (openCount === closeCount) {
          // start a new pair
          let currChar = '(';
          openCount++;
          let nextChars = nextParenthesis(openCount, closeCount);
          nextChars.forEach((char) => {
            combinations.push(currChar + char);
          })
        } else if (openCount > closeCount) {
          // add open and close once each.
          for (let i = 0; i < 2; i++) {
            if (i === 0) {
              let currChar = '(';
              let nextChars = nextParenthesis(openCount + 1, closeCount);
              nextChars.forEach((char) => {
                combinations.push(currChar + char);
              })
            } else {
              let currChar = ')';
              if (closeCount < n) {
                let nextChars = nextParenthesis(openCount, closeCount + 1);
                nextChars.forEach((char) => {
                  combinations.push(currChar + char);
                })
              } else {
                combinations.push(currChar);
              }
            }
          }
          // incrememt after loop to not interfere with the rest of the loop
          openCount++;
          closeCount++;
        }
      }

      return combinations;
    }
  return nextParenthesis(open_count, close_count);
};