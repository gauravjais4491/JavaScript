/* Given an input integer array of length n that can hold values between 0 to 9, write a program that generates an output array of the same length where the value at each index of the output array is equal to the number of times this index occurred as a value in the input array.
For example: If Input array is {0,1,1,1,3,0}, then the output array should be {2, 3, 0,1,0,0}\
*/

const outputArray = (inputArray) => {
    const outputArray = new Array(inputArray.length).fill(0);
    for (let i = 0; i < inputArray.length; i++) {
        const index = inputArray[i];
        outputArray[index]++;
    }

    return outputArray;
}

const count = (arrival_list, deparature_list) => {
    let count = 1;
    for (let i = 0; i < deparature_list.length - 1; i++) {
        if (arrival_list[i + 1] < deparature_list[i]) {
            count++
        }
    }
    return count
}

// console.log(outputArray([0, 1, 1, 1, 3, 0, 4, 5, 6, 7, 8, 0, 3, 2, 4, 4, 6, 5]));
console.log(count([1300, 1400, 1530, 1700], [1330, 1410, 1800, 1830]));
console.log(count([900, 930, 1000, 1030], [915, 945, 1015, 1045]));



function reversedSentence(sentence) {
    let words = [];
    let word = "";
    for(let  i = sentence.length - 1; i >= -1; i--) {
        const char = sentence[i];
        if (char === " " || i === -1) {
            words.push(word);
            word = "";
        } else {
            word = char + word;
        }
    }
    return words.join(" ");
}


const reverse = (sentence) => {
    let words = sentence.split(' ').reverse(' ')
    const reverseWords = words.join(' ')
    return reverseWords
}

console.log(reverse('My name is Gaurav'));
console.log(reversedSentence('My name is Gaurav'));