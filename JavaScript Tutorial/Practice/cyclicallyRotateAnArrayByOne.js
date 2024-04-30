const cyclicallyRotateAnArrayByOne = (arr, n) => {
    if (n === 0 || n === 1) return arr
    let i = 1, temp = 0, firstElement = arr[0]
    while (n > i) {
        if (arr[i] === arr[0]) {
            i++
        } else {
            break
        }
        if (i === n - 1) {
            return arr
        }
    }
    for (let j = n - 1; j >= 1; j--) {
        // Method 1
        // temp = arr[j]
        // arr[j] = arr[j-1]
        // arr[j-1] = temp

        // Method 2
        arr[(j + 1) % n] = arr[j]

    }
    // Method 3
    // arr.unshift(arr[n - 1])
    // arr.pop()

    // Method 2

    arr[1] = firstElement
    return arr;
}

console.log(cyclicallyRotateAnArrayByOne([], 0));
console.log(cyclicallyRotateAnArrayByOne([1, 2], 2));
console.log(cyclicallyRotateAnArrayByOne([2], 1));
console.log(cyclicallyRotateAnArrayByOne([2, 2, 2, 2, 2], 5));
console.log(cyclicallyRotateAnArrayByOne([0, 1, 2, 3, 4], 5));