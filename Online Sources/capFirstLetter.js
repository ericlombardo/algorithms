// given a string, capitalize the first letter return string
// can't use toUpperCase or other standard functions
// cap is -31 from lowercase
const capFirstLetter = (string) => {
  // get first letter
  let newString = []
  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      newString[i] = String.fromCharCode(string.charCodeAt(0) - 32)
    } else {
      newString[i] = string[i]
    }
  }
  
  return newString.join('')
  
}

console.log(capFirstLetter('bingo'))