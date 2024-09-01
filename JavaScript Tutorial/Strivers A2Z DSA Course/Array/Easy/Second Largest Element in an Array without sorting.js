const secondLargestElementInAnArrayWithoutSorting = (arr) => {
  if (arr.length < 2) return null;
  let largest = -Infinity, secondLargest = -Infinity;
  let i = 0;
  while (i < arr.length) {
    if (largest < arr[i]) {
      secondLargest = largest
      largest = arr[i]
      i++
    }
    else if (secondLargest < arr[i] && arr[i] != largest) {
      secondLargest = arr[i]
    }
    else {
      i++
    }
  }
  return secondLargest === -Infinity ? null : secondLargest
}

console.log(secondLargestElementInAnArrayWithoutSorting([-5]));