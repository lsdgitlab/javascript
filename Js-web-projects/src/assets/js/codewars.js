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

// // Create Phone Number
// function createPhoneNumber(numbers){
//   // loop through the all the integers in the array
//   // for(let i = 0; i < numbers.length; i++){
//   //   console.log(numbers[i]);
//   // }

//   let fstprt = numbers.slice(0, 3).join("");
//   let scdPart = numbers.slice(3,6).join("");
//   let lstPart = numbers.slice(6,10).join("");
//   return("("+fstprt+")"+ " " +scdPart+ "-" + lstPart);
// }
// // createPhoneNumber();
// console.log(createPhoneNumber('1234567890'));



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



