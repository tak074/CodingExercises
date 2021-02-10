var combine = function(n, k) {
    let res = {};

    let makeComp = function(arr, num) {
        while (num <= n) {
            let arr2 = arr.slice(0);
            arr2.push(num);
            if (arr2.length === k) {
                res[arr2.toString()] = arr2;
            } else { // else continue adding.
                // since num has already been added, increment to the next num
                let num2 = num + 1;
                while (num2 <= n) {
                    let currArr = arr2.slice(0);
                    // call the func again to add the next value;
                    makeComp(currArr, num2);
                    num2++;
                }
            }
            num++;
        }
    }
    makeComp([], 1);
    
    return Object.values(res);
};