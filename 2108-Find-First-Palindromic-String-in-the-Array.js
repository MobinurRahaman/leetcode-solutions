/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const reversedWord = word.split("").reverse().join("");
    if (word === reversedWord) {
      return word;
    }
    if (i === words.length - 1) {
      return "";
    }
  }
};
