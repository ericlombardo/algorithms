// Given an array of integers nums which is sorted in ascending order,
// and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.

// Notes: 
    // go to middle of nums array
    // return index if match to target
    // if less than target repeat with higher half
    // if more than target repeat with lower half
    
    // create two variables and put half in each (round up)
    // check last element of first array and use recursion passing in appropriate array
    var search = function(nums, target) {
  
      const findNumber = (array) => {
      
          if (array.length === 1 && array[0] === target) {
              return nums.indexOf(array[0])
          } else if (array.length === 1 && array[0] !== target) {
              return -1
          }
          let left = array.slice(0, (array.length / 2))
          let right = array.slice(left.length)
        
          let middle = left[left.length - 1 ]

          if (middle === target) {
              return nums.indexOf(middle)
          } else if (middle > target) {
              return findNumber(left)
          } else if (middle < target) {
              return findNumber(right)
          }
      }
      return findNumber(nums)
  }