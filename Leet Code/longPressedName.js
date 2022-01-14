/*
Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed,
and the character will be typed 1 or more times.
You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name,
with some characters (possibly none) being long pressed.
Example 1:
Input: name = "alex", typed = "aaleex"
Output: true
Explanation: 'a' and 'e' in 'alex' were long pressed.
Example 2:
Input: name = "saeed", typed = "ssaaedd"
Output: false
Explanation: 'e' must have been pressed twice, but it was not in the typed output.
*/

const isLongPressedName = function(name, typed) {
  if (name.length > typed.length) return false
  let i = 0
  let j = 0
  let previousLetter = ''
  while (i < name.length || j < typed.length) {
    if (name[i] === typed[j]) {
      previousLetter = name[i]
      i++
      j++
    }
    else if (name[i] !== typed[j] && typed[j] === previousLetter) {
      j++
    } else {
      return false
    }
  }
  return true
}

/*
This problem was solved as a group in Algo Club and below is the notes and sudo code we 
used to get our solution. Includes different ideas and is a little jumbled, but allowed us to 
get our ideas out and find the solution that worked best for us
*/

/*
name --> string
typed --> string
Return
  Boolean
  if what is 'typed' could be 'name' with one or more long pressed characters
*/
/*
if name.length > typed.length return false
let i = 0
let j = 0
name = "alex", typed = "aaleex"
i:  j:  name[i]:  =?  typed[j]:     action:  
0   0   'a'       ==    'a'         j++
0   1   'a'       ==    'a'         j++
0   2   'a'       !=    'l'         i++  
1   2   'l'       ==    'l'         j++
1   3   'l'       !=    'e'         i++
2   3   'e'       ==    'e'         j++
2   4   'e'       ==    'e'         j++
2   5   'e'       !=    'x'         i++
3   5   'x'       ==    'x'         j++ end loop --> when reach i @ name.length
can I do this all in one while loop?
How to account for double letters?
if (name[i] === typed[j]) j++
if (name[i] !== typed[j]) {
  if (name[i + 1] !== typed[j]) return false
  i++
}
*/
/*
"saeed", "ssaaedd"
 01234    0123456
i:  j:  name[i]:  =?  typed[j]:     action:  
0   0   s         ==  s             j++
0   1   s         ==  s             j++
0   2   s         !=  a             i++   secondary check --> if (name[i] !== typed[j]) nested if (name[i+1] !== typed[j]) return false
1   2   a         ==  a             j++
1   3   a         ==  a             j++
1   4   a         !=  e             i++
2   4   e         ==  e             j++
2   5   e         !=  d             i++  nested if (e !== d) return false
3   5   e         !=  d             i++
4   5   d         ==  d             j++
*/
// create with name: {s:1, a:1, e: 2, d: 1}
// subtract typed: {s: -1, a: -1, e: 1, d: -1}

// const nameHash = {}
  // for(letter of name) {
  //   nameHash[letter] ? nameHash[letter]++ : nameHash[letter] = 1
  // }
  // // console.log(nameHash)
  // for(letter of typed) {
  //   nameHash[letter] ? nameHash[letter]-- : false
  // }
  // // console.log(nameHash)
  // if (Object.values(nameHash).reduce((a,b) => a + b) > 0) {
  //   return false
  // }
  // return true


// create with typed: {s:2, a:2, e: 1, d: 2}
// check if name[s] <= typed[s] true
// else name[s] > typed[s] false

/*
i:  j:  name[i]:  typed[j]:   action:   res += typed[j]   prev:
0   0   a         a           i++ j++   'a'               name[i]
1   1   l         a           j++       (if name[i] !== typed[j] && typed[j] === prev) j++ else false  
1   2   l         l           i++ j++   'al'
2   3   e         e           i++ j++   'ale'
3   4   x         e           j++       
3   5   x         x           i++ j++   'alex'
end loop
return name === res
'saeed' 'ssaaedd'
 01234   0123456
i:  j:  name[i]:  typed[j]:   action:   res += typed[j]   prev:
                                
0   0   s         s           i++ j++   's'               's'
1   1   a         s           j++       (if name[i] !== typed[j] && typed[j] === prev) j++ else false 
1   2   a         a           i++ j++                     'a'
2   3   e         a           j++       (if name[i] !== typed[j] && typed[j] === prev) j++ else false 
2   4   e         e           i++ j++
3   5   e         d           return false (if name[i] !== typed[j] && typed[j] === prev) j++ else false 
*/