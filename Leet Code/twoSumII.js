// Return the indices of the two numbers, index1 and index2,
// added by one as an integer array [index1, index2] of length 2.
// Array is sorted in non-decreasing order

var twoSum = function(numbers, target) {
   
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
      if (numbers[left] + numbers[right] === target) {
          return [left + 1, right + 1]
      } else if (numbers[left] + numbers[right] > target) {
          right--
      } else if ( numbers[left] + numbers[right] < target) {
          left++
      }
  }
};