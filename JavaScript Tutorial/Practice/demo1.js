function generatePermutations(nums) {
    const results = [];

    function permute(arr, m = []) {
        if (arr.length === 0) {
            results.push(m);
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next));
            }
        }
    }

    permute(nums);
    return results;
}

// Example usage:
// const nums = [1, 2, 3];
// const permutations = generatePermutations(nums);
// console.log(permutations);

function generatePermutations1(str) {
    const results = [];

    function permute(arr, m = []) {
        console.log(arr);
        if (arr.length === 0) {
            results.push(m.join(''));
        } else {
            for (let i = 0; i < arr.length; i++) {
                // let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next));
                // console.log(curr);
            }
        }
    }

    permute(str.split(''));
    return results;
}

// Example usage:
// const str = "abc";
// const permutations = generatePermutations1(str);
// console.log(permutations);

