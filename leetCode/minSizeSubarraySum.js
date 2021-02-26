var minSubArrayLen = function(target, nums) {
    let minLen = Infinity;

    // iterate through nums for different starting points
    for (let i = 0; i < nums.length; i++) {
        let lenCounter = 1;
        let currSum = 0;
        let index = i;
        // iterate through the rest of the array until currSum >= target 
        while (nums[index] !== undefined) {
            currSum += nums[index];
            if (currSum >= target) {
                minLen = Math.min(minLen, lenCounter);
                break;
            }
            index++;
            lenCounter++;
        }
    }

    return minLen === Infinity? 0 : minLen;
};