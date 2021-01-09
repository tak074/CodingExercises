function solve(nums) {
  // needs to find the GCD amongst all the elements of the nums.
  let gcd = 0;
  let cd = {};

  // loop through nums
  for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      // for each element, record the element.
      for (let j = 1; j <= num; j++) {
          if (num % j === 0) {
              if (cd[j]) {
                  cd[j]++;
                  if (cd[j] === nums.length) {
                      // compare and make it gcd
                      gcd = j > gcd? j : gcd;
                  }
              } else {
                  cd[j] = 1;
              }

          }

      }
  }

  return gcd;
}



function solve(votes) {
  let hasVoted = {};
  let res = false;

  // loop through each votes
  votes.forEach((voter) => {
    let voter_id = voter[1];
    // check if the voter voted
    if (hasVoted[voter_id]) {
      // if so, flag it
      res = true;
    } else {
      // if not add him
      hasVoted[voter_id] = true;
    }
  })

  return res;
}

function solve(intervals) {
  let beg = intervals[0][0];
  let end = intervals[0][1];

  intervals.forEach((interval) => {
      let first = interval[0];
      let last = interval[1];
      beg = first > beg? first : beg;
      end = last < end? last : end;
  })

  return [beg, end];
}

function solve(root, t) {
  let smallestLarge = false;

  let inspect = function(node) {
  // if the current root is smaller than t, move to its right.
      if (node.val < t) {
          inspect(node.right);
      } else {
          // if the smallestLarge does not exist yet
          if (!smallestLarge) {
              // make current node.val as smallestLarge
              smallestLarge = node.val;
          } else {
              smallestLarge = smallestLarge > node.val? node.val : smallestLarge;
              // if the node has left node, go to that node.
              inspect(node.left);
          }
      }
  }

  inspect(root);
  return smallestLarge;
}


solve(root, t) {
  let smallestLarge = false;

  let inspect = function(node) {
  // if the current root is smaller than t, move to its right.
      if (node.val <= t) {
          if (node.right) inspect(node.right);
      } else {
          // if the smallestLarge does not exist yet
          if (!smallestLarge) {
              // make current node.val as smallestLarge
              smallestLarge = node.val;
          } else {
              smallestLarge = smallestLarge > node.val? node.val : smallestLarge;
          }
          // if the node has left node, go to that node.
          if (node.left) inspect(node.left);
      }
  }

  inspect(root);
  return smallestLarge;
}

// day 2
solve(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        let currNum = nums[i];
        let target = k - currNum;

        if (nums.slice(i + 1).indexOf(target) !== -1) {
            return true;
        }
    }

    return false;
}

solve(n) {
    let base = [1, 1];

    if (n === 0) {
        return [1];
    }
    if (n === 1) {
        return base;
    } else {
        let reps = 1;

        while (reps < n) {
            let row = [];

            for (let i = 1; i < base.length; i++) {
                row.push(base[i - 1] + base[i]);
            }
            row.unshift(1);
            row.push(1);
            base = row;
            reps++
        }

        return base;
    }
}


solve(s0, s1, n) {
    let sequences = [s0, s1];
    let length = 2;

    if (n === 0) {
        return s0;
    } else if (n === 1) {
        return s1;
    } else {
        while (length < n) {
            if (length % 2 === 0) {
                // A[n] = A[n - 1] + A[n - 2]
                sequences[length] = sequences[length - 1] + sequences[length - 2];
            } else {
                sequences[length] = sequences[length - 2] + sequences[length - 1];
            }


            length++
        }

        return sequences[n];
    }
}


// day 3

solve(text, key) {
    let alphs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let shifted = '';

    for (let i = 0; i < text.length; i++) {
        let currChar = text[i];
        let shiftBy = alphs.indexOf(key[i]);
        let newIndx = alphs.indexOf(currChar) + shiftBy;
        shifted += alphs[newIndx % 26];
    }

    return shifted;
}

solve(matrix) {
    let solution = 0;
    let counter = 1;
    // add first row
    (matrix[0]).forEach((num) => {
        solution += num;
    });

    // add inbetween rows
    while (counter < matrix.length - 1) {
        solution += (matrix[counter][matrix.length - counter - 1]);
        counter++;
    }

    // add last row
    (matrix[matrix.length - 1]).forEach((num) => {
        solution += num;
    });

    return solution;
}

solve(root) {
    if (root === null) {
        return null;
    }

    // create an array with every value
    let vals = [];
    (function recordVal(node) {
        vals.push(node.val);
        if (node.left) recordVal(node.left);
        if (node.right) recordVal(node.right);
    })(root);

    // sort it
    vals = vals.sort(function(a,b) { return a - b; });

    // make a linkedList with the same order.
    let linkedList = new LLNode(vals[0]);
    let currNode = linkedList;

    for (let i = 1; i < vals.length; i++) {
        let newNode = new LLNode(vals[i]);
        currNode.next = newNode;
        currNode = currNode.next;
    }

    return linkedList;
}


solve(s) {
    // keep count of ( and )
    let open = 0;
    let off = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            open++;
        } else if (s[i] === ')') {
            if (open > 0) {
                open--;
            } else {
                off++;
            }
        }
    }

    return open + off;
}