var insert = function(intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];

  let ans = [];
  let inserted = false;

  for (let i = 0; i < intervals.length; i++) {
    let currInterval = intervals[i];
    if (newInterval[0] >= currInterval[0] && newInterval[0] <= currInterval[1]) {
      newInterval = [currInterval[0], Math.max(currInterval[1], newInterval[1])];
    } else if (newInterval[0] <= currInterval[0] && newInterval[1] >= currInterval[0]) {
      newInterval = [newInterval[0], Math.max(currInterval[1], newInterval[1])];
    } else if (newInterval[1] < currInterval[0]) {
      if (!inserted) {
        inserted = true;
        ans.push(newInterval);
      }
      ans.push(currInterval);
    } else {
      ans.push(currInterval);
    }
  }

  if (!inserted) ans.push(newInterval);

  return ans;
};