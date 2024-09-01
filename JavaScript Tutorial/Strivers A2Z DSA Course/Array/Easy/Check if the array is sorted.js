const checkIfTheArrayIsSorted = (arr) => {
  if (arr.length <= 1) return true;
  let arrIsSorted = true, i = 0
  while (arrIsSorted && i < arr.length - 1) {
    if (!(arr[i] <= arr[i + 1])) {
      arrIsSorted = false;
    }
    i++
  }
  return arrIsSorted;
}

console.log(checkIfTheArrayIsSorted([2, 2, 2, 2, 2]));