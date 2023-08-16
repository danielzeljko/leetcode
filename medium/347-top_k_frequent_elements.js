function populateFreq(nums) {
  const map = {};
  for (const num of nums) {
    map[num] = (map[num] || 0) + 1;
  }
  return map;
}

/**
* @param {number[]} nums
* @param {number} k
* @return {number[]}
*/
var topKFrequent = function (nums, k) {
  const map = populateFreq(nums);
  const sortedKeys = Object.entries(map).sort((a, b) => b[1] - a[1]);

  const results = [];
  for (let i = 0; i < k; i++) {
    results.push(sortedKeys[i][0]);
  }
  return results;
};