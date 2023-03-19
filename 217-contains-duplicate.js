/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const uniqueNums = [];

  for (let i = 0; i < nums.length; i++) {
    if (uniqueNums.includes(nums[i])) {
      return true;
    } else {
      uniqueNums.push(nums[i]);
    }
  }
  return false;
};
