const binarySearch = (arr, target) => {
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] == target) {
            return mid
        }
        else if (arr1[mid] > target) {
            end = mid - 1
        }
        else {
            start = mid + 1
        }
    }
}
const arr1 = [5, 4, 1, 2, 3]
console.log("The element is at index "+binarySearch(arr1, 2));