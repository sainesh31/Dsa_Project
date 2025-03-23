// 1  brute force

// function maxSubarraySumBruteForce(arr) {
//   debugger
//   let maxSum = -Infinity

//   for (let i = 0; i < arr.length; i++) {
//     let currentSum = 0
//     for (let j = i; j < arr.length; j++) {
//       currentSum += arr[j]
//       maxSum = Math.max(maxSum, currentSum)
//     }
//   }

//   return maxSum
// }

// // 2 brute force
// function maxSubarraySumThreeLoops(arr) {
//   let maxSum = -Infinity

//   for (let i = 0; i < arr.length; i++) {
//     // Start index
//     for (let j = i; j < arr.length; j++) {
//       // End index
//       let currentSum = 0
//       for (let k = i; k <= j; k++) {
//         // Sum elements from i to j
//         currentSum += arr[k]
//       }
//       maxSum = Math.max(maxSum, currentSum)
//     }
//   }

//   return maxSum
// }

// function maxSubarray(arr) {
//   debugger
//   let maxSum = -Infinity
//   let sum = 0

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//     maxSum = Math.max(maxSum, sum)
//   }

//   return maxSum
// }

// 3 optimized maxSubarrayKadane's algo
// function maxSubarraySumKadane(arr) {
//   debugger
//   let maxSum = -Infinity
//   let currentSum = 0

//   for (let num of arr) {
//     currentSum = Math.max(num, currentSum + num)
//     maxSum = Math.max(maxSum, currentSum)
//   }

//   return maxSum
// }

// 4 print the array

function maxSubarraySumKadane(arr) {
  debugger
  let maxSum = -Infinity
  let currentSum = 0

  let start = 0,
    end = 0,
    tempStart = 0

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i]

    if (currentSum === 0) {
      tempStart = i + 1 // Start a new subarray at the next index
    }

    if (currentSum > maxSum) {
      maxSum = currentSum
      start = tempStart
      end = i
    }

    if (currentSum < 0) {
      currentSum = 0
      tempStart = i + 1 // Reset the starting point for the next subarray
    }
  }

  return {
    maxSum,
    subarray: arr.slice(start, end + 1) // Extract the maximum subarray
  }
}

// Example usage
const arr = [-2, -1, -3, -4, -1, -2, -1, -5, -4]
const arr1 = [-2, -1, 22, -4, -1, -2, -1, 15, -4]
const result = maxSubarraySumKadane(arr1)
console.log(result)

// console.log("Maximum Subarray Sum:", result.maxSum); // Output: 6
// console.log("Maximum Subarray:", result.subarray); // Output: [4, -1, 2, 1]

// Example usage
// const arr = [-2, -3, 4, -1, -2, 1, 5, -3]
// const arr1 = [-1, -2, -10, -111, -2, -21, -1, -5, -4]
// // const arr1 = [-2, -3, 4, -1, -2, 1, 5, -3]
// console.log(maxSubarraySumKadane(arr)) // Output: 6
// console.log(maxSubarraySumBruteForce(arr1))
