/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const result = [];

    for (let i = 0; i < numRows; i++) {
        if (i === 0) {
            result.push([1]);
        } else {
            const prevRow = result[i - 1];

            let row = [1];
            for (let j = 1; j < i; j++) {
                row.push(prevRow[j - 1] + prevRow[j]);
            }
            row.push(1);
            result.push(row);
        }
    }
    return result;

    // for (let i = 0; i <= numRows - 1; i++) {
    //     if (i === 0) {
    //         result.push([1]);
    //     } else {
    //         let temp = [0, ...result.pop(), 0];
    //         let row = [];

    //         for (let j = 0; j <= result.length; j++) {
    //             row.push(temp[j] + temp[j + 1]);
    //         }
    //         result.push(row);
    //     }
    // }
    // return result;
};

generate(5);