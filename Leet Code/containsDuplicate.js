// return true or false base one if array has any repeats

var containsDuplicate = function(nums) {
  let duplicateNums = []
  // check if array and if array is empty
  if (nums.length === 0 || typeof(nums) !== 'object') {
    return 'try valid array'
  }
   
  for (let i = 0; i < nums.length; i++) {
    if (duplicateNums[nums[i]]) {
      return true
    } else {
      duplicateNums[nums[i]] = true
    }
  }
  return false
};

console.log(containsDuplicate([1,2,3,4,1,1,2]))


// nested loop solution
// for (let i = 0; i < nums.length; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//     if (nums[i] === nums[j]) {
//       return true
//     }
//   }
// }
// return false