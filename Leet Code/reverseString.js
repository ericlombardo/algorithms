/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
  if (s.length === 0) { // set the check to avoid infinite loop
    return ""
  }

  // take first character and then run reverseString again removing first character
  // continue this until you 
   return reverseString(s.slice(1)) + s[0]

};
console.log(reverseString(['h', 'e', 'l', 'l', 'o']))

// found suraj Sharma youtube video to help explain the concepts of recursion
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