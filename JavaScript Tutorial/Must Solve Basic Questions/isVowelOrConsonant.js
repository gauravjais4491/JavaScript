const isVowelOrConsonant = (str) => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;
  let consonantCount = 0;

  // Remove all non characters from a string
  str = str.replace(/[^a-zA-Z]/g, '');

  // Count Vowels and Consonant
  for (const element of str) {
    vowels.includes(element) ? vowelCount++ : consonantCount++;
  }

  return [vowelCount, consonantCount]
}

console.log(isVowelOrConsonant('1Hi, My name is Gaurav'));