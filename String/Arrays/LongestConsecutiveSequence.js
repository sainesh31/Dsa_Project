// brute force using array includes
// function longestConsecutiveBruteForce(nums) {
//   debugger
//   let longest = 0
//   for (let i = 0; i < nums.length; i++) {
//     let currentNums = nums[i]
//     let count = 1
//     while (nums.includes(currentNums + 1)) {
//       count += 1
//       currentNums += 1
//     }
//     if (count > longest) {
//       longest = count
//     }
//   }
//   return longest
// }
// const nums = [100, 4, 200, 1, 3, 2]
// console.log(
//   'Longest Consecutive Sequence Length:',
//   longestConsecutiveBruteForce(nums)
// )

// brute force using linear search
// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) return true
//   }
//   return false
// }

// function longestConsecutiveNoIncludes(nums) {
//   let longest = 0

//   for (let i = 0; i < nums.length; i++) {
//     let currentNum = nums[i]
//     let count = 1

//     while (linearSearch(nums, currentNum + 1)) {
//       currentNum += 1
//       count += 1
//     }

//     longest = Math.max(longest, count)
//   }

//   return longest
// }

// const nums = [100, 4, 200, 1, 3, 2]
// console.log(
//   'Longest Consecutive Sequence Length:',
//   longestConsecutiveNoIncludes(nums)
// )

// optimized
function longestConsecutiveOptimized(nums) {
  // debugger
  const numSet = new Set(nums)
  console.log(numSet)
  let longest = 0

  for (let num of numSet) {
    // Only start counting if it's the start of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num
      let count = 1

      while (numSet.has(currentNum + 1)) {
        currentNum += 1
        count += 1
      }

      longest = Math.max(longest, count)
    }
  }

  return longest
}

const nums = [100, 4, 200, 1, 3, 2]
console.log(
  'Longest Consecutive Sequence Length:',
  longestConsecutiveOptimized(nums)
)
