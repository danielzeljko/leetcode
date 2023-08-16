/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = {};
  let maxCount = 0;
  let res = 0;

  for (const num of nums) {
    map[num] = (map[num] || 0) + 1;

    if (map[num] > maxCount) {
      res = num;
    }
    maxCount = Math.max(maxCount, map[num]);
  }

  return res;
};