function findMinimumDifference(arr){
    console.log(arr.sort((a,b)=>a-b))
    if (arr.length < 2) {
        return -1; 
    }

    let minDiff = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i < arr.length; i++) {
        const diff = Math.abs(arr[i] - arr[i - 1]);
        if (diff < minDiff) {
            minDiff = diff;
        }
    }

    return minDiff;
} 

const numbers = [4,8,1,41,56];
const minDifference = findMinimumDifference(numbers);
console.log("Minimum difference:", minDifference);
