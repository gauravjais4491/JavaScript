const isPerfectSqure = (num) => {
    if (num < 0) {
        return false
    }
    let start = 1
    let end = Math.floor(Math.sqrt(num)); 
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (mid * mid == num) {
            return true
        }
        else if (mid * mid > num) {
            end = mid - 1
        }
        else {
            start = mid + 1
        }
    }
    return false
}
let num = 36
if (isPerfectSqure(num)) {
    console.log(`${num} is a perfect square`);
}
else {
    console.log(`${num} is not a perfect square`);
}