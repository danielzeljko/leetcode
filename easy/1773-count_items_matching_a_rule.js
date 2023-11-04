/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const mapping = {
    type: 0,
    color: 1,
    name: 2
  };

  return items.reduce((result, item) => {
    if (item[mapping[ruleKey]] === ruleValue) {
      return result + 1;
    } else {
      return result;
    }
  }, 0);
};


// var countMatches = function (items, ruleKey, ruleValue) {
//   let count = 0;
//   items.forEach(item => {
//     if (ruleKey === "color") {
//       if (item[1] === ruleValue) count++;
//     } else if (ruleKey === "type") {
//       if (item[0] === ruleValue) count++;
//     } else {
//       if (item[2] === ruleValue) count++;
//     }
//   });
//   return count;
// };



// const testCase = (item, ruleKey, ruleValue) => (
//   (ruleKey === "type" && item[0] === ruleValue) ||
//   (ruleKey === "color" && item[1] === ruleValue) ||
//   (ruleKey === "name" && item[2] === ruleValue)
// );

// var countMatches = function (items, ruleKey, ruleValue) {
//   return items.reduce((result, item) => {
//     if (testCase(item, ruleKey, ruleValue)) {
//       return result + 1;
//     } else {
//       return result;
//     }
//   }, 0);
// };



