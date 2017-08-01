// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

const compressString = (str) => {
  let charCount = 1; // count
  let currentChar = null; // placeHolerString
  let compressedStr = ''; // newString;

  for (let i = 0; i < str.length; i++) {
    // loop over string given and check each char
    if (str[i] === currentChar) charCount++;
    if (currentChar === null) currentChar = str[i];
    // currentIndex !== currentChar || currentChar is not null
    if (str[i] !== currentChar || currentChar === null) {
      compressedStr += currentChar += charCount;
      charCount = 1;
      currentChar = str[i];
      // compressedStr += currentChar;
      // compressedStr += charCount;
      // currentChar = str[i];
    }
    // console.log("CHAR COUNT:", charCount);
    // console.log("CurrentChar", currentChar);
    // compressedStr = currentChar + charCount;
  }
  // compressedStr += currentChar += charCount;
  // return compressedStr.length > str.length ? str : compressedStr;
  return compressedStr;
  // count
  // placeHolderString
  // newString
  // loop over string given and check each char
    // if placeHolder == index augment count
  // return newString
};

console.log(compressString('aabcccccaaa'));