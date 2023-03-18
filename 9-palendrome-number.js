/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  x = x.toString();
  const len = x.length / 2;
  const xlen = x.length;

  for (let i = 0; i < len; i++) {
    if (x[i] !== x[xlen - 1 - i]) {
      return false;
    }
  }
  return true;
};
