
function countElements (nums) {
  nums.sort((a, b) => a - b)
  
  let count = 0
  let low = nums[0]
  let high = nums[nums.length -1]
  
  for (let num of nums) {
      if (num !== low && num !== high) {
          count++
      }
  }
  return count
};

module.exports = countElements


