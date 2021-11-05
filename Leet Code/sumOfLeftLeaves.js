/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var sumOfLeftLeaves = function(root) {
    
  // set up recursion function
  const findSum = root => { 
      if (!root) return 0 // return 0 if there is no root passed in
      let sum = 0 // set counter to 0
      
      if (root.left) { // if it is left leaf 
          if (!root.left.left && !root.left.right) { // and not a child node
              sum += root.left.val // add that value to the sum
          } else { // if it isn't
              sum += findSum(root.left) // set the root as one level deeper and run function again to go deeper
          }
      }
      sum += findSum(root.right) // when done with the left side, do the same operation to the right side
      return sum // return the result of all the left leaves
  }
  
  return findSum(root) // initiate recursion function with original root
};

// used discussion from yinchuhui88 as reference for this problem.