/*Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

answer.length == nums.length.
answer[i] = |leftSum[i] - rightSum[i]|.
Where:

leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
Return the array answer.
*/

/*

Example 1:
Input: nums = [10,4,8,3]
Output: [15,1,11,22]
Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

*/


/*

Example 2:
Input: nums = [1]
Output: [0]
Explanation: The array leftSum is [0] and the array rightSum is [0].
The array answer is [|0 - 0|] = [0].

*/



const leftRightDifference = (nums) => {
    let left = 0, right = 0, leftArray = [], rightArray = [], result = [];
    for (let i = 0; i < nums.length; i++) {
        leftArray.push(left)
        left += nums[i]
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        rightArray.unshift(right)
        right += nums[i]
    }

    for (let i = 0; i < leftArray.length; i++) {
        result[i] = Math.abs(leftArray[i] - rightArray[i])
    }
    return result
};

console.log(leftRightDifference([10,4,8,3]));
console.log(leftRightDifference([1]));