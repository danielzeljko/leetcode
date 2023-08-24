var maximumWealth = function (accounts) {
  // let max = 0;

  // for (const acc of accounts) {
  //   let temp = 0;
  //   for (const amount of acc) {
  //     temp += amount;
  //   }
  //   max = Math.max(max, temp);
  // }
  // return max;

  return Math.max(...accounts.map(account => account.reduce((a, b) => a + b, 0)));
};

maximumWealth([[1, 5], [7, 3], [3, 5]]);