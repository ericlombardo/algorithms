/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    
    
  let counter = head
  let count = 1
  
  while (counter.next) {
     counter = counter.next
     count++
  }
  
  if (count === n) {
      return head = head.next
  } else if (count === 1) {
      return head.val = head.next
  }
  
  let stopAt = count - (n + 1) // subtract
  let preNode = head
  while (stopAt > 0) {
      preNode = preNode.next
      stopAt--
  }
  preNode.next = preNode.next.next

  return head
};

