function printDiamond(n) {
  debugger
  let string = ''

  // Upper Pyramid
  for (let i = 1; i <= n; i++) {
    string += ' '.repeat(n - i) + '* '.repeat(i) + '\n'
  }

  // Lower Inverted Pyramid
  for (let i = n - 1; i >= 1; i--) {
    string += ' '.repeat(n - i) + '* '.repeat(i) + '\n'
  }
  console.log(string)
}

//   for (let i = 1; i <= n; i++) {
//     string += " ".repeat(n - i) + "*".repeat(i * 2 - 1) + "\n";
// }

// // Lower Inverted Pyramid
// for (let i = n - 1; i >= 1; i--) {
//     string += " ".repeat(n - i) + "*".repeat(i * 2 - 1) + "\n";
// }
//   console.log(string);
// }

// Call the function with desired height
printDiamond(5)
