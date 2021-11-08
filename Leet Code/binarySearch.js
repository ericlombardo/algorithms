// Given an array of integers nums which is sorted in ascending order,
// and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.

    var search = function(nums, target) {   
        // start at a point
        // check if point === target
            // return index of point
        // check if point < target
            // pick another point between point and end of nums
            // check again
        // check if point > target
            // pick another point between point and beginning of nums
            // check again
        let pointer = pickMiddle(0, nums.length - 1)
        
        const pickMiddle = (frontIndex, backIndex) => {
            return Math.round(backIndex / frontIndex)
        }
        
        const checkForMatch = (pointer) => {
            
            if (nums[pointer] === target) { // check if pointer === target
                return pointer
            } else if (nums[pointer] < target) {    // check if pointer < target
              pointer = pickMiddle(pointer, nums.length - 1)
              checkForMatch(pointer)
            } else if (nums[pointer] > target) {    // check if pointer > target
                pointer = pickMiddle(0, pointer)
            }
        }
    }