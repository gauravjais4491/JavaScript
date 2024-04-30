function isPalindromeString(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let start = 0;
    let end = cleanStr.length - 1;

    while (start < end) {
        if (cleanStr[start] !== cleanStr[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

console.log(isPalindromeString("A man, a plan, a canal, Panama"));
console.log(isPalindromeString("racecar"));
console.log(isPalindromeString("hello")); 
