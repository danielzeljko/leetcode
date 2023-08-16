/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // brute force

  // const result = [];
  // for (let i = 0; i < nums.length; i++) {
  //   let count = 1;

  //   for (let j = 0; j <= nums.length - 1; j++) {
  //     if (i !== j) {
  //       count = count * nums[j];
  //     }

  //     if (j === nums.length - 1) {
  //       result[i] = count;
  //     }
  //   }
  // }
  // return result;


  const n = nums.length;
  const leftProducts = new Array(n).fill(1);
  const rightProducts = new Array(n).fill(1);
  const result = new Array(n);

  for (let i = 1; i < n; i++) {
    leftProducts[i] = nums[i - 1] * leftProducts[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    rightProducts[i] = nums[i + 1] * rightProducts[i + 1];
  }

  for (let i = 0; i < n; i++) {
    result[i] = leftProducts[i] * rightProducts[i];
  }

  return result;


};