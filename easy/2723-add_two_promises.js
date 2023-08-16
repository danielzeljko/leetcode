/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  // let countA = await promise1;
  // let countB = await promise2;
  // return countA + countB;

  return Promise.all([promise1, promise2]).then(values => values[0] + values[1]);
};

/**
* addTwoPromises(Promise.resolve(2), Promise.resolve(2))
*   .then(console.log); // 4
*/