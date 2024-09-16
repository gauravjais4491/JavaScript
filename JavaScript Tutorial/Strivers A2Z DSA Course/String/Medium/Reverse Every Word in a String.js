const reverseEveryWordInAString = (str) => {
  let result = "";
  let i = 0;
  let word = "";


  while (i < str.length) {
    let ch = str[i]
    if (ch !== " ") {
      word = ch + word;
    }
    else {
      result += word + " "
      word = ""
    }
    i++
  }
  result += word
  return result

  // const arr = str.split(" ");
  // for (let i = 0; i < arr.length; i++) {
  //   arr[i] = arr[i].split("").reverse().join("")
  // }
  // return arr.join(" ")
}

console.log(reverseEveryWordInAString('My name is Gaurav'));
console.log(reverseEveryWordInAString('hello   world'));