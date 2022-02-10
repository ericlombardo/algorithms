/*
 * @param {string} text
 * @return {number}
 */
 var maxNumberOfBalloons = function(text) {
  let hash = {'b': 0, 'a': 0, 'l': 0, 'o': 0, 'n': 0}
  
  for (let char of text) {
      if (hash[char] >= 0) {
          hash[char]++
      }
  }
  
  let checkLength = Math.min(...Object.values(hash))
 
  while (checkLength > 0) {
      if ( hash['l'] >= (checkLength * 2) && hash['o'] >= (checkLength * 2)) {
          return checkLength
      } else {
          checkLength--
      }
  }
  return 0
  
};

/*

Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

Example 1:

Input: text = "nlaebolko"
Output: 1


*/