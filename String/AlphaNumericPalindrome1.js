const alphaNumericPalindrome=(str) =>{
  if ( typeof str!== "string"){
    throw new Error("Argument should be string")
  }
  const newStr = str.replace(/[^a-z0-9]+/gi, '').toLowerCase(); //Remove everything except a-z and 0-9
  const midIndex = newStr.length >>1 //2
  for(let i=0 ; i<midIndex ; i++){
    if(newStr.at(i) !== newStr.at(~i)){
      return false
    }
  }
  return true
}



console.log(alphaNumericPalindrome("racecar")); // true
console.log(alphaNumericPalindrome("RaceCar")); // true
console.log(alphaNumericPalindrome("race CAR")); // true
console.log(alphaNumericPalindrome("2A3*3a2")); // true
console.log(alphaNumericPalindrome("2A3 3a2")); // true
console.log(alphaNumericPalindrome("2_A3*3#A2")); // true

console.log(alphaNumericPalindrome("hello")); // false
console.log(alphaNumericPalindrome("Race a Car")); // false
console.log(alphaNumericPalindrome("123ab321")); // false
console.log(alphaNumericPalindrome("palindrome")); // false