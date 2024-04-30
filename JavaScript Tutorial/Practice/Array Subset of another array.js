// Method 1
const isSubset = (a1, a2, n, m) => {
    let isSubset = 'No';
    if (n === 0 || m === 0) return isSubset
    let smallArray, i = 0, j = 0;
    if (n > m) {
        smallArray = m
    }
    else {
        smallArray = n
    }
    while (smallArray > 0) {
        if (n < m) {
            if (j > m) {
                isSubset = 'No'
                break
            }
            else if (a1[i] === a2[j]) {
                a2[j] = -1
                smallArray--
                i++
                j = 0
                isSubset = 'Yes'
            }
            else if (a1[i] !== a2[j]) {
                j++
            }
        }
        else {
            if (i > n) {
                isSubset = 'No'
                break
            }
            else if (a1[i] === a2[j]) {
                a1[i] = -1
                smallArray--
                j++
                i = 0
                isSubset = 'Yes'
            }
            else if (a1[i] !== a2[j]) {
                i++
            }
        }
    }
    return isSubset
}



// Method 2
const isSubset1 = (a1, a2, n, m) => {
    if (n === 0 || m === 0) return 'No'
    let max = 0;
    for (let i = 0; i < n; i++) {
        if (max < a1[i])
            max = a1[i]
    }
    for (let i = 0; i < m; i++) {
        if (max < a2[i])
            max = a2[i]
    }
    let result = Array.from({ length: max + 1 }, () => 0);
    for (let i = 0; i < m; i++) {
        result[a2[i]]++
    }

    for (let i = 0; i < n; i++) {
        if (result[a1[i]] > 0) {
            result[a1[i]]--
        }
    }

    for (let i = 0; i < result.length; i++) {
        if (result[i] !== 0) {
            return 'No'
        }
    }
    return 'Yes'
}

console.log("Method 1");

console.log(isSubset([1, 2, 2, 2, 5, 0, 10, 20], [1, 2, 2, 0, 10, 20], 8, 6));
console.log(isSubset([1, 2, 2, 3, 2, 4, 1, 3], [1, 2, 3, 4, 5], 8, 5));
console.log(isSubset([11, 7, 1, 13, 21, 3, 7, 3], [11, 3, 7, 1, 7], 8, 5));

console.log("Method 2");

console.log(isSubset1([1, 2, 2, 2, 5, 0, 10, 20], [1, 2, 2, 0, 10, 20], 8, 6));
console.log(isSubset1([1, 2, 2, 3, 2, 4, 1, 3], [1, 2, 3, 4, 5], 8, 5));
console.log(isSubset1([11, 7, 1, 13, 21, 3, 7, 3], [11, 3, 7, 1, 7], 8, 5));