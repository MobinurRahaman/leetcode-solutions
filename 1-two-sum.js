/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const complements = {};
  for (let i = 0; i < nums.length; i++) {
    const currentComplement = target - nums[i];

    if (currentComplement in complements) {
      return [complements[currentComplement], i];
    } else {
      complements[nums[i]] = i;
    }
  }
};
