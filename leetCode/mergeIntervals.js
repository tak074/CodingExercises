var merge = function(intervals) {
  if (intervals.length === 1) return intervals;
  intervals = intervals.sort(function(a,b) {
    return a[0] - b[0];
  });

  let ans = [];
  let temp = intervals[0];
  // go through each intervals
  for (let i = 1; i < intervals.length; i++) {
    let currInterval = intervals[i];
    // if the start or end of curr is in between start and end of the first
    if (currInterval[0] <= temp[1] || (currInterval[0] <= temp[1] && currInterval[1] >= temp[1])) {
      temp = [temp[0], Math.max(currInterval[1], temp[1])];
    } else {
      // push temp into ans;
      ans.push(temp);
      // temp = curr interval;
      temp = currInterval;
    }
  }

  // push temp;
  ans.push(temp);
  return ans;
};