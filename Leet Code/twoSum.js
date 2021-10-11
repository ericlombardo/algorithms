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
  let lookingFor = []
  for (let i = 0; i < nums.length; i++) {
    if (lookingFor.includes(nums[i])) {
      return [lookingFor.indexOf(nums[i]), i]
    } else {
      lookingFor.push(target - nums[i]) 
    }
  }
};

nums = [2,8,11,15]
target = 10

twoSum(nums, target)