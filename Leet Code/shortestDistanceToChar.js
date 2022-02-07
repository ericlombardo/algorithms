/*
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let absDist = []
    
    let splitString = s.split('')
    
    let firstMatch = splitString.indexOf(c)
    let nextMatch = splitString.indexOf(c, firstMatch + 1)
    
    for (let i = 0; i < s.length; i++) {
        if (i < firstMatch) {
            absDist.push(Math.abs(firstMatch - i))
        } else {
            absDist.push(Math.min(Math.abs(i - firstMatch), Math.abs(nextMatch - i)))
        }  
        
        if (i === nextMatch) [[firstMatch = nextMatch] [nextMatch = s.indexOf(c, firstMatch + 1)]]
    }
    return absDist
};

/*
Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

Example 1:

Input: s = "loveleetcode", c = "e"
Output: [3,2,1,0,1,0,0,1,2,2,1,0]

*/