const removeDuplicatesFromSortedArray = (arr) => {
  if (arr.length < 2) return arr
  let j = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[j] = arr[i]
      j++
    }
  }
  return j
}


let arr = [1, 1, 2, 3, 4, 5, 5, 6, 6, 11, 11]
let lengthOfNewArray = removeDuplicatesFromSortedArray(arr)

console.log(arr.splice(0, lengthOfNewArray));