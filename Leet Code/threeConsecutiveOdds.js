/*
 * @param {number[]} arr
 * @return {boolean}
 */
 var threeConsecutiveOdds = function(arr) {
  let counter = 0
  
  for (let num of arr) {
      if (counter === 3) return true
      
      if (num % 2 === 0) { // even
          counter = 0
      } else {
          counter++
      }
  }
  return counter === 3 ? true : false
};

/*

  iterate through
  check if odd (modulus)
  if it is set counter++
  if even set counter to 0
  
  while loop (counter < 3)
*/