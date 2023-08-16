/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // using split()
  // const trimmedStrToList = s.trim().split(" ");
  // const lastWord = trimmedStrToList[trimmedStrToList.length - 1];
  // return lastWord.length;

  // using just the string
  let right = s.length - 1;
  let strLength = 0;

  while (s[right] === " ") {
    right -= 1;
  }

  while (s[right] != " " && right >= 0) {
    strLength++;
    right--;
  }
  return strLength;
};