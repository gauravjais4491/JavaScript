let str = "geeksforgeeks";
let c = "e"
let spliStr = str.split(c)
// console.log(spliStr)
// console.log(str.split(c).length)

const count_occur = async (str) => {
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if(str[i] == str[j] && i>j){
                break;
            }
            if (str[i] == str[j]) {
                count++;
            }
        }
        if(count>0){
            console.log(`${str[i]} occurs ${count} times`)
        }
    }
}
count_occur(str)