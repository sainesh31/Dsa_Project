//  finding element at row=3 and col=5(optimal solution)

// function pascalValueOptimized(row, col) {
//   debugger
//   if (col > row) return null; // Invalid position

//   let res=1
//   for (let i=0 ;i< col;i++){
//     res *= row-i
//     res/= i+1
//   }
//   return res;
// }

// console.log(pascalValueOptimized(10, 3));

// printing nth row
// function pascalValueOptimized(row) {
//   debugger
//   // if (col > row) return null; // Invalid position

//   let res=[1]
//   for (let i=1 ;i<= row;i++){
//     res[i] = (res[i - 1] * (row - i + 1)) / i;
//     console.log(res)
//   }
//   return res;
// }

// console.log(pascalValueOptimized(6))

// print complete pascal triangle brute force

// function factorial(n){
//   if(n===0 || n===1){
//     return 1
//   }
//   return n*factorial(n-1);
// }

// function binomialCoefficient(n,k){
//   return factorial(n)/(factorial(k)*factorial(n-k))
// }

// function printPascalsTriangle(n){
//   debugger
//   let triangle =[]
//   for ( let i=0;i<n;i++){
//     let rows=[]
//     for (let j=0 ; j<=i;j++){
//       rows.push(binomialCoefficient(i,j))
//     }
//     triangle.push(rows);
//   }
//   return triangle
// }
// console.log(printPascalsTriangle(5));

// function factorial(n){
//   if(n===0 || n===1){
//     return 1
//   }
//   return n*factorial(n-1);
// }

// function binomialCoefficient(n,k){
//   return factorial(n)/(factorial(k)*factorial(n-k))
// }

// 2
// function factorial(n){
//   if(n===0 || n===1){
//     return 1
//   }
//   return n*factorial(n-1);
// }

// function binomialCoefficient(n,k){
//   return factorial(n)/(factorial(k)*factorial(n-k))
// }

// function printPascalsTriangle(n){
//   debugger
//   let rows=[]
//   for ( let i=0;i<n;i++){

//     for (let j=0 ; j<=i;j++){
//       rows.push(binomialCoefficient(i,j))
//     }

//   }
//   return rows
// }
// console.log(printPascalsTriangle(5));

// optimized
let ans = []
function generateRow(n) {
  // let ans = []
  let res = [1]
  for (let i = 1; i <= n; i++) {
    res[i] = (res[i - 1] * (n - i + 1)) / i
    // console.log(res)
  }
  return res
}
function Pascaltrianglecomplete(n) {
  for (let i = 0; i <= n; i++) {
    ans.push(generateRow(i))
  }
  return ans
}

console.log(Pascaltrianglecomplete(5))
