const findMin = (n) => {
    let v = [];
    while (n > 0) {
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
    return v;
}


const minCoins = (coins, amount) => {
    coins.sort((a, b) => b - a);
    const usedCoins = [];
    for (let coin of coins) {
        const numCoins = Math.floor(amount / coin);
        usedCoins.push(...Array(numCoins).fill(coin));
        amount -= numCoins * coin;
        if (amount === 0) break;
    }

    return usedCoins
}

const coins = [1, 2, 5];
const amount = 11;
console.log(minCoins(coins, amount)); 
console.log(findMin(amount));


