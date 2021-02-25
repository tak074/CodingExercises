// recursion
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    
    let visitHouse = function(arr) {
        if (arr.length === 0) return 0;
        if (arr.length === 1) return arr[0];
        let maxes = [];        
        let currSum = 0;
        
        for (let i = 0; i < arr.length; i++) {
          currSum = arr[i];
          maxes.push(arr[i]);
          let rest = visitHouse(arr.slice(i + 2));
          currSum += rest;
          maxes.push(currSum);
        }
    
        return Math.max(...maxes);
    }
    
    let temp = nums[nums.length - 1];
    let sum = 0;
    let maxArr = []
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) nums[nums.length - 1] = -Infinity;
        sum = nums[i];
        maxArr.push(nums[i]);
        let rest = visitHouse(nums.slice(i + 2));
        sum += rest;
        maxArr.push(sum);
        nums[nums.length - 1] = temp;
    }

    return Math.max(...maxArr);
};

// dynamic programming
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    
    let maxOfCycle = function(nums) {
        if (nums.length === 1) return nums[0];
        if (nums.length === 2) return Math.max(nums[0], nums[1]);
    
        let maxSum = [nums[0], nums[1]];
        for (let i = 2; i < nums.length; i++) {
            maxSum[i] = nums[i] + Math.max(...maxSum.slice(0, i - 1));
        }
    
        let max = Math.max(...maxSum);
        let lastIndex = nums.length - 1;
        if (maxSum[lastIndex] === max && maxSum.indexOf(max) === lastIndex) {
            maxSum[lastIndex] = maxSum[lastIndex] - maxSum[0];
        }
        return Math.max(...maxSum);
    }
    let rotated = nums.slice(1);
    rotated.push(nums[0]);

    return Math.max(maxOfCycle(nums), maxOfCycle(rotated));
};