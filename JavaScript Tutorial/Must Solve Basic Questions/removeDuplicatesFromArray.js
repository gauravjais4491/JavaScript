const removeDuplicatesFromArray = (arr) => {
  let obj = {};
  let result = []
  for(let i = 0; i < arr.length; i++) {
    if(obj[arr[i]] === undefined) {
      result.push(arr[i])
      obj[arr[i]] = 1
    }
  }
  return result
}

console.log(removeDuplicatesFromArray([1,2,3,4,1,2,1,4,5,3]));