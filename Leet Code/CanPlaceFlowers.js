/*
You have a long flowerbed in which some of the plots are planted, 
and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty 
and 1 means not empty, and an integer n, return if n new flowers can be planted
in the flowerbed without violating the no-adjacent-flowers rule.

Party programmed this solution in Algo Club
*/

const canPlaceFlowers = function(flowerbed, n) {
  if (flowerbed.length === 1 && flowerbed[0] === 0 && n !== 0) return true
  let i = 1
  while (n > 0 && i <= flowerbed.length - 1) {
    if (flowerbed[i] === 0) {
      if (i === 1 && flowerbed[i - 1] === 0) {
        flowerbed[i - 1] = 1
        n--
      }
      if (i === flowerbed.length - 2 && flowerbed[i + 1] === 0) {
        n--
      }
      else if (flowerbed[i-1] === 0 && flowerbed[i + 1] === 0) {
        flowerbed[i] = 1
        n--
      }
    }
    i++
  }
  return n <= 0
};
/*
let i = 1
while loop --> truthy n && i < flowerbed.length - 1
Loop through the array --> if checking -1 & + 1 loop might start at 1, and end at .length - 1
  if flowerbed[i] === 0
    if i === 1 && flowerbed[i - 1] === 0
      flowerbed[i - 1] = 1
      n--
      i++
    if i === flowerbed.length - 2 && flowerbed[i + 1] === 0
      flowerbed[i+ 1] = 1 --> this you can do, but it's unnecessary because we're not returning the planted array, 
      and if we hit this we're at the end
      n--
      i++
    check if flowerbed[i-1] === 0 && flowerbed[i + 1] === 0 
      flowerbed[i] = 1
      n--
      i++
    
*/
/*
flowerbed --> integer array, made up of only 0's and 1's
  0 --> empty
  1 --> planted
n --> integer, # of new flowers to be planted
Constraints
beds may not be planted in adjacent plots
flowerbed[i] === 0 || 1
there are no two adjacent beds in flowerbed
*** Return ***
Boolean if n new beds can be planted
*/