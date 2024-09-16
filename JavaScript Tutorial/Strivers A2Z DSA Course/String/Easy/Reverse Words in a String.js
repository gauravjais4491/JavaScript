const reverseWordsInAString = (str) => {
  let reversedSentence = "";
  let word = "";
  let right = str.length
  let left = 0

  while (left <= right - 1) {
    let ch = str[left]
    if (ch !== " ") {
      word += ch
    }
    else {
      reversedSentence = word + " " + reversedSentence
      word = ""
    }
    left++
  }
  reversedSentence = word + " " + reversedSentence
  return reversedSentence
  return str.split(' ').reverse().join(' ')
}

let originalString = "My Name is Gaurav";
console.log("Original String: " + originalString);
console.log("----------------");
console.log("Reversed String: " + reverseWordsInAString(originalString));