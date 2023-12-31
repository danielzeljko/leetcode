/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let numSet = new Set(nums);
  let maxCount = 0;

  for(const num of nums) {
    if(!numSet.has(num - 1)) {
      let currCount = 0;

      while(numSet.has(num + currCount)) {
        numSet.delete(num + currCount);
        currCount++;
      }
      maxCount = Math.max(currCount, maxCount)
    }
  }

  return maxCount;
};

// var longestConsecutive = function (nums) {
//   let maxCount = 0;
//   let currCount = 1;

//   if(nums.length === 0) return maxCount;

//   const sortedNums = nums.sort((a,b) => a - b);

//   for(let i = 1; i < sortedNums.length; i++){
//       const currEle = sortedNums[i];
//       const prevEle = sortedNums[i - 1];

//       if(currEle === prevEle) continue;

//       if(currEle === prevEle + 1) {
//           currCount++;
//       } else {
//           maxCount = Math.max(maxCount, currCount);
//           currCount = 1;
//       }
//   }

//   maxCount = Math.max(maxCount, currCount);
//   return maxCount;
// };

longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);


