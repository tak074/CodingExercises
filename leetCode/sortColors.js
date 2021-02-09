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
    
    let low=0;
    let mid=0;
    let high = nums.length-1;
    
    while ( mid <= high ) { 
    
        if( nums[mid] == 0 ){ 
            swap( low, mid ); 
            mid++; 
            low++ ;
        } 
    
        else if( nums[mid] == 1 ) {   
            mid++ ;  
        } 

        else if( nums[mid] == 2 ) {
            swap( mid,high ); 
            high--  
        } 
    }

    function swap(a,b) {
        [nums[b], nums[a]] = [nums[a], nums[b]];
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