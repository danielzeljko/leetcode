/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let x = 0;

  for (const operator of operations) {
    if (operator === "X++" || operator === "++X") {
      x++;
    } else {
      x--;
    }
  }
  return x;
};