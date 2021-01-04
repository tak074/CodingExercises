var convert = function(s, numRows) {
    let totalArrs = [];
    let len = s.length;
    let interval = 2 * (numRows - 1);
    
    if (len === numRows || numRows === 1) {
        return s;
    }

    // loop numRows times
    for (let i = 0; i < numRows; i++) {
        let newRow = [];

        // if the input is 0 or numRows - 1,
        if (i === 0 || i === numRows - 1) {   
            let input = i;
            // while input < len
            while (input < len) {
                // add s[input] into newRow
                newRow.push(s[input]);
                // update input
                input += interval;
            }
        }
        else {
            let firstEnt = i;
            let secondEnt = interval - i;
            let firstTurn = true;

            while (firstEnt < len || secondEnt < len) {
                if (firstTurn) {
                    // add s[firstEnt]
                    newRow.push(s[firstEnt]);
                    // update firstEnt
                    firstEnt += interval;
                    // alternate firstTurn
                    firstTurn = false;
                }
                else {
                    // add s[secondEnt]
                    newRow.push(s[secondEnt]);
                    // update secondEnt
                    secondEnt += interval;
                    // alternate firstTurn
                    firstTurn = true; 
                }
            }
        }
        // add the newRow into totalArrs
        totalArrs.push(newRow.join(''));
    }

    return totalArrs.join('');
};

/*
 
    
    n=3
    0   4   8    12    16    20
    1 3 5 7 9 11 13 15 17 19
    2   6   10   14    18
    
    
    0, multiples of n+ 1              ++4  2(n-1)
    1, and 1 + multiples of n - 1     ++4
    2, and 2 + multiples of n + 1     ++4
    
    
    n=4
    0     6      12
    1   5 7   11 13
    2 4   8 10   14
    3     9      15
    
    0, ++6            2(n-1)
    1, ++4, ++2, ++4, ++2   ++6?
    2, ++2, ++4, ++2, ++4   ++6?
    3, ++6
    
    n=5
    0       8           16
    1     7 9        15 17
    2   6   10    14    18
    3 5     11 13       19
    4       12          20
    
    0, 8++
    1, 8++
    
*/