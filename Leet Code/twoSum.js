/*
Input => (nums array, target you want two numbers to equal)
Output => array of two elements with the index for numbers that equal target

Example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // let lookingFor = []
  // if (lookingFor.includes(target - nums[i])) {

  // }
  for (let i = 0; i < nums.length; i++) {
    for (let z = 0; z < (nums.length - 1); z++) {
      if (nums[i] + nums[z + 1] === target) {
        return [i, (z+1)]
      }
    }
  }
};

nums = [2,7,11,15]
target = 26

console.log(twoSum(nums, target))