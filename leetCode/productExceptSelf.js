var productExceptSelf = function(nums) {
  let productUpTo = new Array(nums.length);
  let productAfter = new Array(nums.length);
  productUpTo[0] = 1;
  productAfter[nums.length - 1] = 1;
  let product = 1;

  // get productUpTo by going forward
  for (let i = 0; i < nums.length; i++) {
    productUpTo[i] = product;
    product *= nums[i];
  }

    product = 1;
  // get productAfter by going backward
  for (let i = nums.length - 1; i >= 0; i--) {
    productAfter[i] = product;
    product *= nums[i];
  }

  // multiply each prodcuts and set it as new val for productUpTo
  for (let i = 0; i < nums.length; i++) {
    productUpTo[i] = productUpTo[i] * productAfter[i];
  }

  return productUpTo;
};