/*
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {
  let changeHolder = {
      '5': 0,
      '10': 0,
      '20': 0
  }
  
  for (let i = 0; i < bills.length; i++) {
      if (bills[i] === 5) {
          changeHolder[5] += 1
      } else if (bills[i] === 10 && changeHolder[5] > 0) {
          changeHolder[10]++
          changeHolder[5]--
      } else if (bills[i] === 20) {
          if (changeHolder[10] > 0 && changeHolder[5] > 0) {
              changeHolder[20]++
              changeHolder[10]--
              changeHolder[5]--
          } else if (changeHolder[5] >= 3) {
              changeHolder[20]++
              changeHolder[5] -= 3
          } else {
              return false
          }
      } else {
          return false
      }
  }
  return true
};

/*

Some sort of change holder (hash)

when we get change coming in we calc what needs returned

check if that is possible with change holder

if it is then we make the transaction

else return false
*/