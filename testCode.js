let str = "geeksforgeeks";
let c = "e"
let spliStr = str.split(c)
// console.log(spliStr)
// console.log(str.split(c).length)

const count_occur = async (str) => {
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] == str[j] && i > j) {
                break;
            }
            if (str[i] == str[j]) {
                count++;
            }
        }
        if (count > 0) {
            console.log(`${str[i]} occurs ${count} times`)
        }
    }
}
// count_occur(str)        

const arrayMethodsPractice = () => {
    let fruits = ['Banana', 'Orange', 'Apple', 'Lichi']
    let fruits1 = fruits.entries()
    for (let i of fruits1) {
        // console.log(i);
    }
    const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
    fruits3.fill("Kiwi", 2, 3);
    fruits3.fill('Gaurav')
    console.log(fruits3.fill("Kiwi", 2, 3));

}
// arrayMethodsPractice()


const sortTheArray = (arr) => {
    return arr.sort((a, b) => a - b)
}

let sortedArray = sortTheArray([1, 7, 5, 10, 12, 4])
console.log(sortedArray);



var a = "-10"
a = ++a
console.log(a);
console.log(typeof(a));