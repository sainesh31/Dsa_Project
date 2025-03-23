// // brute force NLogN
// function sortArray(arr) {
//   return arr.sort((a, b) => a - b)
// }

// // Example usage
// let arr = [2, 0, 1, 2, 0, 1, 1, 0, 2]
// console.log(sortArray(arr)) //

// function sortArray(arr) {
//   let count0 = 0,
//     count1 = 0,
//     count2 = 0
//   for (let num of arr) {
//     if (num === 0) count0++
//     else if (num === 1) count1++
//     else count2++
//   }
//   console.log(count0, count1, count2)

//   let index = 0
//   // while(count0--)
//   while (count0--) arr[index++] = 0
//   while (count1--) arr[index++] = 1
//   while (count2--) arr[index++] = 2

//   return arr
// }
// let arr = [2, 0, 1, 2, 0, 1, 1, 0, 2, 2]
// console.log(sortArray(arr)) //

// 3 using optimal sol deutch national flag algo
function sortArray(arr) {
  debugger
  let low = 0,
    mid = 0,
    high = arr.length - 1

  while (mid <= high) {
    if (arr[mid] === 0) {
      // Swap arr[low] and arr[mid]
      ;[arr[low], arr[mid]] = [arr[mid], arr[low]]
      low++
      mid++
    } else if (arr[mid] === 1) {
      mid++ // Just move mid forward
    } else {
      // Swap arr[mid] and arr[high]
      ;[arr[mid], arr[high]] = [arr[high], arr[mid]]
      high--
    }
  }
  return arr
}

// Example usage
let arr = [2, 0, 1, 2, 0, 1, 1, 0, 2]
console.log(sortArray(arr)) // Output: [0, 0, 0, 1, 1, 1, 2, 2, 2]
