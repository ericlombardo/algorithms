
 var average = function(salary) {
  // sort salary
  salary.sort(( a, b) => a - b)

  // slice without first or last
  let newSalary = salary.slice(1, salary.length - 1)
  // reduce to add all totals
  let salaryTotal = newSalary.reduce((a,b) => a + b)
  // return average of salaryTotal
  return salaryTotal / (salary.length - 2)
 
};

/* 
Explanation:
  You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

  Return the average salary of employees excluding the minimum and maximum salary. Answers within 
  10-5 of the actual answer will be accepted.

  Example 1:

    Input: salary = [4000,3000,1000,2000]
    Output: 2500.00000
    Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
    Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

  Constraints:
    3 <= salary.length <= 100
    1000 <= salary[i] <= 106
    All the integers of salary are unique.


Original Answer:
  var average = function(salary) {
    
    let averageSal = 0
    let lowest = salary[0]
    let highest = salary[0]
    
    for (let sal of salary ) {
        lowest = Math.min(lowest, sal)
        highest = Math.max(highest, sal)
    }
    for (let sal of salary) {
        if (sal !== highest && sal !== lowest) {
            averageSal += sal
        }
    }
    return averageSal / (salary.length - 2)
  };
  
*/