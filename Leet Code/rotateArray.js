var rotate = function(nums, k) {
  let temp
  // k times
  for (let i = k; i > 0; i--) {
      temp = nums[0]
      nums.shift()
      nums.push(temp)
  }
  return nums
};

console.log(rotate([1,2,3,4,5,6,7], k = 3))