const longestRepeatingNonOverlappingSubstring = (str) => {
  if (str.length < 2) return null
  let strLength = str.length
  let firstHalf = str.substring(0, (strLength / 2))
  let secondHalf = str.substring((strLength / 2))
  let temp = secondHalf[0]
  let arr = []

  for (let i = 1; i < secondHalf.length; i++) {
    if (firstHalf.includes(temp+secondHalf[i])) {
      temp += secondHalf[i]
    }
    else {
      arr.push(temp)
      temp = ""
    }
  }

  arr.push(temp)
  let maxLength = 0
  let maxString = ''
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {

      maxString = ""
      maxLength = arr[i].length
      maxString += arr[i]
    }
  }
  return maxString
}

console.log(longestRepeatingNonOverlappingSubstring('waliaswiggytredwaliaswiggyafrte'));