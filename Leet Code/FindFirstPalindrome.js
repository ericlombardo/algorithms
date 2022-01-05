var firstPalindrome = function(words) {
    
  const isAPalindrome = (word) => {
      let left = 0
      let right = word.length -1 
      
      while (left < right) {
          if (word[left] !== word[right]) {
              return false
          }
          left++
          right--
      }
      return true
  }
  
  for (const word of words) {
      if (isAPalindrome(word)) {
          return word
      }
  }
  return ''
};

/* 

Original Solution:
for (const word of words) {
      if (word === word.split('').reverse().join('')) {
         return word 
      }
  }
  return ''
*/