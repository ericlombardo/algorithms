/*
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
  let decodedString = []
  
  for (let i = 0; i < s.length; i++) {
      decodedString[indices[i]] = s[i]
  }
  
  return decodedString.join('')
};

module.exports = restoreString

/*
  space: O(n)
  time: O(n)
  create new array of indices length
  iterate through string and add new values
         s = c o d e l e e t
  indicies = 4 5 6 7 0 2 1 3
  
  array[indicies[i]] = s[i]
  
  join into string
*/