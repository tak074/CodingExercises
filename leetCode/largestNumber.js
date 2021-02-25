var largestNumber = function(nums) {
  // sort them as string.

  nums.sort((a, b) => {
    return (b + '' + a ) - (a + '' + b);
  });

  let res = '';
  nums.forEach((num) => {
    res = res + num;
  })
  return res.replace(/^0+/, '') || '0';
};