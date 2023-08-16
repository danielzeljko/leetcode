/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const alphaNumericStr = s.toLowerCase().replace(/[^a-z0-9]/gi, "");

  let left = 0;
  let right = alphaNumericStr.length - 1;

  while (left <= right) {
    if (alphaNumericStr[left] !== alphaNumericStr[right]) return false;
    left++;
    right--;
  }
  return true;

};