var reverseWords = function(s) {
  let words = s.split(" ")
  
  for (let i = 0; i < words.length; i++) { // need to find a more efficient way to handle reversing
    const reverseString = (word) => { // function for recursion
          return (word === '') ? '' : reverseString(word.substr(1)) + word.charAt(0);
      }
      words[i] = reverseString(words[i])
  }
  return words.join(' ')
};


