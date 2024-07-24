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

// const arr1 = [1, 2, 3, 5, 6, 7, 4, 10, 12, 14, 16, 18, 19, 20, 2]
// const arr2 = [4, 9, 5, 20, 3, 7, 6, 90, 43]
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

// maxDifference([1, 2, 14, 4, 5, 10])



const findUniqueElements = (arr1, arr2) => {

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr1.splice(i, 1)
                arr2.splice(j, 1)
                break
            }
        }
    }
    return [...arr1, ...arr2]
}
const arr1 = [54, 71, 50, 95, 20]
const arr2 = [71, 51, 54, 3, 80]


// console.log(findUniqueElements(arr1, arr2));


const filterUniqueElements1 = (arr1, arr2) => {

    let countMap = {};
    let result = [];
    [...arr1, ...arr2].forEach(element => {
        if (countMap[element] === undefined) {
            countMap[element] = 1;
        } else {
            countMap[element]++;
        }
    });
    for (let key in countMap) {
        if (countMap[key] === 1) {
            result.push(key);
        }

    }
    return result;
}

const arr3 = [1, 2, 3, 5, 6, 7, 4, 10, 12, 14, 16, 18, 19, 20, 2]
const arr4 = [4, 9, 5, 20, 3, 7, 6, 90, 43]

// console.log(findUniqueElements(arr3, arr4));
// console.log(filterUniqueElements1(arr3, arr4))


const findVowel = (str) => {
    let i = 0
    let count = 0;
    ['a','e','i','o','u'].forEach(vowel => {
        if(i===str.length) return
        console.log(vowel);
        if (str[i].includes(vowel)) {
            console.log('true');
            count++
        }
    })
    return count
}

console.log('No. of vowel is: '+findVowel('sbjNanansjd'));