// 7

// const firstUniqChar = (str) => {
//   if (typeof str !== 'string') {
//     throw new TypeError('Argument should be string')
//   }

//   const arrMap = new Map()
//   for (const char of str){
//     if(!arrMap[char]){
//       arrMap[char] = 1
//     }
//     else{
//       arrMap[char]++
//     }
//   }
//   console.log(arrMap)

//   for(let i=0 ; i<str.length ; i++){
//     if(arrMap[str[i]]===1){
//       return i
//     }
//   }
//   return -1
// }

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  if (typeof s !== 'string') {
      throw new TypeError('Argument should be string')
  }
  const count = new Map();
  for (let char of s) {
      count.set(char, (count.get(char) || 0) + 1);


  }
  for (let i = 0; i < s.length; i++) {
      if (count.get(s[i]) === 1) return i;
  }

  return -1;


};

console.log("loveleetcode",firstUniqChar("loveleetcodelv"))
// console.log("leetcode",firstUniqChar("leetcode"))
// console.log("aabb",firstUniqChar("aabb"))

export { firstUniqChar }