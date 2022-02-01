/*
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
  let highestCustomer = 0 // s: O(1)
  let newSum

  if (accounts.length === 0) return 'no customers at banks'

  for (let customer of accounts) { // t: O(n)
    if (customer.length !== 0) {
      newSum = customer.reduce((a, b) => a + b) // t: O(w) s: O(1)
      highestCustomer = Math.max(highestCustomer, newSum)
    }
  }

  return highestCustomer

};


module.exports = maximumWealth
/*
sum each array in accounts and pick highest
input = [[1,2,3], [2,3,4], [3,4,5]]
output = 12


*/