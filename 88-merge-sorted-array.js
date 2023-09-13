/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // const finalNums1 = m > 0 ? nums1.slice(0, m) : [];
  // return finalNums1.concat(nums2).sort();

  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = nums1.length - 1; i >= 0; i--) {
    if (p1 >= 0 && nums1[p1] >= nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else if (p2 >= 0) {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  return nums1;

  /*for (i = 0, j = 0; i < nums1.length; i++) {
    if (nums1[i] === 0) nums1[i] = nums2[j++];
  }
  return nums1.sort((a, b) => {
    return a - b;
  });*/
};

console.log(JSON.stringify(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)));
console.log(JSON.stringify(merge([1], 1, [], 0)));
console.log(JSON.stringify(merge(([0], 0, [1], 1))));
