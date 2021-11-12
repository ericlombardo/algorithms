var moveZeroes = function(nums) {
    
  let start = performance.now()
  // slide all other values down
  for (let i = 0; i < nums.length; i++) { // iterate through array
      if (nums[i] === 0) {    // if val = 0 add to end
          nums.splice(i,1)    // remove that value
          nums.push(0)        // add it to the end
      }
  }
  let end = performance.now()
  console.log(`${end - start} milliseconds to run`)
  return nums
};

console.log(moveZeroes([0,1,0,3,12]))