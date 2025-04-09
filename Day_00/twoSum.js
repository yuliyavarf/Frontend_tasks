var twoSum = function(nums, target) {
  
  const numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numsMap) {
        return [numsMap[complement], i];
    }
    numsMap[nums[i]] = i;
  }
};

// nums = [2,7,11,15], target = 9
// nums[0] + nums[1] == 9, return [0, 1]
// output: [0,1]
