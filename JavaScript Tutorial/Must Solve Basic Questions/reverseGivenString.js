const reverseGivenString = (str) => {
  let left = 0;
  let right = str.length - 1;

  let strArray = str.split('')
  while(right > left) {
    [strArray[left], strArray[right]] = [strArray[right], strArray[left]]
    left++
    right--
  }
  return strArray.join('')
}

console.log(reverseAString('Gaurav is name my'));