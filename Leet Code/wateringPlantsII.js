/*
Alice and Bob want to water n plants in their garden. The plants are arranged in a row and are labeled 
from 0 to n - 1 from left to right where the ith plant is located at x = i.
Each plant needs a specific amount of water. Alice and Bob have a watering can each, initially full.
They water the plants in the following way:
Alice waters the plants in order from left to right, starting from the 0th plant. 
Bob waters the plants in order from right to left, starting from the (n - 1)th plant. 
They begin watering the plants simultaneously.
It takes the same amount of time to water each plant regardless of how much water it needs.
Alice/Bob must water the plant if they have enough in their can to fully water it. 
Otherwise, they first refill their can (instantaneously) then water the plant.
In case both Alice and Bob reach the same plant, the one with more water currently in his/her watering can
should water this plant. If they have the same amount of water, then Alice should water this plant.
Given a 0-indexed integer array plants of n integers, where plants[i] is the amount of water the ith plant needs,
and two integers capacityA and capacityB representing the capacities of Alice's and Bob's watering cans respectively, 
return the number of times they have to refill to water all the plants.
*/

var minimumRefill = function(plants, capacityA, capacityB) {
  let left = 0, right = plants.length - 1, fullA = capacityA, fullB = capacityB, refills = 0
  
  while(left <= right) {
    if (left === right) {
      if (capacityA >= plants[left] || capacityB >= plants[left]) {
        return refills
      } else {
        return ++refills
      }
    }
    if (capacityA >= plants[left]) {
      capacityA -= plants[left]
    } else if (capacityA < plants[left]) {
      refills++
      capacityA = (fullA - plants[left])
    }
    if (capacityB >= plants[right]) {
      capacityB -= plants[right]
    } else if (capacityB < plants[right]) {
      refills++
      capacityB = (fullB - plants[right])
    }
    left++
    right--
  }
  return refills
};

/*
Pair Programmed with Becca in Algo Club

Two pointer
left = 0, right = plants.length
fullA = capacityA, fullB = capacityB
while (left <= right) 
if (l === r)
  if (capA >= plants[l] || capB >= plants[l])
    return refills
  else
    return ++refills
    
if capacityA >= plants[left]
  capacityA - plants[left] 
else if (capacityA < plants[left]) 
  refill++
  capacityA = fullA
  capacityA - plants[left]
if B
  capacityB - plants[right]
else if B
  refill++
  capB = fullB
  capB - plants[right]
*/
/*
capacityA --> Alice's full watering can, integer
capacityB --> Bob's full watering can, integer
plants --> integer array, amount of water each plant[i] needs
A waters l -> r
B water r -> l 
if capacity < plants water req.
  refill
  
How much water is needed and capacity
Return
minimum number of refills to water all the plants
*/
/*
[2,2,3,3,3] <-- plants
 0 1 2 3 4
5 <-- capA
5 <-- capB
left: right:  p[l]:   p[r]:   Alice:    Bob:    action:
0     4       2       3       5-2=3     5-3=2   l++ r--
1     3       2       3       3-2=1     2-3 !!  refill++ capB = fullB capB - plants[right] --> 5-3=2 l++ r--
2     2       3       3       1-3 !! || 2-3 !!  refill++ return refill
*/