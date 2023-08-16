/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  // const numToStr = x.toString();
  // let left = 0;
  // let right = numToStr.length - 1;

  // while (left < right) {
  //   if (numToStr[left] !== numToStr[right]) return false;
  //   left++;
  //   right--;
  // }

  // return true;

  // get the highest power
  let div = 1;
  while (x > 10 * div) {
    div *= 10;
  }

  while (x > 0) {
    right = x % 10;
    left = Math.floor(x / div);

    if (left != right) return false;

    x = Math.floor((x % div) / 10);
    div = div / 100;
  }

  return true;
};