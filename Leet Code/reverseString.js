/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
  let left = 0
  let right = s.length - 1

  const recur = (str, left, right) => {
    let temp
    if (left < right) {
      temp = str[right]
      str[right] = str[left]
      str[left] = temp
      return recur(str, left + 1, right - 1)
    }
    return str
  }
  return recur(s, left, right)
};
console.log(reverseString(['h', 'e', 'l', 'l', 'o']))

// Tom's YouTube video showed me where I was going wrong with my temp assignment
// https://www.youtube.com/watch?v=AgMq_wzwAXM


// Original Way
// var reverseString = function(s) {

//   if (!s || s.length < 2 || typeof s !== 'string') {
//     return 'No string to reverse, try again'
//   }

//   let newArray = []

//   for (let i = s.length - 1; i >= 0; i--) {
//     newArray.push(s[i])
//   }
//   return newArray.join('')

 
// };