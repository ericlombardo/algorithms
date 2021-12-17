// Return the widest vertical area between two points such that no points are inside the area.

 var maxWidthOfVerticalArea = function(points) {
   
   let xPoints = []
   let widestVerticalArea = 0
   
   // take the x variables from each point
   for (const pointsSet of points) {
     xPoints.push(pointsSet[0])
    }
    // sort them to eliminate having points within 
    xPoints.sort((a, b) => a - b)
    
    
  // iterate through, subtract high from low, then push highest value
  for ( let i = 0; i < xPoints.length; i++) {
      if ((xPoints[i + 1] - xPoints[i]) > widestVerticalArea) {
          widestVerticalArea = (xPoints[i + 1] - xPoints[i])
      }
  }

  return widestVerticalArea
};