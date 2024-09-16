const findElementPosition = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i
    }
  }
  return -1
}

console.log(findElementPosition([1, 2, 3, 5, 6], 3));