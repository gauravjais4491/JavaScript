const anagrams = (str1, str2) => {
  if (str1.length !== str2.length) return false

  let obj = {}
  for (let i = 0; i < str1.length; i++) {
    obj[str1[i]] = (obj[str1[i]] || 0) + 1
    obj[str2[i]] = (obj[str2[i]] || 0) - 1
  }

  for (let key in obj) {
    if (obj[key] !== 0) return false
  }
  return true
}

console.log(anagrams("ABCD", "ABCD"));