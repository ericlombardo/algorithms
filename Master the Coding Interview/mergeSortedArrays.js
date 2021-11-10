const mergeSortedArrays = (arr1, arr2) => {

  return arr1.concat(arr2).sort((a, b) => a - b )
}



console.log(mergeSortedArrays([0,3,4,31], [4,6,30]))
// [ 0, 3, 4, 4, 6, 30, 31 ]

