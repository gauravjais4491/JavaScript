const reverseGivenNumber = (num) => {
  let result = 0
  let reminder = 0
  while(num > 0) {
    reminder = num % 10
    result = result * 10 + reminder
    num = Math.floor(num / 10)
  }
  return result
}
console.log(reverseGivenNumber(1233414));