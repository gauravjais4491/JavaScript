// Find_Triplets_That_Add_Up_ToZero
const ThreeSum = (arr) => {
  let a = 0
  let b = 1
  let c = 2
  let result = []
  while (a < arr.length) {
    if (arr[a] + arr[b] + arr[c] === 0) {
      result.push([arr[a], arr[b], arr[c]])
      a += 3
      b = a + 1
      c = c + 1
    }
    else if (b === arr.length - 1) {
      a++
      b = a + 1
      c = b + 1
    }
    else if (c === arr.length - 1) {
      b++;
      c = b + 1
    }

    else {
      c++
    }
  }
  return result 
}



console.log(ThreeSum([1, -1, 0, 1, 1, 3, -3, 0]));