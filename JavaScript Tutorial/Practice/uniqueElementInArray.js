const filterUniqueElementInArray = (arr1, arr2) => {
    for (let index = 0; index < arr2.length; index++) {
        if (arr1.includes(arr2[index] || arr2.includes(arr2[index]))) {
            arr2.splice(index, 1)
        };
    }
    for (let index = 0; index < arr1.length; index++) {
        if (arr2.includes(arr1[index]) || arr1.includes(arr1[index])) {
            arr1.splice(index, 1)
        };
    }
    const result = arr1 + arr2
    return result
}

const arr1 = [1, 2, 3, 5, 6, 7, 4, 10, 12, 14, 16, 18, 19, 20, 2]
const arr2 = [4, 9, 5, 20, 3, 7, 6, 90, 43]
// console.log(filterUniqueElementInArray(arr1, arr2));


const multiply = (num) => {
    let sum = 0;
    for (let index = 1; index <= 10; index++) {
        sum += num
        console.log(`${num} * ${index} = ${sum}`);
    }
}
// multiply(2)

const sumOfArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum);
}

// sumOfArray([1, 2, 3, 4, 5])

const maxDifference = (arr) => {
    arr.sort((a, b) => a - b);
    console.log(arr);
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length - 1; i++) {
        const diff = Math.abs(arr[i] - arr[i - 1]);
        if (diff > max) {
            max = diff;
        }
    }
    console.log(max);
}

maxDifference([1, 2, 14, 4, 5,10])
