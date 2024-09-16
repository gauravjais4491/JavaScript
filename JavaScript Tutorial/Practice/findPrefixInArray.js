const findPrefixInArray = (arr) => {
  arr.sort((a, b) => a.length - b.length)
  let result = ""
  let firstIndex = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if(!arr[i].startsWith(firstIndex)) {
      temp = false;;
    }
    // if(arr[i].subString(0,firstIndex.length).includes())
  }
  return arr
}

console.log(findPrefixInArray(["Gaurav", "Gaur", "Gaiwi"]));