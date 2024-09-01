const rotateArray_By_K_Elements = (arr, K) => {
  let arrLength = arr.length
  let removeArray = arr.splice(arrLength - K, K)
  arr = removeArray.concat(...arr)
  return arr
}

console.log(rotateArray_By_K_Elements([1, 2, 3, 4, 5], 2));