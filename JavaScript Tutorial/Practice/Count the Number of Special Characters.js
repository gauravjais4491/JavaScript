/*
3121. Count the Number of Special Characters II
Medium
Topics
Companies
Hint
You are given a string word. A letter c is called special if it appears both in lowercase and uppercase in word, and every lowercase occurrence of c appears before the first uppercase occurrence of c.

Return the number of special letters in word.

 

Example 1:

Input: word = "aaAbcBC"

Output: 3

Explanation:

The special characters are 'a', 'b', and 'c'.

Example 2:

Input: word = "abc"

Output: 0

Explanation:

There are no special characters in word.

Example 3:

Input: word = "AbBCab"

Output: 0

Explanation:

There are no special characters in word.

*/

let numberOfSpecialChars = function (word) {
    const uppercaseRegex = /[A-Z]/;
    const wordsArray = word.split("");
    console.log(wordsArray);
    let result = 0
    for (let i = 0; i < wordsArray.length; i++) {
        if (uppercaseRegex.test(wordsArray[i])) {
            let index = wordsArray.indexOf(wordsArray[i]);
            let ch = String.fromCharCode(wordsArray[i].charCodeAt() + 32);

            const newSet = new Set(wordsArray[index - 1])
            const array = Array.from(newSet)

            const newSet1 = new Set(wordsArray[index + 1])
            const array1 = Array.from(newSet1)

            console.log(array,array1);
            for (let j = 0; j < array1.length; j++) {
                const element = array1[j];
                if ((ch === element) && (j > index)) {
                    wordsArray[index] = 0
                }
            }
            console.log(array1);
            
            for (let j = 0; j < array.length; j++) {
                const element = array[j];
                if ((ch.includes(element)) && (j < index)) {
                    result++
                }
            }
        }
    }
    return result


};

// console.log(numberOfSpecialChars("aABCabc"))
// console.log(numberOfSpecialChars("AbBCab"));
// console.log(numberOfSpecialChars('abc'));

console.log(numberOfSpecialChars('aaAA'));
