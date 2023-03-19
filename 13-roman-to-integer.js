/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const romanNumToIntHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const romanNumArr = Array.from(s);
  let num = 0;
  for (let i = 0; i < romanNumArr.length; i++) {
    const curr = romanNumToIntHash[s[i]];
    const next = romanNumToIntHash[s[i + 1]];
    if (next && curr < next) {
      num -= curr;
    } else {
      num += curr;
    }
  }
  return num;
};
