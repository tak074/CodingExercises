var minSubArrayLen = function(target, nums) {
    let minLen = Infinity;

    let left = 0;
    let currSum = 0;
    // iterate through nums for different starting points
    for (let right = 0; right < nums.length; right++) {
        currSum += nums[right];

        while (currSum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            currSum -= nums[left];
            left++;
        }
    }

    return minLen === Infinity? 0 : minLen;
};
