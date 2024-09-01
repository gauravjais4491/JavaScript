


// Given the input sequence [6, 12, 24, 30], the output sequence [18, 36, 42, 48, 54, 60] fills in the missing numbers between 6*1=6 and 6*10=60.

const missingNumbers = (arr, n) => {
    let output = []
    for(let i = 1; i <= 10; i++)
    {
        let temp = i * n
        // if(!arr.includes(temp)){
        //     output.push(temp)
        // }
        for(let j = 0; j < arr.length; j++) {
            if(temp === arr[j]) {
                break
            }
            if(j === arr.length - 1) {
                output.push(temp)
            }
        }
    }
    return output
}

console.log(missingNumbers([6, 12, 24, 30], 6));
