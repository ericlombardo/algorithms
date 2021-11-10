const mergeSortedArrays = (arr1, arr2) => {
  let start = performance.now()

  let mergedArray = [] // set array to merge into
  let array1item = arr1[0] // set initial value for both arrays to first item
  let array2item = arr2[0]
  let i = 1 // set values for iterating through arrays
  let j = 1

  if (arr1.length === 0) { // validate arrays aren't empty
    return arr2            // return other array if empty
  } else if (arr2.length === 0) {
    return arr1
  }

  while (array1item || array2item) { // while arrays have an item compare and sort into mergedArray
    if (!array2item || array1item < array2item) { // !array2item handles when array2item is undefined
      mergedArray.push(array1item)
      array1item = arr1[i]
      i++
    } else {
      mergedArray.push(array2item)
      array2item = arr2[j]
      j++
    }
  }
  let end = performance.now()
  console.log(`${end - start} milliseconds`)
  return mergedArray
}

console.log(mergeSortedArrays([0,3,4,31,32,32,32], [4,6,30,32,32,32,32,33,34,35,36]))
// [ 0, 3, 4, 4, 6, 30, 31 ]

