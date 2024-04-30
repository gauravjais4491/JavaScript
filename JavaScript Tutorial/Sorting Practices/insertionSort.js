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

// console.log(insertionSort([1, 2, 42, 53, 54, 2, 6, 2, 6, 89, 4, 78]));




const insertionSort1 = (arr1) => {
    if(arr1.length <= 1) return arr1
    for (let i = 1; i < arr1.length; i++) {
        let temp = arr1[i];
        for (let j = i - 1; j >= 0; j--) {
            if (arr1[j] > temp) {
                arr1[j + 1] = arr1[j]
                arr1[j] = temp
            }
            else {
                break
            }
        }
    }
    return arr1
}


console.log(insertionSort1([10, 15, 1, 2, 9, 16, 11]));
console.log(insertionSort1([1, 2, 42, 53, 54, 2, 6, 2, 6, 89, 4, 78]));
console.log(insertionSort1([-1,-1,-2,0,4,0,-100,100]));
console.log(insertionSort1([]));
console.log(insertionSort1([1]));