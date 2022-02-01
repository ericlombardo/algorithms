const maximumWealth = require('../richestCustomerWealth')

test('returns value of the richest member of all customers', () => {
  expect(maximumWealth([[1,2,3],[3,2,1],[1,1,1]])).toEqual(6)
  expect(maximumWealth([[1,2,3],[3,7]])).toEqual(10)
  expect(maximumWealth([[],[]])).toEqual(0)
  expect(maximumWealth([])).toEqual('no customers at banks')
 


})