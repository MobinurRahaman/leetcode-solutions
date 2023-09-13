/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let matchStr = strs[0];

  for (let i = 1; i < strs.length; i++) {
      matchStr = strs[i].match(matchStr);
    return matchStr;
  }
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
