const numberToString = (num) => {
    let str = ''
    do {
        let digit = num % 10
        str = String.fromCharCode(digit + 48) + str
        num = Math.floor(num / 10)
    } while (num > 0);
    console.log(str);
    return typeof str
}


console.log(numberToString(123123));