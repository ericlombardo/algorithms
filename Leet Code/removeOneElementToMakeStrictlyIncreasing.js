
// @param {number[]} nums
// @return {boolean}

// Have array of integers.
// Should increase by each element, no repeat numbers
// Return true if we can achieve this by removing 1 element, false if not
var canBeIncreasing = function(nums) {

  let counter = 0
  let checkNum = 0
  let newNums = nums
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= nums[i + 1]) {
        counter++
        newNums.splice(i, 1)
    }
  }
  console.log(counter)
  console.log(counter < 2 ? true : false)

};

num = [1,4,10,3,6]
// nums = [
  // [1,2,3] // true
  // [1,1,1], // false
  // [1,2,10, 3,4], // true
  // [1,2,7,3,4,8,5], //false
  // [2,3,1,2] // false
// ]

// for (const num of nums) {
  canBeIncreasing(num)
// }