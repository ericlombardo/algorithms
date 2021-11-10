const mergeSortedArrays = (arr1, arr2) => {

  let mergedArray = [...arr1, ...arr2] 
  let temp 
  
  for (let i = 0; i < mergedArray.length; i++) {
    if (mergedArray[i] > mergedArray[i + 1]) {
      temp = mergedArray[i]
      mergedArray[i] = mergedArray[i + 1]
      mergedArray[i + 1] = temp
    } 
  }
  return mergedArray
}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]))
// [ 0, 3, 4, 4, 6, 30, 31 ]

