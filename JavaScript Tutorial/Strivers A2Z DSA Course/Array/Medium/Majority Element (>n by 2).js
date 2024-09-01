const majorityElementGreaterThan_nby2 = (arr) => {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1
    }
    else {
      obj[arr[i]]++
    }
  }

  for (let key in obj) {
    if (obj[key] > arr.length / 2) {
      return key
    }
  }
  return null;
}

console.log(majorityElementGreaterThan_nby2([1, 2, 3, 4, 2, 2, 2, 2, 2, 2]));