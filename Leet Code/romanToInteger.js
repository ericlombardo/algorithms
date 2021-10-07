/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  let numerals = {  // set values for each roman numeral
      I: 1,
      V: 5, 
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  }
  let sum = 0 // start count at 0
  
  for (let i = 0; i < s.length; i++) { // iterate through
    
    newNumber = numerals[s[i]] // set default to numeral value
    
    if (numerals[s[i]] < numerals[s[i + 1]]) { // if two values need subtracted
      newNumber = numerals[s[i + 1]] - numerals[s[i]] // set number to subtracted value
      i++ // skip to next number that needs added
    } 
    
    sum = sum + newNumber // add the newNumber to the total so far
  }
  return sum // return the total value
};

// romanToInt('III') //=> 3
// romanToInt('IV') // => 4
// romanToInt('XXXVII') // => 37
// romanToInt('XL') // => 40
// romanToInt('XCVIII') // => 98
// romanToInt('MCCXLIX') // => 1,249