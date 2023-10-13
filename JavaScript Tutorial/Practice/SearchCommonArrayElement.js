const SearchCommonArrayElement = (arr1, arr2) => {
    const set = new Set(arr2)
    for (let i = 0; i < arr1.length; i++) {
        if(set.has(arr1[i])){
            return true
        }
    } return false;
}
const SearchCommonArrayElement1 = (arr1,arr2) => {
    return arr1.some(item => arr2.includes(item))
}


console.log(SearchCommonArrayElement1(['e', 'b', 'c'], ['e', 'd', 'e']))