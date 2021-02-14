var grayCode = function(n) {
  let res = [];
  // there can be n number of digits.
  // make the last digit to one.
};



// n === 4
/*
0000
0001
0011
0010
0110
0111
0101
1101
1100
1110
1010
1000
1001


000
001 inc right most
011 next available
010 dec right most
110 next available
111 inc right most
101 since no next available. dec second right most
100 dec right most

0 1 3 2 6 7 5 4

0000
0001 inc right most
0011 next available
0010 dec right most
0110 next available
0111 inc right most

0101
0100

[0,1,3,2,6,7,5,4,12,13,15,14,10,11,9,8]

0000
0001

0011
0010

0110
0111
0101
0100

1100
1101
1111
1110
1010
1011
1001
1000

[24,25,27,26,30,31,29,28,20,21,23,22,18,19,17,16]

11000 added one in the front
11001 inc right most
11011 next available
11010 dec right most
11110 next available
11111 inc right most
11101 dec second right most
11100 dec right most
10100 dec fourth right most because num resulting in third right most has been used
10101 inc right most
10111 next available
10110 dec right most
10010 dec third right most because num resulting in second right most has been used
10011 inc right most
10001 dec second right most
10000 dec right most.


n = 1 | 0, 1, |
n = 2 | 3,  2,|
n = 3 | 6,  7,  5,  4,|
n = 4 | 12, 13, 15, 14, 10, 11,  9,  8,|
n = 5 | 24, 25, 27, 26, 30, 31, 29, 28, 20, 21, 23, 22, 18, 19, 17, 16|
n = 6 | 48, 49, 51, 50, 54, 55, 53, 52, 60, 61, 63, 62, 58, 59, 57, 56, 40, 41, 43, 42, 46, 47, 45, 44, 36, 37, 39, 38, 34, 35, 33, 32

n = 1 |  +0, +1,
n = 2 |  +2, -1,
n = 3 |  +4, +1, -2, -1,
n = 4 |  +8, +1, +2, -1, -4, +1, -2, -1,
n = 5 | +16, +1, +2, -1, +4, +1, -2, -1, -8, +1, +2, -1, -4, +1, -2, -1
n = 6 | +32, +1, +2, -1, +4, +1, -2, -1, +8, +1, +2, -1, -4, +1, -2, -1, -16, +1, +2, -1, +4, +1, -2, -1, -8, +1, +2, -1, -4, +1, -2, -1

*/