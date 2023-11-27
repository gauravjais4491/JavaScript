// Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.


let countPairs = (nums, target) => {
    let countPairs = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] < target) {
                countPairs++
            }
        }
    }
    return countPairs
}

console.log(countPairs([-1,1,2,3,1],2));