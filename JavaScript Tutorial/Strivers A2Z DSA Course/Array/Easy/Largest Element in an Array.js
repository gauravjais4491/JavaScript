const largestElementInAnArray = (arr) => {
  let largestElement = Number.MIN_SAFE_INTEGER
  for(let  i = 0; i < arr.length; i++) {
    if(largestElement < arr[i]) {
      largestElement = arr[i]
    }
  }
  return largestElement;
}

console.log(largestElementInAnArray([1,111112,3,45,53,52,1,524,3242,67729]));