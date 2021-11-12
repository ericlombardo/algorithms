var moveZeroes = function(nums) {
    
  let start = performance.now()
  
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

  let end = performance.now()
  console.log(`${end - start} milliseconds to run`)
  return nums
};

console.log(moveZeroes([0,0,1]))