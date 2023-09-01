/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const output = [];

  // const left = nums.slice(0, n);
  // const right = nums.slice(n);

  // for (let i = 0; i < n; i++) {
  //   output.push(left[i]);
  //   output.push(right[i]);
  // }

  for (let i = 0; i < n; i++) {
    output.push(nums[i]);
    output.push(nums[n + i]);
  }

  return output;
};