// console.log("Leetcode Js");

function leetCode(){
    let m = document.createElement('main');
    let p = document.createElement('p');
    let img = document.createElement('img')
    m.append(p);
    p.append(img);
    // img.src=pattImg;
    // // logo.alt="LOGO";
    // // document.getElementById("bannerImg").src =  headerbanner;



    return m
}

// Example one
var romanToInt = function(s) {
    const myMap = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000  
    }
    let result = 0;
    
    for(let i = 0; i < s.length ; i++){
        const curr = myMap[s[i]];            
        const next = myMap[s[i + 1]];
        // console.log(myMap[s]);
        if(curr < next){
            result += next - curr;
            i++
        }else{
            result += curr
        }
        // console.log(result);
    }  
    return result
    

};
romanToInt("M");

// Example 2

// const nums = [1, 5, 8, 11, 8, 9, 15];
function twoSum(nums, target){
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i]+nums[j] === target){return [i, j]}
        }
        // console.log(1, 5);
    }
}
twoSum()

// Example 3













export default leetCode