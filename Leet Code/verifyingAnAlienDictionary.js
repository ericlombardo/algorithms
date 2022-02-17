/*
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
 var isAlienSorted = function(words, order) {
  if (words.length === 1) return true
  let counter = 0
  
  function findDifChar(word1, word2) {
      while (word1[counter] === word2[counter]) counter++
      
      return [word1[counter], word2[counter]]
  }
  
  for (let i = 0; i < words.length - 1; i++) {
      while (words[i] === words[i + 1]) i++
      
      if (words[i] && words[i + 1]) {
          let compChars = findDifChar(words[i], words[i + 1])
      
          if (order.indexOf(compChars[0]) > order.indexOf(compChars[1])) {
              return false
          }  
      }
  }
  return true
};

/*
Alternate Way:
var isAlienSorted = function(words, order) {
  if (words.length === 1) return true
  let orderHash = {}
  
  for (let i = 0; i < order.length; i++) {
      orderHash[order[i]] = i
  }
  
  for (let i = 0; i < words.length - 1; i++) {
      if (orderHash[words[i][0]] > orderHash[words[i + 1][0]]) {
          return  false 
      } else if (words[i] === words[i + 1]) {
          continue
      } else if (words[i].length > words[i + 1].length) {
          if (words[i].slice(0, words[i + 1].length) === words[i + 1]) {
              return false
          }
      } else if (words[i][0] === words[i + 1][0]) {
          let count = 1
          while (words[i][count] === words[i + 1][count]) count++
          if (orderHash[words[i][count]] > orderHash[words[i + 1][count]]) {
              return false  
          } 
      }
      
  }
  return true
};





In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

Example 1:
Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.



word 1  word 2  action
Word    World   check w vs w (if the same, move to next char)
wOrd    wOrld   same value move to next
woRd    woRld   same value move to next
worD    worLd   d comes after l return false



*/