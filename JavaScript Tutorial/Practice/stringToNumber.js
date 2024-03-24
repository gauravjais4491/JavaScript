const stringToNumber = (str) => {
    let num = 0;
    for (let index = 0; index < str.length; index++) {
        const digit = str.charCodeAt(index) - '0'.charCodeAt(0)
        num = num * 10 + digit
    }
    return typeof num
}

console.log(stringToNumber('123'));