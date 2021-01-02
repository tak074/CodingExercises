// 1 <= num <= 3999


var intToRoman = function(num) {
    let romanized = '';
    let romanDict = [['I', 'V'], ['X', 'L'], ['C', 'D'], ['M', '?']];
    // break it down into array
    num = num.toString().split('').reverse(); // array of string type elements from ones place first
    // loop through each broken down elements
    for (let i = 0; i < num.length; i++) {
        let currNum = Number(num[i]);
        // change it into romans
        if (currNum === 0) {
            // 0
        } else if (currNum < 4) {
            // 1, 2, 3
            while (currNum > 0) {
                romanized = romanDict[i][0] + romanized;
                currNum--;
            };
        } else if (currNum === 4) {
            romanized = romanDict[i][0] + romanDict[i][1] + romanized;
        } else if (currNum < 9) {
            // 5, 6, 7, 8
            let temp = romanDict[i][1];
            while (temp > 5) {
                temp = temp + romanDict[i][0];
                temp--;
            };
            romanized = temp + romanized;
        } else if (currNum === 9) {
            // 9
            romanized = romanDict[i][0] + romanDict[i + 1][0] + romanized;
        }
    }

    return romanized;
};