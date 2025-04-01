// reduce

const array1 = [1, 2, 3, 4]

// 0 + 1 + 2 + 3 + 4
const initialValue = 0
const sumWithInitial = array1.reduce((accumulator, currentValue) => {
  // debugger; // Debugging breakpoint
  console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`)
  return accumulator + currentValue
}, initialValue)

console.log(sumWithInitial)
// Expected output: 10

// ------------------------------------------------------------------------
let str1 = 'abc'
let str2 = 'cba'

console.log('Initial str1:', str1)
console.log('Initial str2:', str2)

const result = ![...str1].reduce((str2Acc, cur, index) => {
  debugger // Debugger will pause here in dev tools
  console.log(`Step ${index + 1}:`)
  console.log('Current character from str1:', cur)
  console.log('Before replace, str2Acc:', str2Acc)

  const updatedStr2Acc = str2Acc.replace(new RegExp(cur, 'i'), '')

  console.log('After replace, str2Acc:', updatedStr2Acc)
  console.log('---------------------')

  return updatedStr2Acc
}, str2)

console.log('Final result:', result)

// -----------------------------------------------------------
// const checkAnagramRegex = (str1, str2) => {
//   debugger
//   if (typeof str1 !== 'string' || typeof str2 !== 'string') {
//     throw new TypeError('Both arguments should be strings.')
//   }
//     if(str1!==str2){
//       return false
//     }

//     return ![...str1].reduce((a,i)=>{
//       a.replace(new RegExp(i,a),"")
//     },str2)

//   }

//   console.log(checkAnagramRege("xwez","zwex"))

// -------------------------------------------------------
// New Map

// const map1 = new Map();
// console.log(map1)

// map1.set("a", 1);
// map1.set("b", 2);
// map1.set("c", 3);

// console.log(map1.get("a"));
// // Expected output: 1

// map1.set("a", 97);

// console.log(map1.get("a"));
// // Expected output: 97

// console.log(map1.size);
// // Expected output: 3

// map1.delete("b");

// console.log(map1);
// Expected output: 2

// --------------------------------------------------------
// Null coalescing
// If value is falsy (undefined, null, 0, NaN, '', or false), it returns 1.
// If value is truthy, it returns value.
// 0||10 --> 10

const elements = ['Fire', 'Air', 'Water']

console.log(elements.join())
// Expected output: "Fire,Air,Water"

console.log(elements.join(''))
// Expected output: "FireAirWater"

console.log(elements.join('-'))()
// Expected output: "Fire-Air-Water"
//
// concept
!elements.some((arr) => arr.join(',') === key)
// concept
return Array.from(result).map((str) => str.split(',').map(Number)) // Convert Set back to array format

// ['1,2,3,4', '2,3,4,5', '1,1,1,1'].split(",")
// [Array(4), Array(4), Array(4)]

x = Array.from(['1,2,3,4', '2,3,4,5', '1,1,1,1'])
y = x.map((str) => str.split(',').map(Number))
