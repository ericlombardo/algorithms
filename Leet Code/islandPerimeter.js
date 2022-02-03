/*
You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, 
and there is exactly one island (i.e., one or more connected land cells).
The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. 
One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100.
Determine the perimeter of the island.
*/

// went back and got rid of miniPerim like we talked about, this is the code with just perimeter++

var islandPerimeter = function(grid) {
  let perimeter = 0
  const directionChecker = (i,j) => {
    if (!grid[i-1] || !grid[i-1][j]) perimeter++
    if (!grid[i+1] || !grid[i+1][j]) perimeter++
    if (!grid[i][j-1]) perimeter++
    if (!grid[i][j+1]) perimeter++
  }
   
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        directionChecker(i,j)
      }
    }  
  }
  return perimeter
};

/* and this is the code with the miniPerim variable
var islandPerimeter = function(grid) {
  let perimeter = 0
  const helper = (i,j) => {
    let miniPerim = 0
    if (!grid[i-1] || !grid[i-1][j]) miniPerim++
    if (!grid[i+1] || !grid[i+1][j]) miniPerim++
    if (!grid[i][j-1]) miniPerim++
    if (!grid[i][j+1]) miniPerim++
    return miniPerim
  }
   
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        perimeter += helper(i,j)
      }
    }  
  }
  return perimeter
};
*/

/*** All the notes! ***/
/*
grid --> row x col matrix --> map wheere grid[i][j] = 1 === land, grid[i][j] = 0 === water
grid cells may be connected horizontally and vertically (not diagonally!).
out of bounds is completely surrounded by water
there is 1 island and only 1 island.
no water inside the island
one cell is square w/ 4 sides all with length === 1 (so 4 max).
Return 
Perimeter of the island
*/

// checking around a land grid --> if corner and land we know x and check, if border piece
// if row is 0 or === length
// or column is 0 or === length

// grid[i][j] === 1 check for what makes a perimeter --> false statements --> 0 represents water, 0 is falsey, grid[0 - 1][0] --> undefined --> falsey
// grid[0][1] === 1
// check   grid[i][j-1] grid [i][j+1] grid[i-1][j] grid[i+1][j] --> if check is falsey, 
//     --> .reduce on the check work? 
//         helper function w/ i & j as params
//         return new Array(4).fill(direction checks) .reduce((a,b) => a + b) --> if !a == 0

// [[0,1,0,0],
//  [1,1,1,0],
//  [0,1,0,0],
//  [1,1,0,0]]

// i:  j:  grid[i][j]:   i+1:          i-1:          j+1:          j-1:
// 0   1   1             [1][1] = 1    [-1][1] = u   [0][2] = 0    [0][0] = 0    perimeter = 3   +3  if(grid[i][j]) maxPerim -=1 || if(!grid[i][j]) perimeter++
// 1   0   1             2,0 = 0       0,0 = 0       1,1 = 1       1,-1 = u      perimeter = 6   +3
// 1   1   1             2,1 = 1       0,1 = 1       1,2 = 1       1,0 = 1       perimeter = 6   +0


// loops....
// for(i;i;i) {
//   for(j;j;j) {
//     if (grid[i][j] === 1) {
//       check perimeters w/ helper?
//       perimeter += helper(i,j, grid)
//     }
//   }
//     return perimeter
// }

// helper checker function
//   where we check our perimeter coordinates for falsey value to perimeter++
  
//     set a variable, check 4 edges, ++ variable and return it
//   helper(i-1,j)
//   helper(i+1,j)
//   helper(i,j+1)
//   helper(i,j-1)
  
//   helper(i,j, grid) {
//     let miniPerim = 0
//     if (!grid[i-1][j]) miniPerim++
//     if (!grid[i+1][j]) miniPerim++
//     if (!grid[i][j-1]) miniPerim++
//     if (!grid[i][j+1]) miniPerim++
//     return miniPerim
//   }