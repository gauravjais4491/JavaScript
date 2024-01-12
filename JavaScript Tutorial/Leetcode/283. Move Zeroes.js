/*Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
*/

/*
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

/*
Example 2:
Input: nums = [0]
Output: [0]
*/


const moveZeroes = (nums) => {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    return nums;
};

const moveZeroes1 = (nums) => {
    let left = 0, right = 1

    while (right < nums.length) {
        if (nums[left] === 0 && nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
        }

        if (nums[left] !== 0) {
            left++
        }

        right++
    }

    return nums
}

const moveZeroes2 = (nums) => {
    let c = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            [nums[c],nums[i]] = [nums[i],nums[c]]
            c++;
        }
    }
    return nums
}

console.time("moveZeroes2");
console.log(moveZeroes2([0, 0, 0, 3, 13]));
console.timeEnd("moveZeroes2");

console.time("moveZeroes");
console.log(moveZeroes([0, 0, 0, 3, 12]));
console.timeEnd("moveZeroes");

console.time("moveZeroes1");
console.log(moveZeroes1([0, 0, 0, 3, 12]));
console.timeEnd("moveZeroes1");