/*
 You're given strings jewels representing the types of stones that
 are jewels, and stones representing the stones you have. Each 
 character in stones is a type of stone you have. You want to know how
 many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/
 var numJewelsInStones = function(jewels, stones) {
  let count = 0
  let jewelContainer = {}  // set container for jewels
  
  // iterate through set each jewel in container
  for (let i = 0; i < jewels.length; i++) {
      jewelContainer[jewels[i]] = true
  }
  
  // iterate through each stone, if stone is in jewelContainer add 1 to count 
  for (let i = 0; i < stones.length; i++) {
      if (jewelContainer[stones[i]]) {
          count++
      }
  }
  
  // return final count
  return count  
};

/*

* Create a hash of jewels, iterate through each stone and check if it exists, add to counter if so
  iterate through jewels
  set each one to jewelContainer[a] = true
  iterate through stones
  check for jewelContainer[stones[i]]
  if it exists add one to count
  if not move to next
  return count

Ideas:

* iterate through all of stones comparing to jewel 1 and then jewels two
  nested and very heavy when size increases

*/
