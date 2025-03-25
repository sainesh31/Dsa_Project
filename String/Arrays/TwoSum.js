// // brute force

// function twoSumBruteForce(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j] // Return indices if a pair is found
//       }
//     }
//   }
//   return [] // Return empty array if no pair is found
// }

// // Example usage:
// console.log(twoSumBruteForce([2, 7, 11, 15], 18)) // Output: [0, 1]

// optimal solution

// function twoSum(nums, target) {
//   debugger

//   let map = new Map()

//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i]

//     if (map.has(complement)) {
//       return [map.get(complement), i]
//     }

//     map.set(nums[i], i)
//     console.log(map)
//   }

//   return []
// }

// // Example usage:
// console.log(twoSum([2, 7, 11, 15], 18)) // Output: [0, 1]

// optimal soltion if sorted using two pointer greedy approach
function twoSumTwoPointer(nums, target) {
  debugger
  let l = 0,
    r = nums.length - 1
  let sortedNums = nums
    .map((nums, index) => ({ nums, index }))
    .sort((a, b) => a.nums - b.nums)
  console.log(sortedNums)

  while (l < r) {
    let sum = sortedNums[l].nums + sortedNums[r].nums
    if (sum === target) {
      return [sortedNums[l].index, sortedNums[r].index]
    } else if (sum > target) {
      r--
    } else {
      l++
    }
  }
  return []
}

// Example usage:
console.log(twoSumTwoPointer([2, 11, 7, 15], 9)) // Output: [0, 1]
