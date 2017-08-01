/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array.
 */

/**
  * example usage:
  * const anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */
const arr = [ 'abc' ];

const anagrams = (arr) => {
  let anagrams = {};
  arr.forEach(function(str) {
    let recursion = function(anagram, str) {
      if (str === '')
        anagrams[anagram] = 1;
      for (let i = 0; i < str.length; i++) {
        recursion(anagram + str[i], str.slice(0, i) + str.slice(i + 1));
      }
    };
    recursion('', str);
  });
  return Object.keys(anagrams);
}

console.log(anagrams(arr));