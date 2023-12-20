/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const alphaNumChars = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedAlphaNumChars = alphaNumChars.split("").reverse().join("");
  return alphaNumChars === reversedAlphaNumChars;
};
