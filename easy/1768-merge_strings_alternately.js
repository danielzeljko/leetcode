/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function (word1, word2) {
  let i = 0;
  let result = "";
  while (i < word1.length || i < word2.length) {
    const char1 = word1[i];
    const char2 = word2[i];

    if (char1) {
      result += char1;
    }

    if (char2) {
      result += char2;
    }

    i = i + 1;
  }
  return result;
};