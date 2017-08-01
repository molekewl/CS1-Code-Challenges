// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).
const stringCompression = (str) => {
  // store counts in object
  const arr = [];
  // store each value within the object to keep count
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    // because they are string letters it returns NaN / undefined
    if (arr[char] == undefined) {
      arr[char] = 0;
    }
    arr[char]++;
  }
  return arr;
};

console.log(stringCompression('aabcccccaaa'));