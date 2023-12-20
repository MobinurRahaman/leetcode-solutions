var intersect = function (nums1, nums2) {
  let obj = {};
  let result = [];

  for (let i of nums1) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }

  for (let i of nums2) {
    if (obj[i] > 0) {
      result.push(1);
      obj[i]--;
    }
  }
  return result;
};

console.log(JSON.stringify(intersect([1, 2, 2, 1], [2, 2])));
