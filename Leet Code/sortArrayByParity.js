/*
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
  let left = 0, right = nums.length - 1
  
  while ( left < right ) {
      if ( nums[left] % 2 !== 0 ) {
          [nums[left], nums[right]] = [nums[right], nums[left]]
          right--
      } else {
          left++
      }
  }
  return nums
};

/*
Explanation:
Given an integer array nums, move all the even integers at the beginning of
the array followed by all the odd integers.

Return any array that satisfies this condition.

Example 1:
Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Example 2:
Input: nums = [0]
Output: [0]
 
Constraints:
1 <= nums.length <= 5000
0 <= nums[i] <= 5000

Walk Through:
left and right pointers
if left is odd
  swap left and right
  right--
else
  left++
  
[3,1,2,4,5,6,2,2,13]
0 1 2 3 4 5 6 7 8

left = 0
right = nums.length -1 

left   right    nums[left]   nums[right]  action
0     8         3           13            swap; right-- [13,1,2,4,5,6,2,2,3]
0     7         13          2             swap; right-- [2,1,2,4,5,6,2,13,3]
0     6         2           2             left++
1     6         1           2             swap; right-- [2,2,2,4,5,6,1,13,3]
1     5         2           6             left++
2     5         2           6             left++
3     5         4           6             left++
4     5         5           6             swap; right-- [2,2,2,4,6,5,1,13,3]
4     4         6           6             left++ (left = 5 > right; loop is broken)

*/