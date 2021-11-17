// given an array of numbers
// tell me what number is repeated first
// return undefined if to repeats

const firstRecuringChar = (nums) => {
  let previousNums = {}

  if (nums.length === 0 || typeof(nums) !== 'object') {
    return 'Try Again'
  }

  for (let i = 0; i < nums.length; i++) {
    if (previousNums[nums[i]]) {
      return nums[i]
    } else {
      previousNums[nums[i]] = nums[i]
    }
  }
  return undefined
}

console.log(firstRecuringChar([1,2,3,1]))
// output: 2


/*
Notes:
create object
iterate through array
for each item
  check if item is in object
  if so 
    return item value
  else
    add item to object

*/