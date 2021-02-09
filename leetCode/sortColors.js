var sortColors = function(nums) {
    if (nums.length === 1) return nums;

    let right = nums.length - 1;
    let last;

    while (right > 0) {
        // if the right side is bigger
        if (nums[0] > nums[right]) {
            // switch
            let temp = nums[0];
            nums[0] = nums[right];
            nums[right] = temp;
        }

        if (last === undefined) {
            last = nums[right];
        }

        // if curr right num is greater than the last right num
        if (last < nums[right]) {
            // switch
            let temp = nums[right];
            nums[right] = nums[right + 1];
            nums[right + 1] = temp;

            //reset
            right = nums.length - 1;
            last = undefined;
            continue;
        }

        last = nums[right];
        right--;
    }
    return nums;
};