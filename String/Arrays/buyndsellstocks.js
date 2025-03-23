function buyandsellstocks(n) {
  debugger
  let min = n[0],
    profit = 0,
    cost

  for (let i = 1; i < n.length; i++) {
    cost = n[i] - min
    profit = Math.max(profit, cost)
    min = Math.min(min, n[i])
  }
  return profit
}
let arr = [7, 1, 5, 3, 6, 4]
console.log(buyandsellstocks(arr))
