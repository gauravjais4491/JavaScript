// // var c;
// // c=true
// let a;
// a = undefined;
// // console.log("1"+c,a);


// // "use strict"
// let octalString = 201
// let decimalNumber = octalString.toString(16)
// let decimal = parseInt(octalString, 16);
// console.log(decimalNumber);
// console.log(decimal);

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 Resolved")
    }, 10000)
})


const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P2 Resolved")
    }, 5000)
})

async function handlePromose() {
    console.log(ad);
    console.log("Hello World!!");
    const val1 = await p1;
    console.log("Namaste Javascript");
    console.log(val1);
    const val2 = await p2;
    console.log("Namaste Javascript");
    console.log(val2);
}
// handlePromose()

function stringToInt(str) {
    let result = 0
    for (let i = 0; i < str.length; i++) {
        let digit = str.charCodeAt(startIndex) - 48;
        if (digit >= 0 && digit <= 9) {
            result = result * 10 + digit
        }
        else {
            break
        }
    }
    return result
}
console.log(stringToInt('123'))

const obj = {
    a: '1',
    b: '2',
    c: '1',
    d: '2',
    e: '1',
    f: '2',
    arr: [1, 2, 1, 2, 1, 2]
}
for (const key of obj.arr) {
    console.log(key);
}
const str = 'Gaurav Kumar Jaiswal'
for (const value of str) {
    console.log(value);
}
