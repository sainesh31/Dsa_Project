// // brute force
// function fourSumBrute(nums, target) {
//   debugger
//   let result = []
//   let n = nums.length
//   for (let i = 0; i < n - 3; i++) {
//     for (let j = i + 1; j < n - 2; j++) {
//       for (let k = j + 1; k < n - 1; k++) {
//         for (let l = k + 1; l < n; l++) {
//           if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
//             let quad = [nums[i], nums[j], nums[k], nums[l]].sort(
//               (a, b) => a - b
//             )
//             let key = quad.join()
//             console.log(quad)
//             console.log(key)
//             console.log(typeof key)
//             if (!result.some((arr) => arr.join() === key)) {
//               result.push(quad)
//             }
//           }
//         }
//       }
//     }
//   }

//   return result
// }

// // Example
// console.log(fourSumBrute([1, 0, -1, -2, 0, 2], 0))

// // optimal

// brute force
/**

 */
// var fourSum = function (nums, target) {
//   debugger
//   nums.sort((a, b) => a - b) // Sorting helps in avoiding duplicates
//   let result = new Set()
//   let n = nums.length

//   for (let i = 0; i < n - 3; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue // Skip duplicates for num1

//     for (let j = i + 1; j < n - 2; j++) {
//       if (j > i + 1 && nums[j] === nums[j - 1]) {
//         continue
//       } // Skip duplicates for num2

//       let seen = new Set() // HashSet to store elements we've seen so far

//       for (let k = j + 1; k < n; k++) {
//         let num4 = target - (nums[i] + nums[j] + nums[k]) // Find the required 4th number

//         if (seen.has(num4)) {
//           let quad = [nums[i], nums[j], nums[k], num4].sort((a, b) => a - b)
//           result.add(quad.toString()) // Convert to string to avoid duplicates
//         }

//         seen.add(nums[k]) // Add nums[k] to the set for future checks
//         console.log(seen)
//       }
//     }
//   }

//   // let x = Array.from(result).map((str) =>
//   //   str.split(',').map((str) => Number(str))
//   // )
//   // console.log('X', x)

//   let x = Array.from(result)
//   console.log('X', x)
//   console.log(result)
//   return Array.from(result).map((str) => str.split(',').map(Number)) // Convert Set back to array format
// }

// console.log(fourSum([1, 0, -1, -2, 0, 2], 0))

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  debugger
  nums.sort((a, b) => a - b) // Sorting helps with duplicate removal
  let result = []
  let n = nums.length

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue // Skip duplicate values for i

    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue // Skip duplicate values for j

      let left = j + 1,
        right = n - 1

      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right]

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]])

          // Skip duplicate values for left and right pointers
          while (left < right && nums[left] === nums[left + 1]) left++
          while (left < right && nums[right] === nums[right - 1]) right--

          left++
          right--
        } else if (sum < target) {
          left++ // Move left pointer to increase sum
        } else {
          right-- // Move right pointer to decrease sum
        }
      }
    }
  }
  return result
}

console.log(fourSum([2, 2, 2, 2, 2], 8))
