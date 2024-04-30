const quickSort = (arr, low, high) => {
    if (high >= low) {
        let pivotindex = partition(arr, low, high)
        quickSort(arr, low, pivotindex - 1)
        quickSort(arr, pivotindex + 1, high)
    }
    return arr
}

const partition = (arr, low, high) => {
    let pivot = arr[low]
    let i = low
    while (low <= high) {
        if (arr[low] <= pivot) {
            low++

        } else if (arr[high] > pivot) {
            high--
        }
        else if (arr[low] > pivot && arr[high] < pivot && low < high) {
            [arr[low], arr[high]] = [arr[high], arr[low]]
        }
    }
    [arr[i], arr[high]] = [arr[high], arr[i]]
    return high
}
let arr = [8, 2, 22,11, 2,6, 76, 19, 2, 11, 1, 2, 45, 67]
let arr1 = [4, 1, 3, 9, 7]

console.log(quickSort(arr, 0, arr.length - 1));

console.log(quickSort(arr1, 0, arr1.length - 1));


