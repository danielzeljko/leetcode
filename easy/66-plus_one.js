/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // Commented out b/c js loses accuracy when adding large numbers
  // const digitsToNumPlus1 = parseInt(digits.join("")) + 1;
  // console.log("digitsToNumPlus1", digitsToNumPlus1);
  // const digitsToStr = String(digitsToNumPlus1);
  // const result = [];
  // for (const digit of digitsToStr) {
  //   result.push(parseInt(digit));
  // }
  // return result;

  // let carry = 1;

  // for (let i = digits.length - 1; i >= 0; i--) {
  //   digits[i] += carry;

  //   if (digits[i] === 10) {
  //     digits[i] = 0;
  //     carry = 1;
  //   } else {
  //     carry = 0;
  //   }
  // }

  // if (carry) {
  //   digits.unshift(1);
  // }
  // return digits;

  const digitsToNumPlus1 = BigInt(digits.join("")) + BigInt(1);
  const digitsToStr = String(digitsToNumPlus1);
  const result = [];
  for (const digit of digitsToStr) {
    result.push(parseInt(digit));
  }
  return result;
};