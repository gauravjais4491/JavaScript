const twoSum = (arr, target) => {
  let left = 0;
  let right = 1
  let arrLength = arr.length
  while (arrLength - 1 > left) {
    if (arr[left] + arr[right] === target) {
      return true
    }
    else if (right === arrLength - 1) {
      left++
      right = left + 1
    }
    else {
      right++
    }
  }
  return false
}

console.log(twoSum([3, 5, 2, 4], 9));