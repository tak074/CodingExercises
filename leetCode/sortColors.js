var sortColors = function(nums) {
    if (nums.length === 1) return nums;

    let right = nums.length - 1;

    while (right > 0) {
        // if the right side is bigger
        if (nums[0] > nums[right]) {
            // switch
            let temp = nums[0];
            nums[0] = nums[right];
            nums[right] = temp;
        }


        if (nums[right + 1] !== undefined) {
            // if curr right num is greater than the last right num
            if (nums[right + 1] < nums[right]) {
                // switch
                let temp = nums[right];
                nums[right] = nums[right + 1];
                nums[right + 1] = temp;
    
                //reset
                right = nums.length - 1;
                continue;
            }
        }
        right--;
    }
    return nums;
};



var sortColors = function(nums) {
    // reposition 1's
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] === 1) {
            nums.splice(i, 1);
            nums.splice(0, 0, 1);
        } 
    }

    // reposition 0's
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.splice(0, 0, 0);
        } 
    }
    return nums;
};