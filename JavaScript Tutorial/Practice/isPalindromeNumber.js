function isPalindromeNumber(num) {
    if (num < 0) {
        return false;
    }

    let reversedNum = 0;
    let originalNum = num;

    while (originalNum > 0) {
        const digit = originalNum % 10;
        reversedNum = reversedNum * 10 + digit;
        originalNum = Math.floor(originalNum / 10);
    }

    return num === reversedNum;
}

console.log(isPalindromeNumber(12321)); 
console.log(isPalindromeNumber(12345));