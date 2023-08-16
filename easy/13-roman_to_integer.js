/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const conversionMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  // let total = 0;
  // for (let i = 0; i < s.length; i++) {
  //   const currChar = s[i];
  //   const nextChar = s[i + 1];

  //   if (currChar == "I" && nextChar == "V") {
  //     total += 4;
  //     i++;
  //   } else if (currChar == "I" && nextChar == "X") {
  //     total += 9;
  //     i++;
  //   } else if (currChar == "X" && nextChar == "L") {
  //     total += 40;
  //     i++;
  //   } else if (currChar == "X" && nextChar == "C") {
  //     total += 90;
  //     i++;
  //   } else if (currChar == "C" && nextChar == "D") {
  //     total += 400;
  //     i++;
  //   } else if (currChar == "C" && nextChar == "M") {
  //     total += 900;
  //     i++;
  //   } else {
  //     total += conversionMap[currChar];
  //   }
  // }
  // return total;

  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    const nextChar = s[i + 1];

    // Rule: Highest number comes first except in special cases
    if (nextChar && conversionMap[currChar] < conversionMap[nextChar]) {
      total -= conversionMap[currChar];
    } else {
      total += conversionMap[currChar];
    }
  }
  return total;
};
