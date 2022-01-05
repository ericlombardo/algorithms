// 2124

var checkString = function(s) {
  let checkFor = 'ba'
  return s.includes(checkFor) ? false : true
};

// talked through this solution in algo club

// other solutions included:
/*
  let sSorted = s.split('').sort().join('')  
  return (s === sSorted ? true : false) 
};
*/