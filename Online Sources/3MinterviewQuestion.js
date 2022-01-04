const compute = (window, array) => {
  let averages = []

  // iterate through
  for (let i = 0; i < array.length; i++) {
    if (i < window) {
      averages.push(array.slice(0, i + 1).reduce((a, b) => a + b, 0) / (i + 1))
    } else if (i > window) {
      averages.push(array.slice((i - window + 1), i + 1).reduce((a, b) => a + b, 0) / window)
    }
  }
  return averages

  // average values from start to current
  // if index > window - 1 splice (i - window, window) then average
  // push all values into newArray
}

console.log(compute(3, [0,1,2,3])) // [0, 0.5, 1,2]
console.log(compute(5, [0, 1, -2, 3, -4, 5, -6, 7, -8, 9])) // [0, 0.5, -0.333333333333, 0.5, -0.4, 0.6, -0.8, 1, -1.2, 1.4]
