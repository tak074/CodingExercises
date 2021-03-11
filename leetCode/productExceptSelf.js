var productExceptSelf = function(nums) {
  let productUpTo = new Array(nums.length);
  let product = 1;

  // get productUpTo by going forward
  for (let i = 0; i < nums.length; i++) {
    productUpTo[i] = product;
    product *= nums[i];
  }

  product = 1;
  // get productAfter by going backward
  // multiply each prodcuts and set it as new val for productUpTo
  for (let i = nums.length - 1; i >= 0; i--) {
    productUpTo[i] = product * productUpTo[i];
    product *= nums[i];
  }

  return productUpTo;
};