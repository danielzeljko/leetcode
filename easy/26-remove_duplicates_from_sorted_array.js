/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // const seen = {};

  // for (let i = 0; i < nums.length; i++) {
  //   if (!seen[nums[i]]) {
  //     seen[nums[i]] = true;
  //   } else {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] !== nums[j] && !seen[nums[j]]) {
  //         seen[nums[j]] = true;
  //         const temp = nums[i];
  //         nums[i] = nums[j];
  //         nums[j] = temp;
  //         break;
  //       }
  //     }
  //   }
  // }
  // return Object.keys(seen).length;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};