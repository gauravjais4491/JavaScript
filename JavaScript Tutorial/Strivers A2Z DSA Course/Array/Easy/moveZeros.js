const moveZeros = (arr) => {
  let left = 0, right = 0;
  while (right < arr.length) {
    if (arr[left] === 0 && arr[right] !== 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
    }
    if (arr[left] !== 0) {
      left++
    }
    right++
  }
  return arr
}

console.log(moveZeros([1, 2, 3, 0, 9, 0, 2]));