/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";
  const firstWord = strs[0];

  for (let i = 0; i < firstWord.length; i++) {
    for (const word of strs) {
      if (word[i] !== firstWord[i]) return result;
    }
    result += firstWord[i];
  }

  return result;
};