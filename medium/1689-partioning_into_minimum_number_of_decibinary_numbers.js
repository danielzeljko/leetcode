/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  return Math.max(...n.split(''));

  // let maxDigit = 0;

  // for (const num of n) {
  //   maxDigit = Math.max(maxDigit, Number(num));
  // }
  // return maxDigit;
};