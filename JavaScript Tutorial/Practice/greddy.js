// Function to find minimal number of coins
function findMin(n) {
    // Array to store the coins
    let v = [];

    // Iterate till n > 0
    while (n > 0) {
        // Check condition
        if (n >= 2000) {
            v.push(2000);
            n -= 2000;
        } else if (n >= 500) {
            v.push(500);
            n -= 500;
        } else if (n >= 200) {
            v.push(200);
            n -= 200;
        } else if (n >= 100) {
            v.push(100);
            n -= 100;
        } else if (n >= 50) {
            v.push(50);
            n -= 50;
        } else if (n >= 20) {
            v.push(20);
            n -= 20;
        } else if (n >= 10) {
            v.push(10);
            n -= 10;
        } else if (n >= 5) {
            v.push(5);
            n -= 5;
        } else if (n >= 2) {
            v.push(2);
            n -= 2;
        } else if (n >= 1) {
            v.push(1);
            n -= 1;
        }
    }

    // Return the array
    return v;
}

// Driver code
let v = 93;
console.log("Following is minimal number of change for " + v + " :");

// Function call
let vec = findMin(v);

// Print the array
console.log(vec.length);
