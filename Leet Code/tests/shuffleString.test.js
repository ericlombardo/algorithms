const restoreString = require('../shuffleString')

test('string should change positions based on indices', () => {
  expect(
    restoreString("codeleet", [4,5,6,7,0,2,1,3])
  ).toEqual("leetcode")

  expect(
    restoreString("abc", [0,1,2])
  ).toEqual("abc")
})