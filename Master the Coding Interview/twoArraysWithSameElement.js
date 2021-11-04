array1 = ['w', 'a', 'b', 'c']
array2 = ['w', 'z', 'x', 'y'] 
// return true
array3 = ['a', 'b', 'c']
array4 = ['z', 'y', 'x']
//return false

const checkArrays = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    for (let x = 0; x < array2.length; x++) {
      if (array1[i] === array2[x]) console.log('true')
    }
  }
  return false
}
checkArrays(array1, array2)



 