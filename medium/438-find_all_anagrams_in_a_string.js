function getFreq(p) {
  const map = {};
  for (const char of p) {
    map[char] = map[char] + 1 || 1;
  }
  return map;
}

function comparePatterns(pattern1, pattern2) {
  if (Object.keys(pattern1).length !== Object.keys(pattern2).length) return false;

  for (let char in pattern1) {
    if (pattern1[char] !== pattern2[char]) return false;
  }

  return true;
}

/**
* @maparam {string} s
* @param {string} p
* @return {number[]}
*/
var findAnagrams = function (s, p) {
  // works but timesout
  // const indices = [];

  // for (let i = 0; i < s.length; i += p.length) {
  //   for (let i = 0; i <= s.length - p.length; i++) {
  //     const subStr = s.slice(i, i + p.length).split("").sort().join("");
  //     const pattern = p.split("").sort().join("");
  //     if (subStr === pattern) indices.push(i);
  //   }

  //   return indices;

  const indices = [];
  const pPattern = getFreq(p);

  for (let i = 0; i <= s.length - p.length; i++) {
    const sPattern = getFreq(s.slice(i, i + p.length));
    if (comparePatterns(pPattern, sPattern)) indices.push(i);
  }
  return indices;
};