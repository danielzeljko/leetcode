/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 1) {
    const ele = strs[0];
    return [[ele]];
  }

  const groupedAnagrams = {};

  for (const word of strs) {
    const sortedChars = word.split("").sort().join("");

    if (!groupedAnagrams[sortedChars]) {
      groupedAnagrams[sortedChars] = [word];
    } else {
      groupedAnagrams[sortedChars].push(word);
    }
  }
  return Object.values(groupedAnagrams);
};

