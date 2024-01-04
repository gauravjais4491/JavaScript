const sorting = (arr) => {
    let sortedArray = originalArray.slice();
    sortedArray.sort((a, b) => a - b);
    return sortedArray;
}
const originalArray = [12, 23, 42, 1, 42, 234, 3441, 45, 123, 78, 567, 34, 789];
console.log(sorting(originalArray));