// Convert string to camel case

function toCamelCase(str){
    let newStr = "";
    if(str){
      let wordArr = str.split(/[-_]/g);
      for (let i in wordArr){
        if(i > 0){
          newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
        }else{
          newStr += wordArr[i]
        }
      }
    }else{
      return newStr
    }
    return newStr;
  }
  toCamelCase();

  // console.log(toCamelCase("ww-we_d"));

// Sum of all arguments
function sum1(arg) {
  total = 0;
  for(var i in arguments){
    total += arguments[i];
  }
  return total
  
}
sum1()
// console.log(sum1(2,3,25,10));

// Reverse one or more words, and returns the same string

// function reverseInPlace(str) {
//   var words = [];
//   words = str.match(/\S+/g);
//   var result = "";
//   for (var i = 0; i < words.length; i++) {
//      result += words[i].split('').reverse().join('') + " ";
//   }
//   return result
// }
// console.log(reverseInPlace("abd fhe kdj"))

// /* capitalize such that it capitalizes the name it receives. Method 1 */

// function getCapitalization(word) {
//   var str = word[0].toUpperCase() + word.substring(1).toLowerCase();
//   // return word[0].toUpperCase()+ word.substring(1).toLowerCase();
//   console.log(str);
  
// }
// getCapitalization("logic")
// getCapitalization("serve")
// getCapitalization("digital")

/* capitalize such that it capitalizes the name it receives. Method 2 */
const str = "i love javascript"

//split the above string into an array of strings 
//whenever a blank space is encountered

const arr = str.split(" ")
// console.log(arr);

//loop through each element of the array and capitalize the first letter.

for(i = 0; i < arr.length; i++){
  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  // console.log(arr[i]);
}
//Join all the elements of the array back into a string 
//using a blankspace as a separator 
const str2 = arr.join(" ")
console.log(str2);


// Remove whitespace
function removeExtraWhitespace(text){
  return text.trim();
}
console.log(removeExtraWhitespace(" Front End Developer  "));


// Learn Javascript

function getNameLength(name){
  return name.length
}
function nameInUpperCase(name){
  return name.toUpperCase();
}
function getLastCharacter(name){
  // const namele = name.length
  return name[name.length-1];
}


// console.log(getNameLength("Ravindra"));
console.log(getLastCharacter("RavindrD"));



