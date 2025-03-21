/*
 * @description : Given a string, the function finds the length of the longest substring without any repeating characters
 * @param {String} str - The input string
 * @returns {Number} The Length of the longest substring in a given string without repeating characters
 * @example lengthOfLongestSubstring("abcabcbb") => 3
 * @example lengthOfLongestSubstring("bbbbb") => 1
 * @see https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

// const lengthOfLongestSubstring = (s) => {
//   debugger
//   if (typeof s !== 'string') {
//     throw new TypeError('Invalid Input Type')
//   }
//   let maxLength = 0
//   let start = 0
//   const charMap = new Map()
//   for (let end = 0; end < s.length; end++) {
//     if (charMap.has(s[end])) {
//       start = Math.max(start, charMap.get(s[end]) + 1)
//     }
//     charMap.set(s[end], end)
//     maxLength = Math.max(maxLength, end - start + 1)
//   }
//   return maxLength
// }


// var lengthOfLongestSubstring = function (s) {
//   if (typeof s !== 'string') {
//       throw new TypeError('Invalid input type');
//   }

//   let maxLength = 0;

//   for (let i = 0; i < s.length; i++) {
//       let charMap = new Map();

//       for (let j = i; j < s.length; j++) {
//           if (charMap.has(s[j])) {
//               break;  // Stop if a duplicate character is found
//           }
//           charMap.set(s[j], true);  // Mark character as seen
//           maxLength = Math.max(maxLength, j - i + 1);
//       }

//       // or using set and get instead of has 

//     //   for (let j = i; j < s.length; j++) {
//     //     if (charMap.get(s[j])===1) {
//     //         break;  // Stop if a duplicate character is found
//     //     }
//     //     charMap.set(s[j], 1);  // Mark character as seen
//     //     maxLength = Math.max(maxLength, j - i + 1);
//     // }
//   }

//   return maxLength;
// };

// // Test cases
// console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
// console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
// console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3 ("wke")
// console.log(lengthOfLongestSubstring(""));         // Output: 0 (Empty string)
// console.log(lengthOfLongestSubstring("dvdf"));     // Output: 3 ("vdf")


// console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
// console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
// console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3 ("wke")
// console.log(lengthOfLongestSubstring(""));         // Output: 0 (Empty string)
// console.log(lengthOfLongestSubstring("dvdf"));     // Output: 3 ("vdf")

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  debugger
  if (typeof s !== 'string') {
      throw new TypeError('Invalid input type');
  }

  let maxLength = 0;
  let start = 0;
  const charMap = new Map();

  for (let end = 0; end < s.length; end++) {
      if (charMap.has(s[end])) {
          start = Math.max(start,charMap.get(s[end]) + 1); // Move start forward
      }
      charMap.set(s[end], end); // Store last index of character
      maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};

// Test cases
console.log(lengthOfLongestSubstring("abba"))
console.log(lengthOfLongestSubstring("abcdabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3 ("wke")
console.log(lengthOfLongestSubstring(""));         // Output: 0 (Empty string)
console.log(lengthOfLongestSubstring("dvdf"));     // Output: 3 ("vdf")


export { lengthOfLongestSubstring }
