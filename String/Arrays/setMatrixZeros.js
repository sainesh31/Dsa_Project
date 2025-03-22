// // brute force method

// function setMatrixZeros(matrix) {
// debugger
//   let rows = new Set();
//   let cols = new Set();

//   // Step 1: Find all rows and columns that should be set to zero
//   for (let i = 0; i < matrix.length; i++) {
//       for (let j = 0; j < matrix[0].length; j++) {
//           if (matrix[i][j] === 0) {
//               rows.add(i);
//               cols.add(j);
//           }
//       }
//   }

//   // Step 2: Set the identified rows to zero
//   for (let row of rows) {
//       for (let j = 0; j < matrix[0].length; j++) {
//           matrix[row][j] = 0;
//       }
//   }

//   // Step 3: Set the identified columns to zero
//   for (let col of cols) {
//       for (let i = 0; i < matrix.length; i++) {
//           matrix[i][col] = 0;
//       }
//   }
// }

// // Example usage:
// let matrix = [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1]
// ];

// setMatrixZeros(matrix);
// console.log(matrix);

// 2nd solution

// function setMatrixZeros(matrix) {
//     debugger
//     let m = matrix.length, n = matrix[0].length;

//     // Step 1: Mark affected cells as -1 (except original 0s)
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (matrix[i][j] === 0) {
//                 // Mark the entire row as -1 (except existing 0s)
//                 for (let k = 0; k < n; k++) {
//                     if (matrix[i][k] !== 0) {
//                         matrix[i][k] = -1;
//                     }
//                 }
//                 // Mark the entire column as -1 (except existing 0s)
//                 for (let k = 0; k < m; k++) {
//                     if (matrix[k][j] !== 0) {
//                         matrix[k][j] = -1;
//                     }
//                 }
//             }
//         }
//     }

//     // Step 2: Convert all -1 back to 0
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (matrix[i][j] === -1) {
//                 matrix[i][j] = 0;
//             }
//         }
//     }
// }

// Example usage:
// let matrix = [
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1]
//   ];

//   let matrix1 = [
//     [1, 1, 1],
//     [1, 0, 0],
//     [1, 1, 1]
//   ];

//   setMatrixZeros(matrix);
//   setMatrixZeros(matrix1)
//   console.log(matrix);

// 3 optimal

function setMatrixZeros(matrix) {
  debugger
  let m = matrix.length,
    n = matrix[0].length
  let firstRowZero = false,
    firstColZero = false

  // Step 1: Check if first row or first column should be zeroed
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) firstColZero = true
  }
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) firstRowZero = true
  }

  // Step 2: Use first row and first column as markers
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0 // Mark row
        matrix[0][j] = 0 // Mark column
      }
    }
  }

  // Step 3: Set matrix cells to zero based on markers
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
  }

  // Step 4: Handle first row and first column separately
  if (firstColZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0
    }
  }
  if (firstRowZero) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0
    }
  }
}

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]

let matrix1 = [
  [0, 0, 1],
  [1, 0, 0],
  [1, 1, 1]
]

//   setMatrixZeros(matrix);
setMatrixZeros(matrix1)
console.log(matrix)

//   mine optimal sol

// function setMatrixZeros(matrix) {
//     debugger
//     let m = matrix.length, n = matrix[0].length;
//     let firstRowZero = false, firstColZero = false;

//     for (let i=0;i<m ;i++){
//         if(matrix[i][0]==0){
//             firstColZero=true;

//         }
//     }
//     for (let j=0;j<n ;j++){
//         if(matrix[0][j]==0){
//             firstRowZero=true;

//         }
//     }

//     for (let i=1;i<m;i++){
//         for (let j=1;j<n;j++) {
//             if(matrix[i][j]==0){
//                 matrix[i][0]=0;
//                 matrix[0][j]=0;
//             }
//         }
//     }

//     for (let i=1;i<m;i++){
//         for (let j=1;j<n;j++){
//             if(matrix[0][j]===0 || matrix [i][0]===0){
//                 matrix[i][j]=0
//             }
//         }
//     }

//     if (firstColZero) {
//         for (let i = 0; i < m; i++) {
//             matrix[i][0] = 0;
//         }
//     }
//     if (firstRowZero) {
//         for (let j = 0; j < n; j++) {
//             matrix[0][j] = 0;
//         }
//     }

// }
