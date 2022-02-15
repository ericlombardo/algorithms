/*
 * @param {string} s
 * @return {number}
 */
 var countGoodSubstrings = function(s) {
  if (s.length < 3) return 0
  let counter = 0

  
  for (let i = 0; i < s.length - 2; i++) {
      let window = s.slice(i, i + 3)
      let check = {}
      
      for (let i = 0; i < window.length; i++) {
         check[window[i]] = true
      }
      if (Object.values(check).length === 3) counter++
  }
  return counter
};

/*

Need to collect 3
check each one for repeats
move to next

[x y z z a z]
0 1 2 3 4 5

split into sub strings
iterate through to check if repeat (set) then check length

A string is good if there are no repeated characters.

Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

A substring is a contiguous sequence of characters in a string.

Example 1:

Input: s = "xyzzaz"
Output: 1
Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
The only good substring of length 3 is "xyz".

*/