var convert = function(s, numRows) {
    // loop through the string
        // let rowNum = i % 2(numRows - 1);
        // if rowNum === 0
            // first row
        // else if rowNum === 1
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