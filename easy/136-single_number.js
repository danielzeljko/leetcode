/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const seen = {};

  for (const num of nums) {
    seen[num] = (seen[num] || 0) + 1;
  }

  // fails the constant extra space
  return Object.entries(seen).sort((a, b) => a[1] - b[1])[0][0];
};