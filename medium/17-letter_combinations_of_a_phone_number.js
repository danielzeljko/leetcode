const digitToCharMapping = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"]
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === "") return [];
  let results = [""];
  for (const digit of digits) {
    const temp = [];
    for (const result of results) {
      for (const char of digitToCharMapping[digit]) {
        temp.push(result + char);
      }
    }
    results = temp;
  }
  return results;
};

letterCombinations("23");