/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const validBracketPairs = {
    "}": "{",
    ")": "(",
    "]": "["
  };

  for (const bracket of s) {
    if (!validBracketPairs[bracket]) {
      // opening bracket
      stack.push(bracket);
    } else {
      // closing bracket
      if (stack.pop() !== validBracketPairs[bracket]) return false;
    }
  }
  return stack.length === 0;
};