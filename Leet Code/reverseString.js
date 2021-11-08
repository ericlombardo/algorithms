/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

/**
 * s = 'eric'
 * s = 'cire'
 *  */ 

var reverseString = function(s) {

  if (!s || s.length < 2 || typeof s !== 'string') {
    return 'No string to reverse, try again'
  }

  let newArray = []

  for (let i = s.length - 1; i >= 0; i--) {
    newArray.push(s[i])
  }
  return newArray.join('')

 
};
reverseString('eric')