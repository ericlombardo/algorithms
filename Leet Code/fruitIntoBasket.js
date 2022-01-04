var totalFruit = function(fruits) {

  if (!fruits) return 0
  if (fruits.length < 3) return fruits.length
  
  let maxFruit = 0 // collect largest collection of fruit possible
  let prevIndex = 0 // collect last index to calculate size
  let firstFruitIndex = 0 // collect index of last first fruit
  let secondFruitIndex = 0 // collect index of last second fruit
  
  // finds the first instance of the second fruit and assigns index to secondFruitIndex
  while (fruits[firstFruitIndex] === fruits[secondFruitIndex] && secondFruitIndex < fruits.length) { 
      secondFruitIndex++
  }
  
  for (let i = 0; i < fruits.length; i++) {
      if (fruits[i] === fruits[firstFruitIndex]) {
          firstFruitIndex = i
      } else if (fruits[i] === fruits[secondFruitIndex]) {
          secondFruitIndex = i
      } else {  
          prevIndex = Math.min(firstFruitIndex, secondFruitIndex) + 1 // select farthest left fruit and add one to go to next tree
          firstFruitIndex = Math.max(firstFruitIndex, secondFruitIndex)    // set first fruit to farthest right
          secondFruitIndex = i                                        // set new fruit to 
      }
      maxFruit = Math.max(maxFruit, i - prevIndex + 1)                          // evaluates if new length is larger than previous max length
  }
  return maxFruit                                                   // returns max length after evaluation
};

// used ehdwn1212's solution in discussion to walk through this problem and figure out what needed done