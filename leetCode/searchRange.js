// solve in O(log n);

var searchRange = function(nums, target) {
  if (nums.length === 0) return [-1, -1];
  let locations = [];

  let binarySearch = function(arr, index) {
    let first = arr[0];
    let last = arr[arr.length - 1];

    if (first <= target && last >= target) {
      let midPoint = Math.floor(arr.length / 2);
      let midVal = arr[midPoint];
      // if midPoint === target
      if (midVal === target) {
        locations.push(midPoint + index);
        binarySearch(arr.slice(0, midPoint), index);
        binarySearch(arr.slice(midPoint + 1), midPoint + 1);
      } else if (midVal > target) {
        // search first half
        binarySearch(arr.slice(0, midPoint), index);
      } else {
        // search second half
        binarySearch(arr.slice(midPoint + 1), midPoint + 1);
      }
    }
  }
  binarySearch(nums, 0);

  if (locations.length === 0) {
    return [-1,-1];
  } else {

    return [Math.min(...locations), Math.max(...locations)]
  }

};