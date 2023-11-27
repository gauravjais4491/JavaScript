// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.


let numIdenticalPairs = (nums) => {
    let count = 0
    for (let j = 0; j < nums.length - 1; j++) {
        for (let i = j + 1; i < nums.length; i++) {
            if (nums[j] == nums[i]) {
                count++;
            }
        }
    }
    return count;
};