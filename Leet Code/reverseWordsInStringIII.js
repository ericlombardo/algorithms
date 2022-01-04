var reverseWords = function(s) {
  let splitWords = s.split(' ')
  let reversedWords = ''
  
  for (let word of splitWords) {
      reversedWords += word.split('').reverse().join("") + " "
  }
  
  return reversedWords.substring(0, reversedWords.length - 1)
};


// Used yinchuhui88's discussion response as example