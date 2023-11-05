/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  if (s.length === 1) return true;

  let foundZero = false;

  for (const char of s) {
    if (char === "0") {
      foundZero = true;
    } else if (foundZero) {
      return false;
    }
  }

  return true;
};