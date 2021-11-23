# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)

   valuesNeeded = {}
  for i in 0..nums.size
    if valuesNeeded[nums[i]]
      return [valuesNeeded[nums[i]], i]
    else
      valuesNeeded[target - nums[i]] = i
    end
 end
end

p two_sum([1,2,3,4], 7)