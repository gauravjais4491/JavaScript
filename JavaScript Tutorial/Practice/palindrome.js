
const isPalindrome = (A) => {
  let temp = A.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let right = temp.length;
  let left = 0
  console.log(temp);
  while (left < right) {
    if (temp[left] === temp[right - 1]) {
      left++;
      right--;
    } else {
      return 0;
    }
  }
  return 1;
}


console.log(isPalindrome('A man, a plan, a canal: Panama'));