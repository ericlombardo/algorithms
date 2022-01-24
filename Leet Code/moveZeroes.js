/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 var moveZeroes = function(nums) {
  let count = 0
  
// abstract to function (findAndRemoveZeroes)
for (let i = 0; i < nums.length; i++) { // iterate through array
    if (nums[i] === 0) {    // if val = 0 add to end
        nums.splice(i,1)    // remove that value
        count++
        i--
    }
}
// abstract to function (addZeroesToEnd)
for (let i = 0; i < count; i++) {
  nums.push(0)
}

return nums
 
};

/* 
Alternate Solution:

var moveZeroes = function(nums) {
  let slow = 0
  let fast = 0
  let count = 0
  
  while (fast < nums.length) {
      if (nums[fast] !== 0) {
          nums[slow] = nums[fast]
          slow++
      } else {
          count++
      }
      fast++
  }
  

  let last = nums.length - count
  
  while ( last < nums.length) {
      
      nums[last] = 0
      last++
  }
}


*/