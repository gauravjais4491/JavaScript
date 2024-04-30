const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            [arr[min], arr[i]] = [arr[i], arr[min]]
        }
    }
    return arr
}


console.log(selectionSort([1, 2, 42, 53, 54, 2, 6, 2, 6, 89, 4, 78]));







const selectionSort1 = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i
        let j = i + 1
        while (j < arr.length) {
            if (arr[j] < arr[min]) {
                min = j
            }
            j++
        }
        if (min !== i) {
            [arr[min], arr[i]] = [arr[i], arr[min]]
        }
    }
    return arr
}

console.log(selectionSort1([1, 2, 42, 53, 54, 2, 6, 2, 6, 89, 4, 78]));