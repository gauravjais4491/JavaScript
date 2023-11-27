// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

let shuffle = (nums, n) => {
    let nums1 = []
    for (let i = 0; i < n; i++) {
        nums1.push(nums[i])
        nums1.push(nums[n + i])
    }
    return nums1
};
console.log(shuffle([2, 5, 1, 3, 4, 7], 3));