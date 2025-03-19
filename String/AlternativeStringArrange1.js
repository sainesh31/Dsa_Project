// Alternative arrange the two given strings in one string in O(n) time complexity.

// Problem Source & Explanation: https://www.geeksforgeeks.org/alternatively-merge-two-strings-in-java/

/**
 * Alternative arrange the two given strings in one string in O(n) time complexity.
 * @param {String} str1 first input string
 * @param {String} str2 second input string
 * @returns `String` return one alternative arrange string.
 */
const AlternativeStringArrange = (str1, str2) => {
  debugger
  // firstly, check that both inputs are strings.
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return 'Not string(s)'
  }

  // output string value.
  let outStr= ""
  let absLength=str1.length>str2.length?str1.length:str2.length
  for(let i=0;i<absLength;i++){
    if(i<str1.length){
      outStr+=str1[i]
    }
    if(i<str2.length){
      outStr+=str2[i]
    }
  }
  return outStr
}

console.log(AlternativeStringArrange("abc", "123")); 
// Output: "a1b2c3"

console.log(AlternativeStringArrange("abcd", "123")); 
// Output: "a1b2c3d"

console.log(AlternativeStringArrange("abc", "12345")); 
// Output: "a1b2c345"

console.log(AlternativeStringArrange("hello", "world")); 
// Output: "hweolrllod"

console.log(AlternativeStringArrange("short", "loooooong")); 
// Output: "slohoorntooooong"

console.log(AlternativeStringArrange("Hi", "12345")); 
// Output: "H1i2345"

console.log(AlternativeStringArrange("", "test")); 
// Output: "test"

console.log(AlternativeStringArrange("JS", "")); 


export { AlternativeStringArrange }
