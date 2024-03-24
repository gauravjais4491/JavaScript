const SearchCommonArrayElement = (arr1, arr2) => {
    const set = new Set(arr2)
    for (let i = 0; i < arr1.length; i++) {
        if (set.has(arr1[i])) {
            return true
        }
    } return false;
}

const fibonacci = (n) => {
    if (n <= 1) return n
    return fibonacci(n - 1) + fibonacci(n - 2)
}


const smallerNumbersThanCurrent1 = (nums) => {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let count = 0
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i] && j != i) count++
        }
        result.push(count)
    }
    return result
}
console.log(smallerNumbersThanCurrent1([3, 8, 1, 2, 4]))




const SearchCommonArrayElement1 = (arr1, arr2) => {
    return arr1.map(item => arr2.includes(item))
}


console.log(SearchCommonArrayElement1(['e', 'b', 'c'], ['e', 'd', 'e']))