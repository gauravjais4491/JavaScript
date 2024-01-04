const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j + 1] + arr[j]
                arr[j + 1] = arr[j] - arr[j + 1]
                arr[j] = arr[j] - arr[j + 1]

            }
        }
    }
    return arr
}
console.log(bubbleSort([1, 2, 42, 53, 54, 2, 6, 2, 6, 89, 4, 78, 1, 2, 42, 53, 54, 2, 6, 2, 6, 89, 4, 78]));