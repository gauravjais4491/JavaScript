// You are playing a video game where you are defending your city from a group of n monsters. You are given a 0-indexed integer array dist of size n, where dist[i] is the initial distance in kilometers of the ith monster from the city.

// The monsters walk toward the city at a constant speed. The speed of each monster is given to you in an integer array speed of size n, where speed[i] is the speed of the ith monster in kilometers per minute.

// You have a weapon that, once fully charged, can eliminate a single monster. However, the weapon takes one minute to charge.The weapon is fully charged at the very start.

// You lose when any monster reaches your city. If a monster reaches the city at the exact moment the weapon is fully charged, it counts as a loss, and the game ends before you can use your weapon.

// Return the maximum number of monsters that you can eliminate before you lose, or n if you can eliminate all the monsters before they reach the city. 

const eliminateMaximum = (dist, speed) => {
    let time = new Array(dist.length)
    for (let i = 0; i < dist.length; i++) {
        let temp = Math.ceil(dist[i] / speed[i])
        time[i] = temp
    }
    time = time.sort((a, b) => a - b)
    let c = 0
    for (let i = 0; i < time.length; i++) {
        if (time[i] - i > 0) c++
        else if (time[i] - i <= 0) return c
    }
    return c
};
console.log(eliminateMaximum([1, 1, 2, 3], [1, 1, 2, 3]))
console.log(eliminateMaximum([1, 1, 2, 3], [1, 1, 1, 1]))
console.log(eliminateMaximum([1, 3, 4], [1, 1, 1]));
console.log(eliminateMaximum([5, 5, 5, 5], [1, 1, 1, 1]));
console.log(eliminateMaximum([5, 5, 4, 5], [1, 1, 1, 1]));



