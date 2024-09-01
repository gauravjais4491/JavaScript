const findMissingNumberInArray = (arr, missingFrom, missingTo) => {
  let result = []
  for(let i = missingFrom; i <= missingTo; i++) {
    if(!arr.includes(i)) {
      result.push(i)
    }
  }
  return result
}

console.log(findMissingNumberInArray([1,2,3,5,10], 1, 10));