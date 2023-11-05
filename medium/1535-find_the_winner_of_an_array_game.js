/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function (arr, k) {
  let currentWinner = arr[0];
  let winCount = 0;

  if (k > arr.length) {
    return Math.max(...arr);
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currentWinner) {
      currentWinner = arr[i];
      winCount = 1;
    } else {
      winCount++;
    }

    if (winCount === k) {
      return currentWinner;
    }
  }
  return currentWinner;
};

// Timesout in the last few tests

// const shiftArray = (arr, digit, round, winner) => {
//   const result = [];

//   for (const ele of arr) {
//     if (ele !== digit) result.push(ele);
//   }

//   result.push(digit);
//   console.log(`[Round ${round + 1} Win:${winner}]`, result);
//   return result;
// };

// /**
// * @param {number[]} arr
// * @param {number} k
// * @return {number}
// */
// var getWinner = function (arr, k) {
//   let currentWinner; // 3
//   let loser; // 2
//   let count = 1; // 1
//   let left = 0; // 1

//   if (k > arr.length) {
//     const temp = arr.sort((a, b) => b - a);
//     return temp[0];
//   }

//   if (k === 1) return Math.max(arr[0], arr[1]);

//   while (count !== k) {

//     const firstEle = arr[0]; // 2
//     const secondEle = arr[1]; // 3

//     if (firstEle > secondEle) {
//       loser = secondEle;

//       if (!currentWinner) {
//         currentWinner = firstEle;
//       } else {
//         if (currentWinner === firstEle) {
//           count++;
//         } else {
//           currentWinner = firstEle;
//           count = 1;
//         }
//       }
//     } else {
//       loser = firstEle;

//       if (!currentWinner) {
//         currentWinner = secondEle;
//       } else {
//         if (currentWinner === secondEle) {
//           count++;
//         } else {
//           currentWinner = secondEle;
//           count = 1;
//         }
//       }
//     }
//     arr = shiftArray(arr, loser, left, currentWinner);
//     left++;
//   }
//   return currentWinner;
// };
