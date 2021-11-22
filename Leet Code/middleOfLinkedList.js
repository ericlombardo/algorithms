/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
  let length = 1 // set to 1 to account for starting on head

  let currentNode = head
  while (currentNode.next !== null) { // find length
      currentNode = currentNode.next
      length++
  }
  
  let findMiddle = Math.floor(length / 2) + 1 

  let middleNode = head
  for (let i = 1; i < findMiddle; i++) {
      middleNode = middleNode.next
  }
  
  return middleNode
  
};

