/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  if (numRows === 1) return [[1]]
  if (numRows === 2) return [[1], [1,1]]
  
  let tri = [[1], [1, 1]]
  let newArray = [], prevArray
  
  for (let i = 2; i < numRows; i++) {
      let prevArray = tri[i - 1]
      newArray = []
      for (let j = 1; j < i; j++) {
          newArray.push(prevArray[j - 1] + prevArray[j])
      }
      tri.push([1, ...newArray, 1])
  }
  return tri  
};

/*
118. Pascal's Triangle
Easy

4862

189

Add to List

Share
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
*/