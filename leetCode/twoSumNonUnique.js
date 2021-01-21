var twoSumNonUnique = function(arr, target) {
  // how many possible solutions are there. solutions can repeat.
  let map = new Map();
  let solutions = 0;
  for (let i = 0; i < arr.length; i++) {
      if (map.has(target - arr[i])) {
          solutions += map.get(target - arr[i]);
      }
      if (map.has(arr[i])) {
           map.set(arr[i], map.get(arr[i]) + 1);
      } else {
          map.set(arr[i], 1);
      }
  }

  return solutions;

}