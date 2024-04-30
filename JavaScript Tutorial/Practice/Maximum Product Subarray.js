// [0,0,0,0,]
//[2,3,4,5]
// [1,1,1,1,1]
//[], 
//[1]
// [2,2,2,2,2]


// const maxProduct = (arr, n) => {
//     if (n === 1) {
//         return arr[0];
//     }
//     if (n === 0) {
//         return 0;
//     }
//     let result = 0;
//     let obj = {};

//     for (let i = 0; i < n; i++) {
//         let currentProduct = 1;
//         for (let j = i; j < n; j++) {
//             currentProduct *= arr[j];
//             obj[JSON.stringify(arr.slice(i, j + 1))] = currentProduct;
//             if (currentProduct > result) {
//                 result = currentProduct;
//             }
//         }
//     }

//     return result;
// }

const maxProduct = (arr, n) => {
    if (n === 1) {
        return arr[0];
    }
    if (n === 0) {
        return 0;
    }
    let result = 0;

    for (let i = 0; i < n; i++) {
        let currentProduct = 1;
        for (let j = i; j < n; j++) {
            currentProduct *= arr[j];
            if (currentProduct > result) {
                result = currentProduct;
            }
        }
    }

    return result;
}


console.log(maxProduct([0, 0, 0, 0, 0], 5));
console.log(maxProduct([2, 3, 4, 5], 4));
console.log(maxProduct([1, 1, 1, 1, 1], 5));
console.log(maxProduct([], 0));
console.log(maxProduct([2], 1));
console.log(maxProduct([2, 2, 2, 2, 2], 5));
console.log(maxProduct([3, 3, 3, 3, 3], 5));
console.log(maxProduct([2, 3, -10, 4, 5, -1, 0], 6));
console.log(maxProduct([2, 3, -5, -10, 0, 5, 5, -5], 8));
console.log(maxProduct([-1, -5, 0, -5, -8, 0, 1, 5, 7, 8, 9], 10));
console.log(maxProduct([-1, -2, -1, 6, 0, 10, 0, 4, 1, -1, -2], 11));
console.log(maxProduct([6, -3, -10, 0, 2], 5));
console.log(maxProduct([2,3,-2,4],4));