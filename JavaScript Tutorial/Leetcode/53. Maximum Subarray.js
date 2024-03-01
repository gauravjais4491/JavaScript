/*Given an integer array nums, find the 
subarray
with the largest sum, and return its sum.
*/

/*
Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
*/

/*
Example 2:
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
*/

/*
Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
*/



/**
 * @param {number[]} nums
 * @return {number}
 */
let max = 0, maxArray= {}


const recursion = (nums) => {
    let  sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }

    if(sum > max) {
        max = sum
        maxArray = {}
        maxArray[nums] = max
    }

    if (nums.length <= 1) {
        return ;
    }
    const middle = Math.floor(nums.length / 2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);
    maxSubArray(left)
    maxSubArray(right)
}
var maxSubArray = (nums) => {
    recursion(nums)
    return Object.keys(maxArray)
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));