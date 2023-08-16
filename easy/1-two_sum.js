/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // brute force O(n^2)
  // for (let i = 0; i < nums.length - 1; i++) {
  //     for(let j = i + 1; j < nums.length; j++){
  //         if(nums[i] + nums[j] === target) return [i, j]
  //     }
  // }

  // optimal O(n)
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const x = target - current;

    if (seen.hasOwnProperty(x)) {
      return [i, seen[x]];
    } else {
      seen[current] = i;
    }
  }
};