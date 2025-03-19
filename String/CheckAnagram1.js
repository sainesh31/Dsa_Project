const CheckAnangram1=(str1,str2)=>{
  debugger
  if (str1.length !== str2.length) {
    return false
  }
  const strArr = Array.from(str1.toUpperCase())
  console.log(strArr)

  const arrMap = new Map()
  const str1Occurs = strArr.reduce((map,char) => map.set(char,map.get(char)+1 || 1), arrMap)
  console.log(str1Occurs);

  for (const char of str2.toUpperCase()){
    if(!str1Occurs.has(char)){
      return false
    }

    let strCount = str1Occurs.get(char)
    str1Occurs.set(char,--strCount)


    // If using post decrement
    // str1Occurs.set(char, getCharCount - 1);
    // getCharCount--;

    strCount===0 && str1Occurs.delete(char)
  }
return true
}
// console.log(CheckAnangram1("hello1", "world")); // ❌ false
// console.log(CheckAnangram1("anagram", "nagaram")); // ✅ true
// console.log(CheckAnangram1("aa", "a")); // ❌ false
// console.log(CheckAnangram1("", "")); // ✅ true (empty strings are anagrams)
console.log(CheckAnangram1("aacc", "cc")); // ❌ false (order matters)