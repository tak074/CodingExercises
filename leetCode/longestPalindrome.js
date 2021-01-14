var longestPalindrome = function(s) {
    let currLongest = s[0];

    for (let i = 0; i < s.length; i++) {
        let currChar = s[i];
        let lastIndx = s.lastIndexOf(currChar);

        let checkPalindrome = function(str) {
            let first = 0;
            let last = str.length - 1;
            let palindrome = true;

            while (last - first > 0 && palindrome) {
                if (str[first] !== str[last]) {
                    palindrome = false;
                }
                first++;
                last--;
            }
            return palindrome;
        }

        // when two indexes are not the same
        while (i !== lastIndx) {
            // check if it's a palindrome;
            let slice = s.slice(i, lastIndx + 1);
            if (checkPalindrome(slice) && slice.length > currLongest.length) {
                currLongest = slice;
                break;
            } else {
                let newStr = s.slice(0, lastIndx);
                lastIndx = newStr.lastIndexOf(currChar);
            }
        }
    }
    return currLongest;
};