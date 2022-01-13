// Given a string s, find the length of the longest substring without 
// repeating characters.

var lengthOfLongestSubstring = function(s) {
  let start = 0, maxLen = 0;
  let map = new Map; // set container to hold chars while iterating

  for(var i = 0; i < s.length; i++) { // iterate through string of chars
      let ch = s[i];                  // set ch to current char in string
      
      // set start of the window to the last instance of current char + 1
      if (map.get(ch) >= start) start = map.get(ch) + 1; 
      
      map.set(ch, i); // set current char into map object with index as value
      
      let currentLength = i - start + 1  // calculate value of window
  
      if(currentLength > maxLen) maxLen = currentLength;
  }

return maxLen;
};

/*
Used/refactored nilath's discussion post to understand the solution
*/