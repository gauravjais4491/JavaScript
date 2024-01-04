const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = temp
    }
    return arr
}

console.log(insertionSort([1, 2, 42, 53, 54, 2, 6, 2, 6, 89, 4, 78]));