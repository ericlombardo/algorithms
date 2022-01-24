/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
  let left = 0
  let right = s.length -1
  let temp
  
  while (left < right) {
      temp = s[left]
      s[left] = s[right]
      s[right] = temp
      left++
      right--
  }
  return s
};

/*

Other Solution Using Recurssion

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

Tom's YouTube video helped show me where I was going wrong with my temp assignment
https://www.youtube.com/watch?v=AgMq_wzwAXM

*/