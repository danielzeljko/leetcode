/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const seen = {};

  for (const num of nums) {
    if (!seen[num]) {
      seen[num] = true;
    } else {
      return true;
    }
  }
  return false;
};