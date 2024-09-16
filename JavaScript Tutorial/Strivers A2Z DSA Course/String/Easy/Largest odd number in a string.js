const largestOddNumberInAString = (str) => {
  if (str.length === 0) return null
  let largest = -Infinity
  for (let i = 0; i < str.length; i++) {
    let temp = +str[i]
    if ((temp % 2 !== 0) && temp > largest) {
      largest = temp
    }
  }
  return largest === -Infinity ? null : largest
}

console.log(largestOddNumberInAString("13579113"));