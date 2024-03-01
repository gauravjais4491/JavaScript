// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.


let kidsWithCandies = (candies, extraCandies) => {
    let threshold = Math.max(...candies)
    for (let i = 0; i < candies.length; i++) {
        candies[i] += extraCandies
        if (candies[i] >= threshold) {
            candies[i] = true;
        }
        else {
            candies[i] = false
        }
    }
    return candies;
};

console.log(kidsWithCandies([4, 2, 1, 1, 2], 1))