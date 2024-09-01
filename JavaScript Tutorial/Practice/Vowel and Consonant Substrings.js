/*

Given a string A consisting of lowercase characters.

You have to find the number of substrings in A which starts with vowel and end with consonants or vice-versa.

Input 1:
A = "aba"

Input 2:
A = "a"

Output 1: 2
Output 2: 0

Explanation 1:

Substrings of S are : [a, ab, aba, b, ba, a]Out of these only 'ab' and 'ba' satisfy the condition for special Substring. So the answer is 2.
Explanation 2:

No possible substring that start with vowel and end with consonant or vice-versa.

*/

const find = (A) => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let vowelCount = 0;
  let consonantCount = 0;
  let result = 0;

  for (let i = 0; i < A.length; i++) {
    if (vowels.has(A[i])) {
      result += consonantCount;
      vowelCount++;
    } else {
      result += vowelCount;
      consonantCount++;
    }
  }

  return result;
};


console.log(find("HeyGaurav"))