const countElements = require('../countElementsWithStrictSmallerAndGreater')

test('returns the number of elements that have both strictly smaller and strictly greater elements in array', () => {
  expect(countElements([11,7,2,15])).toBe(2)
  expect(countElements([-3,3,3,90])).toBe(2)
  expect(countElements([1])).toBe(0)
  expect(countElements([3,3,3,4,5])).toBe(1)
  expect(countElements([3,4,5,6,6,6,7])).toBe(5)
  expect(countElements([3,4,5,6,6,6])).toBe(2)

})