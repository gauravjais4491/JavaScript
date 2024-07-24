// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  const positiveNumbers = new Set(A.filter(num => num > 0));
  let smallestPositive = 1;

  while (positiveNumbers.has(smallestPositive)) {
    smallestPositive++
  }

  return smallestPositive;
}


const solution1 = (S) => {
  let countFromLeft = 0
  let countFromRight = 0
  let arr = S.split('')
  while (arr.length > 0) {
    let left = 0, right = arr.length - 1
    if (arr[left] === arr[right]) {
      arr.shift()
      countFromLeft++
    }
    else {
      break
    }
    
  }
  arr = S.split('')
  while (arr.length > 0) {
    let left = 0, right = arr.length - 1
    if (arr[left] === arr[right]) {
      arr.pop()
      countFromRight++
    }
    else {
      break
    }
  }
  return Math.min(countFromLeft, countFromRight)
}
// console.log(solution([1, 3, 6, 4, 1, 2]))
console.log(solution1('xxxxxx'))
console.log(solution1('xyxxxx'))
console.log(solution1('xxxxyx'))
console.log(solution1('xxxxzxx'))