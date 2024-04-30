const merge = (arr1, arr2, n, m) => {
    let mergedArray = []

    if (n === 0 || n === 1) {
    }
    if (arr1[n - 1] <= arr2[0]) {
        mergedArray = [...arr1, ...arr2]
        return mergedArray
    }
    let i = 0, j = 0, k = 0
    while (i < n && j < m) {
        if (arr1[i] <= arr2[j]) {
            mergedArray[k] = arr1[i]
            i++
        }
        else {
            mergedArray[k] = arr2[i]
            j++
        }
        k++
    }
    while (i < arr1.length) {
        mergedArray[k] = arr1[i];
        i++;
        k++
    }
    while (j < arr2.length) {
        mergedArray[k] = arr2[j];
        j++;
        k++
    }
    return mergedArray
}
console.log(merge([1, 3, 4, 5], [2, 2, 3, 4, 4], 4, 5));
console.log(merge([1, 3, 4, 5], [6, 7, 8, 9, 10], 4, 5));
