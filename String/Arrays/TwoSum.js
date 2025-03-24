// brute force

function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j] // Return indices if a pair is found
      }
    }
  }
  return [] // Return empty array if no pair is found
}

// Example usage:
console.log(twoSumBruteForce([2, 7, 11, 15], 18)) // Output: [0, 1]

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
