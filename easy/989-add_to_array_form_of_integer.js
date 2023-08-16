/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (nums, k) {
  const newNum = BigInt(nums.join("")) + BigInt(k);
  const newNumToStr = String(newNum);

  const result = [];
  for (const num of newNumToStr) {
    result.push(parseInt(num));
  }
  return result;
};